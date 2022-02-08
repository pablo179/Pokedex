import React from "react";
import {Header,HeaderIcon,SearchContainer,SearchInput,SearchButton} from "./styles"
import pikachuImg from '../../assets/pikachu.png'
import navigator from '../../assets/navigator.png'
import egg from '../../assets/egg.png'
const PokedexHeader = ({action,shuffle})=>{
    return (
        <Header> <HeaderIcon src={pikachuImg}/> Pokedex <SearchContainer>
        <SearchInput onChange={action} placeholder="Busqueda por nombre o número"/>
        <SearchButton src={navigator}/>
        </SearchContainer>
        <HeaderIcon onClick={shuffle} src={egg} on/>
        </Header>
    )
}

export default PokedexHeader;