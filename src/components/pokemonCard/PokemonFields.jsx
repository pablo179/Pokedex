import React from "react";
const PokemonFields = (props)=>
    <div>
        <div className="pokemonNumber"> {props.number} </div>
        <div className="pokemonName">{props.name} </div>
    </div>

export default PokemonFields