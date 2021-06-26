import React, { useEffect, useState } from 'react'
import { getColorPokemon, getIconType, requestApi } from '../../services/PokeApi';
import LazyLoad from 'react-lazyload';
import { BoxTypes, Card, Id, ImgPokemon, Info, Name, PokeBallBg, SubCard } from './style';
import { useHistory } from 'react-router-dom';

type PokemonProps ={
    pokemon:any,
    filterType?:string
}
export const PokemonInfo = ({pokemon,filterType}:PokemonProps) => {
    const history = useHistory()

    const filtedPokemon = () =>{
        if(!filterType) return true

        const pokemonsFiltred = pokemon.types.filter((item:any) => item.type.name.includes(filterType))
        if(pokemonsFiltred.length > 0) return true
    }
    const openPokemonDetail = (name:string) =>{
        history.push("/pokemon/"+name);    
    }
    return (
        <>
        {pokemon && filtedPokemon() &&
            <Card  onClick={e=>{openPokemonDetail(pokemon.name)}}>
            <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
            <SubCard className={`bg-${pokemon.types[0].type.name}`}>
            <PokeBallBg>
            <img src={getIconType(pokemon.types[0].type)} alt="" />
            </PokeBallBg>

            <Id>{pokemon.id}</Id>
            <Name><h2>{pokemon.name}</h2></Name>
            <BoxTypes>
                    {pokemon.types.map((item:any,key:any) => (
                      <Info key={key}>{item.type.name}</Info>
                    ))}
            </BoxTypes>
            </SubCard>
            </Card>

        }
        </>
        
    )
}
