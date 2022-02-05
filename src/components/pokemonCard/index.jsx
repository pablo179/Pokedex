import React, { useEffect, useState } from "react";
import { Card, HeaderRow, PokemonImage, PokemonFrame, DataRow, TypeContainer, TypeImage, Information } from './styles'
import { realNumber, loadDefault } from '../../utils'
import grass from '../../assets/types/grass.png'
import bug from '../../assets/types/bug.png'
import dark from '../../assets/types/dark.png'
import ice from '../../assets/types/ice.png'
import dragon from '../../assets/types/dragon.png'
import electric from '../../assets/types/electric.png'
import fairy from '../../assets/types/fairy.png'
import fighting from '../../assets/types/fighting.png'
import fire from '../../assets/types/fire.png'
import flying from '../../assets/types/flying.png'
import ghost from '../../assets/types/ghost.png'
import ground from '../../assets/types/ground.png'
import normal from '../../assets/types/normal.png'
import poison from '../../assets/types/poison.png'
import psychic from '../../assets/types/psychic.png'
import rock from '../../assets/types/rock.png'
import water from '../../assets/types/water.png'
import steel from '../../assets/types/steel.png'
import axios from "axios";

const typeImages = {
    grass,
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    ice,
    fire,
    flying,
    ghost,
    ground,
    normal,
    poison,
    psychic,
    rock,
    water,
    steel
}

const PokemonCard = ({ color, image, id, name, types }) => {
    const [data, setData] = useState({})
    const [abilities,setAbilities] = useState([]);

    useEffect(()=>{
        getDataArray();
    },[])
    
    const getDataArray = async () => {
        
        const dataRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const encounter = await axios.get(dataRequest.data.location_area_encounters);
        let locationArea,area, list= [];
        if(encounter.data.length !== 0){
            locationArea = await axios.get(encounter.data[0].location_area.url);
            area = await axios.get(locationArea.data.location.url);
        }
        for(let i = 0; i < dataRequest.data.stats.length; i++){
            list[i] = dataRequest.data.stats[i].base_stat;
        }
        
        let allData = {
            Region: encounter.data.length === 0 ? 'unknown': area.data.region.name,
            Height: (dataRequest.data.height)/10,
            Weight: (dataRequest.data.weight)/10,
            Category: null,
            Hp: list[0],
            Atk: list[1],
            Df: list[2],
            SAtk: list[3],
            SDf: list[4],
            Speed: list[5],
            ...abilities
        }
        setData(allData);
    }
    return (
        <Card color={color}>
            <HeaderRow>
                {realNumber(id)}
                <div style={{ alignSelf: 'end', fontFamily: 'Rationale' }}>{name}</div>
            </HeaderRow>

            <DataRow>
                <PokemonFrame>
                    <PokemonImage onError={(e) => loadDefault(e, id)} src={image} />
                </PokemonFrame>
                <TypeContainer>
                    {
                        types.map((item) => typeImages[item.type.name] && <TypeImage src={typeImages[item.type.name]} />)
                    }
                </TypeContainer>
                <Information>
                    <div>Region: {data.Region}</div>
                    <div>Height: {data.Height} m</div>
                    <div>Weight: {data.Weight} kg</div>
                    <div>Category: Seed</div>
                </Information>
            </DataRow>
        </Card>
    )
}
export default PokemonCard