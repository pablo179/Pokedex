import styled ,{keyframes} from "styled-components";
const cardBackground = {
    green: '#a8d141',
    black: '#000000',
    blue: '#0C5096',
    brown: '#C77228',
    gray: '#B5ADA3',
    pink: '#EB78CD',
    purple: '#985EEB',
    red: '#B33136',
    yellow: '#E3DE04',
    white: '#FFFFFF'
}
const typeBackground ={
    grass: '#56be36',
    fire: '#E64B50',
    poison: '#b97fc9',
    flying: '#3dc7ef',
    water: '#4592c4',
    bug: '#74E600',
    normal: '#a4acaf',
    electric: '#eed535',
    rock: '#a38c21',
    ghost: '#7b62a3',
    psychic: '#f366b9',
    dragon: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)',
    fairy: '#fdb9e9',
    dark: '#707070 ',
    steel: '#9eb7b8',
    ice: '#51c4e7',
    ground: '#ab9842',
    fighting: '#d56723'
}
export const PokedexPage = styled.div`
    width:100%;
    min-height:100vh;
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

export const SearchContainer = styled.div`
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
const pickAnimation = keyframes`
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-8px);   
    }
    100%{
        transform: translateY(0px);   

    }
`;
export const CardContainer = styled.div`
    width: 280px;
    min-height: 200px;
    padding: 20px;
    border-radius: 7px;
    ${({color})=> cardBackground[color] ? `background:${cardBackground[color]};` : 'background: white;'}
    box-shadow: rgb(0 0 0 / 40%) 1px 1px 6px 3px;
    display: flex;
    ${({color})=> color === 'white'? `color: black;`:`color: white;` }
    flex-direction:column;
    align-items: center;
    font-size: 29px;
    margin: 5px;
    cursor: pointer;
    &:hover{
        animation-name: ${pickAnimation};
        animation-duration: .5s;
        animation-iteration-count: 1;
    }
`;

export const CardRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const PokemonRow = styled(CardRow)`
    min-height: 163px;
    max-height: 163px;
`

export const PokemonGrid = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
`

export const PokemonNumber = styled.div`
    min-width: 70px;
    border-radius: 4px;
    filter: brightness(1.1);
    font-weight: bolder;
    font-size: 17px;
    line-height: 30px;
    text-align: center;
    ${({color})=>cardBackground[color] ? `background:${cardBackground[color]};` : 'background: white;'}
` 
export const TypeContainer = styled.div`
    width: 72%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Type = styled.div`
    width: 80%;
    height: 26px;
    border-radius: 10px;
    margin-top: 30px;
    text-align: center;
    font-size: 15px;
    
    ${({type})=>typeBackground[type] ? `background: ${typeBackground[type]};`: `background: white;` }
    display: flex;
    align-item: center;
    justify-content: center;
    color: white;
`;

export const PokemonImg = styled.img`
    width: 150px;
    height: 150px;
    padding: 10px;
    object-fit: contain;
`;
export const Loading = styled.img`
    width: 60px;
    margin-top: 50px;
`
export const LoadMore = styled.button`
    width: 150px;
    height: 32px;
    border: none;
    background: #525A95;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 40%) 1px 1px 6px 3px;
    color: white;
    cursor: pointer;
    margin-top: 10px;
    &:hover{
        filter: brightness(1.5);
    }
`;
export const GridContainer = styled.div`
    width: 98vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;