import React from "react";
import PokemonFields from './PokemonFields'
import PokemonImage from './PokemonImage'
import PokemonType from "./PokemonType";
const PokemonCard = (props)=>{
    return (
        <div className="pokemonCard">
                <PokemonImage image={props.image} />
                <PokemonFields number ={props.number} name={props.name} />
              <div className="pokemonCard--types">  <PokemonType type={props.type}/> <PokemonType type={props.type2}/></div>
        </div>
    )
}
export default PokemonCard