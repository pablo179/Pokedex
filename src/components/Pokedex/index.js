import React from "react";
import PokemonCard from "../pokemonCard";
import {PokedexPage,Header,HeaderIcon,SearchContainer,SearchInput,SearchButton} from "./styles"
import pikachuImg from '../../assets/pikachu.png'
import navigator from '../../assets/navigator.png'
import egg from '../../assets/egg.png'
const  Pokedex = ()=>{
    return (<PokedexPage>
      <Header> <HeaderIcon src={pikachuImg}/> Pokedex <SearchContainer>
        <SearchInput placeholder="Busqueda por nombre o número"/>
        <SearchButton src={navigator}/>
        </SearchContainer>
        <HeaderIcon src={egg}/>
        </Header>
      
      <div className="cardContainer" >
      <PokemonCard image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png" 
      name="Greninja" number="N.º 658" type="Agua" type2="Siniestro" />
      </div>
      
      </PokedexPage>)
}
export default Pokedex;