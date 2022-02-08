import React from "react";

const PokemonPageDescription = (props)=>{
    return <div className="pokemonContainer">
        <div className="pokemonContainer--description" >{props.description}</div>
        <div className="pokemonContainer--version">Version<button className="version-x"></button><button className="version-y"></button></div>
    </div>
}

export default PokemonPageDescription