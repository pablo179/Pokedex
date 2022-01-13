import React from "react";

class PokemonImage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <img className="pokemonImg" src={this.props.image} alt="" />
    }
}
export default PokemonImage