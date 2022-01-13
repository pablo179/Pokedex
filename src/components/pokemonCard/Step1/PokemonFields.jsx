import React from "react";

class PokemonFields extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <div className="pokemonNumber">{this.props.number} </div>
            <div className="pokemonName">{this.props.name} </div>
        </div>
    }
}
export default PokemonFields