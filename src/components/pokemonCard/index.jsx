import React from "react";
import {Card,HeaderRow, PokemonImage,PokemonFrame,DataRow} from './style'
import {realNumber} from '../../utils'
const PokemonCard = ({color,image,id,name,types})=>{
    return (
        <Card color={color}>
            <HeaderRow>
                {realNumber(id)}
                <div style={{alignSelf: 'end',fontFamily: 'Rationale'}}>{name}</div>
            </HeaderRow>
        
                <DataRow>
                    <PokemonFrame>
                        <PokemonImage src={image} />
                    </PokemonFrame>
                </DataRow>
        
        </Card>
    )
}
export default PokemonCard