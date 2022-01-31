import React, { useEffect, useState } from "react";
import PokedexHeader from "./Header";
import { PokedexPage, PokemonGrid, Loading, LoadMore } from "./styles";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import loading from "../../assets/loading.svg"

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState([true]);
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [shuffleList, setShuffleList] = useState([]);

  useEffect(async () => {
    const pokemonRequest = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const list = pokemonRequest.data.results;
    setNextUrl(pokemonRequest.data.next)
    let pokemonDataList = [...Array(20).keys()];
    for (let i = 0; i < list.length; i++) {
      const pokemonData = await axios.get(list[i].url);
      const pokemonSṕecies = await axios.get(pokemonData.data.species.url);
      const data = {
        name: list[i].name,
        id: pokemonData.data.id,
        types: pokemonData.data.types,
        color: pokemonSṕecies.data.color.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData.data.id}.gif`,
      };
      pokemonDataList[i] = data;
    };
    setPokemonList(pokemonDataList);    
    setLoading(false);
  }, []);

  const getNextArray = async () => {
    setIsLoaded(true);
    setLoading(true);
    const pokemonRequest = await axios.get(nextUrl);
    const list = pokemonRequest.data.results;
    setNextUrl(pokemonRequest.data.next)
    let pokemonDataList = [...Array(20).keys()];
    for (let i = 0; i < list.length; i++) {
      const pokemonData = await axios.get(list[i].url);
      const pokemonSṕecies = await axios.get(pokemonData.data.species.url);
      const data = {
        name: list[i].name,
        id: pokemonData.data.id,
        types: pokemonData.data.types,
        color: pokemonSṕecies.data.color.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData.data.id}.gif`,
      };
      pokemonDataList[i] = data;
    };
    setPokemonList([...pokemonList, ...pokemonDataList])
    setLoading(false);
    startListener();
  }

  useEffect(() => {
    const localList = pokemonList.filter((item) => item.name.includes(search))
    setFilteredList([...localList])
  }, [search]);

  const listenerFunction = () => { }

  const startListener = () => {
    window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        window.removeEventListener('scroll', () => { }, true);
        getNextArray();

      }
    })
  }
  useEffect(() => {
    if (isLoaded) {
      startListener();
    }
  }, [isLoaded]);

  const makeSearch = (e) => {
    setSearch(e.target.value);
  };

  const makeShuffle = async () => {
    let pokemonDataList = [...Array(20).keys()];
    for (let i = 0; i < pokemonDataList.length; i++) {
      let random = Math.floor(Math.random()* (899))-1;
      const pokemonRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`);
        const pokemonSpecies = await axios.get(pokemonRequest.data.species.url);
        const data = {
          name: pokemonRequest.data.name,
          id: pokemonRequest.data.id,
          types: pokemonRequest.data.types,
          color: pokemonSpecies.data.color.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonRequest.data.id}.gif`,
        };
        pokemonDataList[i] = data;
    }
    setPokemonList(pokemonDataList);
  }

  return (
    <PokedexPage>
      <PokedexHeader action={makeSearch} shuffle={makeShuffle} />
      <PokemonGrid >
        {
          filteredList.length < 1 ?
            search == '' ? pokemonList.map((pokemon) => <PokemonCard {...pokemon} />) :
              'No se encontro este Pokemon'
            :
            filteredList.map((pokemon) => <PokemonCard{...pokemon} />)
        }
      </PokemonGrid>
      {isLoading && <Loading src={loading} />}
      {!isLoaded && <LoadMore onClick={getNextArray} >Cargar más Pokémon</LoadMore>}

    </PokedexPage>)
}
export default Pokedex;