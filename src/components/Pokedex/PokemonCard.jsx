import React from "react";
import { CardContainer, CardRow,PokemonNumber, TypeContainer,Type,PokemonImg } from "./styles";
const realNumber = (id)=>{ 
    return id > 100 ? 'N° '+id : id > 10 ? 'N° 0'+id : 'N° 00'+id;
}
const PokemonCard = ({name,id,image,color,types}) =>{
    const pokemontype = types;
    return(
        <CardContainer key={id} color={color} >
            <CardRow>
                {name}
                <PokemonNumber color={color}>{realNumber(id)} </PokemonNumber>
            </CardRow>
            <CardRow>
                <TypeContainer>
                    {
                        pokemontype.map((item)=><Type type={item.type.name}>{item.type.name}</Type>)
                    }
                </TypeContainer>
            <PokemonImg src={image} alt="Pokemon Image" />
            </CardRow>
        </CardContainer>
    )
}
export default PokemonCard;