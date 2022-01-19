import React from "react";

const PokemonType = ({type,bgcolor})=>{
 return <div className="pokemonType" style={bgcolor}>{type}</div>
}

export default PokemonType