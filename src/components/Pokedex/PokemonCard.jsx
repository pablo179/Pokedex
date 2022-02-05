import React, {useState} from "react";
import { CardContainer, CardRow,PokemonNumber, TypeContainer,Type,PokemonImg, PokemonRow } from "./styles";
import { realNumber, loadDefault } from "../../utils";

const PokemonCard = ({name,id,image,color,types,openModal}) =>{
    const pokemontype = types;
   
    return(
        <CardContainer key={id} color={color} onClick={()=>openModal({name,id,image,color,types})} >
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
            <PokemonImg onError={(e)=>{loadDefault(e,id)}} src={image} alt="Pokemon Image" />
            </PokemonRow>
        </CardContainer>
    )
}
export default PokemonCard;