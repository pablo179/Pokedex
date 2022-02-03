import React, {useState} from "react";
import { CardContainer, CardRow,PokemonNumber, TypeContainer,Type,PokemonImg, PokemonRow } from "./styles";
import masterBall from '../../assets/masterball.png'
import { realNumber } from "../../utils";
const PokemonCard = ({name,id,image,color,types,openModal}) =>{
    const [count, setCount] = useState(0);
    const pokemontype = types;
    const loadDefault = (e)=>{
        e.currentTarget.onError = null;
        if (count ===0){
            setCount(1);
            e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        }
        else
            e.currentTarget.src = masterBall;
            
    }
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
            <PokemonImg onError={loadDefault} src={image} alt="Pokemon Image" />
            </PokemonRow>
        </CardContainer>
    )
}
export default PokemonCard;