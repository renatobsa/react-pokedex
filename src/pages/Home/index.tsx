import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useHistory, useParams } from 'react-router-dom';
import { UIInfiniteScroll } from '../../components/InfiniteScroll';
import { PokemonInfo } from '../../components/Pokemon';
import { useGlobalsProvider } from '../../providers/GlobalsProvider';
import { requestApi } from '../../services/PokeApi';
import { Container, List } from './style';

type paramsType = {
  type: string
}

export const Home = () => {
  const { type } = useParams<paramsType>();

  const [limitPage, setLimitPage] = useState(50);
  const history = useHistory()
  const { pokeList: pokeListProvider, setPokeList: setPokeListProvider, loading, setLoading } = useGlobalsProvider()

  useEffect(() => {
    if (pokeListProvider.length === 0) {
      getPokemons();
    }
    return () => {
    }
  }, [pokeListProvider])


  const getPokemons = async () => {
    try {
      let response = [];
      setLoading(true);
      response = await getPokemonsList()
      const results = await getPokemonInfomation(response)
      setPokeListProvider([...pokeListProvider, ...results])
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }
  const getPokemonsList = async () => {
    const response = await requestApi(`pokemon?limit=${limitPage}&offset=${pokeListProvider.length !== 0 ? pokeListProvider.length + 1 : 0}`);
    return response.results
  }
  const getPokemonInfomation = async (pokemonList: any) => {
    const responseInfoPokemon = pokemonList.map(async (item: any) => {
      return await requestApi('pokemon/' + item.name);
    })
    return await Promise.all(responseInfoPokemon);
  }

  const voltar = () => {
    setPokeListProvider([])
    history.push("/");
  }

  return (
    <>
      <Container>
        <LazyLoad height={200} once>
          <List>
            {pokeListProvider.length > 0 &&
              pokeListProvider.map((item: any, key: any) => (
                <PokemonInfo filterType={type} pokemon={item}></PokemonInfo>
              ))
            }
          </List>
        </LazyLoad>
        {loading &&
          <div className="loading">
            <span>Carregando..</span>
          </div>}
        {pokeListProvider.length > 0 && !loading &&
          <UIInfiniteScroll getMore={() => { getPokemons() }}></UIInfiniteScroll>
        }
      </Container>
    </>
  );
}

