import React from "react";
import { Header, HeaderIcon, SearchContainer, SearchInput, SearchButton } from "./styles"
import pikachuImg from '../../assets/pikachu.png'
import navigator from '../../assets/navigator.png'
import egg from '../../assets/egg.png'
const PokedexHeader = () => {
    return (
        <Header> <HeaderIcon src={pikachuImg} /> Pokedex <SearchContainer>
            <SearchInput placeholder="Busqueda por nombre o número" />
            <SearchButton src={navigator} />
        </SearchContainer>
            <HeaderIcon src={egg} />
        </Header>
    )
}

export default PokedexHeader;