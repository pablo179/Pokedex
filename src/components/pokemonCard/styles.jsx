import styled from "styled-components";
import { Bar } from 'react-chartjs-2';

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
};

export const Card = styled.div`
    width: 100%;
    height: 100%;
    ${({color})=> cardBackground[color] ? `background:${cardBackground[color]};` : 'background: white;'}    display: flex;
    flex-direction: column;
`;
export const HeaderRow = styled.div`
    width : 100%;
    height : 89px;
    color: white;
    font-size: 24px;
    display: flex;
    padding: 22px 30px 22px 30px;
    font-family: 'Rationale', sans-serif; 
    text-transform: uppercase;
    font-weight: 600;
`;
export const PokemonFrame = styled.div`
    width: 150px;
    height:150px;
    position:relative;
    border: 5px solid rgba(0,0,0,0.1)
    
`;
export const PokemonImage = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: -3px;
    left: -3px;
    object-fit: contain;
`;
export const DataRow = styled(HeaderRow)`
    height: 178px;
    padding-top: 0;
`;
export const TypeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    width: 174px;
    margin: 0 20px;
`;
export const TypeImage = styled.img`
    width: 70px;
    height: 70px;
    object-fit: contain;
    border-radius: 10px;    
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
    border-radius: 50px;
    box-shadow:rgba(0,0,0,25%) 4px 4px 10px 5px;
`;
export const Information = styled.div`
    width: 174px;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-around;
    color: white;
    font-family: 'Rationale', sans-serif; 
    font-weight: 500;
    font-size: 20px;
    text-transform: none;
    & div{
        width: 100%;
    }
`;

export const StyledRadar = styled(Bar)`
`;
