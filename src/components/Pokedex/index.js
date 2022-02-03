import React, { useEffect, useState } from "react";
import PokedexHeader from "./Header";
import { PokedexPage, PokemonGrid, Loading, LoadMore, GridContainer } from "./styles";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import loading from "../../assets/loading.svg"
import InfiniteScroll from "react-infinite-scroll-component";

const Pokedex = ({openModal}) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [isShuffle, setIsShuffle] = useState(false);
  const [history,setHistory] = useState([]);
  
  useEffect(() => {
    getNextArray();
  }, [])

  const getNextArray = async () => {
    const pokemonRequest = await axios.get(nextUrl);
    const list = pokemonRequest.data.results;
    setNextUrl(pokemonRequest.data?.next ? pokemonRequest.data.next : null);
    let pokemonDataList = [];
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
      pokemonDataList = [...pokemonDataList, data];
    };
    setPokemonList([...pokemonList, ...pokemonDataList])
  }

  useEffect(() => {
    const localList = pokemonList.filter((item) => item.name.includes(search))
    setFilteredList([...localList])
  }, [search]);

  const makeSearch = (e) => {
    setSearch(e.target.value);
  };
  const makeArray = ()=>{
    let randomArray = [];
      for(let i=0; i<20; i++){
        let random = 0;
        let flag = true;
        while(flag){
          random = Math.floor(Math.random() * (899 - 1)) + 1;
          if(randomArray.indexOf(random) === -1){
            flag=false;
          }
        }
        randomArray.push(random);
      }   
    
    return randomArray;
  }

  const checkHistory = (randomArray)=>{
    let flag = false;
    randomArray.forEach((item) => {
      if(history.indexOf(item) !== -1){
        flag=true;
      }
    });
    return flag;
  }
  const makeShuffle = async () => {
    setIsShuffle(false);
    setPokemonList([]);
    let randomArray;
    let flag = true;
    while(flag){
      randomArray = makeArray();
      if(!checkHistory(randomArray)){
        flag = false;
      }
    }
    
    if(history.length < 60){
      setHistory([...history,...randomArray]);
    }else{
      setHistory([]);
    }

    let pokemonDataList = [];
    for (let i = 0; i < randomArray.length; i++) {

      const pokemonRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomArray[i]}`);
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
    setIsShuffle(true);
    setPokemonList(pokemonDataList);
  }

  return (
    <PokedexPage>
      <PokedexHeader action={makeSearch} shuffle={makeShuffle} />
      {
        isShuffle ?
          <GridContainer>
            <PokemonGrid >
              {
                search === '' ?
                  pokemonList.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} openModal={openModal} />)
                  :
                  filteredList.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} openModal={openModal} />)
              }
            </PokemonGrid>
          </GridContainer>
          :
          <InfiniteScroll
            next={search === '' ? getNextArray : () => { }}
            hasMore={nextUrl}
            loader={search === '' ? <Loading src={loading} /> : null}
            endMessage={<p>FIN</p>}
            style={{ width: '98vw', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
            dataLength={search === '' ? pokemonList.length : filteredList.length}
          >

            <PokemonGrid >
              {
                search === '' ?
                  pokemonList.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon}   openModal={openModal} />)
                  :
                  filteredList.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} openModal={openModal}/>)
              }
            </PokemonGrid>
          </InfiniteScroll>
      }

    </PokedexPage>)
}
export default Pokedex;