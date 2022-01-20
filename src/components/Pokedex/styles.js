import styled from "styled-components";
export const PokedexPage = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding: 20px 50px;
    background-color: #d1d0d0;
`; 
export const Header = styled.header`
    width: 80%;
    height: 60px;
    background:white;
    border-radius:15px;
    box-shadow:rgba(0,0,0,15%) 1px 1px 19px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 20px;
    color: #989797;
    font-weight:500;
    font-size: 20px;
`; 
export const HeaderIcon = styled.img`
    width:40px;
    margin-right:10px;
    cursor: pointer;
`;

export const SearchContainer =  styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    margin-left: 50%;
    border-radius: 12px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 5px;
    outline: none;
    background: #f3f3f3c4;
    border-radius:12px;
`;

export const SearchButton = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
`;

