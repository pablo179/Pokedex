import React from "react";
import PokemonCard from "./components/pokemonCard";
import ComponentBar from "./components/Pokedex/ComponentBar";
import ComponentRandomBtn from "./components/Pokedex/ComponentRandomBtn"
import ComponentSearch from "./components/Pokedex/ComponentSearch"
import ComponentSort from "./components/Pokedex/ComponentSort";
const  Pokedex = ()=>{
    return (<div className="Pokedex"> 
      <ComponentBar/>
      <ComponentRandomBtn/>
      <ComponentSearch/>
      <div className="cardContainer" >
      <PokemonCard image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png" name="Greninja" number="N.º 658" type="Agua" type2="Siniestro" />
      </div>
      
    </div>)
}
export default Pokedex;

/*<PokemonCard image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png" name="Greninja" number="N.º 658"/>
        <PokemonCard image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/644.png" name="Zekrom" number="N.º 644"/>
 */

  
