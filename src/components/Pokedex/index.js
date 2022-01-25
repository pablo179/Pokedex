import React, {useEffect, useState} from "react";
import PokedexHeader from "./Header";
import { PokedexPage,PokemonGrid } from "./styles";
import PokemonCard from "./PokemonCard";
import axios from "axios";
const  Pokedex = ()=>{
  const [pokemonList,setPokemonList] = useState([]);
  useEffect( async()=>{
    const pokemonRequest = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const list = pokemonRequest.data.results;
    let pokemonDataList = [...Array(20).keys()];
    for(let i = 0; i< list.length; i++){
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
  }

  ,[])
  
    return (
    <PokedexPage>
          <PokedexHeader/>
      
          <PokemonGrid >
              {
                pokemonList.map((pokemon)=><PokemonCard {...pokemon} />)
              }         
          </PokemonGrid>
      </PokedexPage>)
}
export default Pokedex;