import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ProgressCircular } from '../../components/ProgressCircular';
import { Pokemon } from '../../models/Pokemon';
import pokeball from '../../assets/img.gif'

import { useGlobalsProvider } from '../../providers/GlobalsProvider';
import { getIconType, requestApi } from '../../services/PokeApi';
import { CardDetailPokemon, CardEvolutionPokemon, CardEvolutionPokemonItem, CardEvolutionPokemonItemTypes, CardImgDetailPokemon, CardInfoPokemon, CardInfoPokemonItem, CardStatusPokemon, CardTypesPokemon, CardTypesPokemonItem, DivEvolutionFlex, FooterrDetailPokemon, HeaderDetailPokemon,SubCardTypesPokemon, Wrapper } from './style';
import { throws } from 'assert';
import { PokemonError } from '../../components/PokemonError';
const { Option } = Select;

type paramsPokemon = {
    nomePokemonUrl: string
}

export const DetailPokemonPage = () => {
    let { nomePokemonUrl } = useParams<paramsPokemon>();
    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon)
    const [pokemonNotfound, setPokemonNotfound] = useState<boolean>(false);
    const [pokemonSpecie, setPokemonSpecie] = useState<any | null>(null)
    const [pokemonEvolutions, setPokemonEvolutions] = useState<Pokemon[]>([])
    const [namePokemon, setNamePokemon] = useState<string>(nomePokemonUrl);
    const [namePokemonVarieties, setNamePokemonVarieties] = useState<string>(namePokemon);
    const { loading, setLoading } = useGlobalsProvider()

    const history = useHistory()

    const TYPE_PRINCIPAL = 0;

    useEffect(() => {
        getPokemon();
    }, [namePokemon])

    useEffect(() => {
        setNamePokemon(nomePokemonUrl)
    }, [nomePokemonUrl])

    const getPokemon = async () => {
        setLoading(true);
        const responsePokeApi = await getPokemonDetails(namePokemon);
        const responseSpecie = await getPokemonSpecie(responsePokeApi);
        const responseEvolutionChain = await getEvolution(responseSpecie);
        const evolutionChain = await makeEvolutionsChain(responseEvolutionChain.chain)
        const responsePokemonEvolution = evolutionChain.map(async (item: any) => {
            return await getPokemonDetails(item.species_name);
        })
        const evolutionPokemons = await Promise.all(responsePokemonEvolution);
        setPokemonEvolutions(evolutionPokemons);
        setPokemon(responsePokeApi)
        setPokemonSpecie(responseSpecie)
        setLoading(false);
    }

    const getPokemonDetails = async (namePokemon:string) => {
        try {
            return await requestApi('pokemon/' + namePokemon);
        } catch (error) {
            setLoading(false);
            setPokemonNotfound(true)
            console.log(error)
        }
    }
    const getPokemonSpecie = async (pokemon: Pokemon) => {
        try {
            return await requestApi('pokemon-species/' + pokemon.species.name);
        } catch (error) {
            setPokemonNotfound(true)
            setLoading(false);
            console.log(error)
        }
    }
    
    const getEvolution = async (pokemonSpecie: any) => {
        try {
            const urlChainEvolution = pokemonSpecie?.evolution_chain.url.replace('https://pokeapi.co/api/v2/', '')
            return await requestApi(urlChainEvolution);
        } catch (error) {
            setLoading(false);
            setPokemonNotfound(true)
            console.log(error)
        }

    }
    const makeEvolutionsChain = async (chain:any) =>{
        let evoChain = [];
        let evoData = chain;
        do {
            let numberOfEvolutions = evoData['evolves_to'].length;

            evoChain.push({
                "species_name": evoData.species.name,
            });

            if (numberOfEvolutions > 1) {
                for (let i = 1; i < numberOfEvolutions; i++) {
                    evoChain.push({
                        "species_name": evoData.evolves_to[i].species.name,
                    });
                }
            }

            evoData = evoData['evolves_to'][0];

        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
        return evoChain;
    }
    const convertDecimetroToMetre = (value: number) => {
        return (Math.round((value * 0.1) * 100) / 100)
    }
    const goToPokemonEvolutionUrl = (name: string) => {
        if (name !== nomePokemonUrl)
            history.push("/pokemon/" + name);
    }
    const goToHomeType = (name: string) => {
        history.push("/" + name);
    }
    const getDescribePokemon = () => {
        const describeEn = pokemonSpecie.flavor_text_entries.filter((pokemon: any) => pokemon.language.name === 'en');
        return describeEn[0].flavor_text;
    }
    const handleChange = (event: any) => {
        setNamePokemonVarieties(event.target.value);
        setNamePokemon(event.target.value);
    }
    return (
        <>
            {!loading ?
                <>
                    {pokemon && pokemonSpecie && !pokemonNotfound &&
                        <Wrapper>
                            <HeaderDetailPokemon>
                                <img style={{ width: '100px' }} src={getIconType(pokemon.types[TYPE_PRINCIPAL].type)} alt="" />
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h1 style={{ margin: 0 }}>{pokemon.name}</h1>
                                    {pokemonSpecie.varieties.length > 1 &&
                                        <select style={{ padding: '4px', borderRadius: '10px', width: '150px', zIndex: 999, textTransform: 'capitalize' }} value={namePokemonVarieties} onChange={handleChange}>
                                            {pokemonSpecie.varieties.map((item: any) => (
                                                <option value={item.pokemon.name}>{item.pokemon.name}</option>
                                            ))}
                                        </select>
                                    }
                                </div>
                            </HeaderDetailPokemon>
                            <CardImgDetailPokemon className={`bg-${pokemon.types[TYPE_PRINCIPAL].type.name}`}>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                            </CardImgDetailPokemon>
                            <CardDetailPokemon>
                                <p>{getDescribePokemon()}</p>
                            </CardDetailPokemon>
                            <CardInfoPokemon>
                                <CardInfoPokemonItem>
                                    <h2>Height</h2>
                                    <p>{convertDecimetroToMetre(pokemon.height)} m</p>
                                    <h2>Weight</h2>
                                    <p>{convertDecimetroToMetre(pokemon.weight)} kg</p>
                                </CardInfoPokemonItem>
                                <CardInfoPokemonItem>
                                    <h2>Ability</h2>
                                    <p>{pokemon.abilities[0].ability.name}</p>
                                    <h2>Base xp</h2>
                                    <p>{pokemon.base_experience} </p>
                                </CardInfoPokemonItem>
                            </CardInfoPokemon>
                            <CardStatusPokemon>
                                <h2>Stats</h2>
                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
                                    {pokemon.stats.map((item: any, key: any) => (
                                        <div key={key} style={{ margin: '10px' }}>
                                            <ProgressCircular
                                                progress={item.base_stat}
                                                size={80}
                                                strokeWidth={15}
                                                circleOneStroke='#d9edfe'
                                                circleTwoStroke='#141414'
                                            />
                                            <h6>{item.stat.name}</h6>
                                        </div>
                                    ))}
                                </div>
                            </CardStatusPokemon>
                            <CardTypesPokemon>
                                <h3>Types</h3>
                                <SubCardTypesPokemon>
                                    {pokemon.types.map((item, key) => (
                                        <CardTypesPokemonItem key={key} onClick={e => goToHomeType(item.type.name)} className={`bg-${item.type.name}`}>
                                            <a>{item.type.name}</a>
                                        </CardTypesPokemonItem>

                                    ))}
                                </SubCardTypesPokemon>
                            </CardTypesPokemon>
                            <CardEvolutionPokemon>
                                <h2>Evolution</h2>
                                <DivEvolutionFlex >
                                    {pokemonEvolutions.length > 0 && pokemonEvolutions.map((item, key) => (
                                        <CardEvolutionPokemonItem key={key} onClick={e => goToPokemonEvolutionUrl(item.name)}>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt="" />
                                            <h2>{item.name}</h2>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}>
                                                {item.types.map((item, key) => (
                                                    <CardEvolutionPokemonItemTypes key={key} className={`bg-${item.type.name}`}>
                                                        <a>{item.type.name}</a>
                                                    </CardEvolutionPokemonItemTypes>
                                                ))}
                                            </div>

                                        </CardEvolutionPokemonItem>
                                    ))
                                    }
                                </DivEvolutionFlex>

                            </CardEvolutionPokemon>
                        </Wrapper>
                    }
                    {pokemonNotfound &&
                        <PokemonError message="Desculpe não conseguir encontrar o pokemon!"/>                        
                    }
                </>
                :
                <div className="loading">
                    <img src={pokeball} alt="" />
                </div>
            }
        </>

    )
}