import React from "react";
import { CardContainer, CardRow,PokemonNumber, TypeContainer,Type,PokemonImg, PokemonRow } from "./styles";
import masterBall from '../../assets/masterball.png'
const realNumber = (id)=>{ 
    return id > 99 ? 'N° '+id : id > 10 ? 'N° 0'+id : 'N° 00'+id;
}
const PokemonCard = ({name,id,image,color,types}) =>{
    const pokemontype = types;
    const loadDefault = (e)=>{
        e.currentTarget.onError = null;
        e.currentTarget.src = masterBall;
    }
    return(
        <CardContainer key={id} color={color} >
            <CardRow>
                {name}
                <PokemonNumber color={color}>{realNumber(id)} </PokemonNumber>
            </CardRow>
            <PokemonRow>
                <TypeContainer>
                    {
                        pokemontype.map((item)=><Type type={item.type.name}>{item.type.name}</Type>)
                    }
                </TypeContainer>
            <PokemonImg onError={loadDefault} src={image} alt="Pokemon Image" />
            </PokemonRow>
        </CardContainer>
    )
}
export default PokemonCard;