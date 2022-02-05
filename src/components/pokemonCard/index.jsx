import React, { useEffect, useState } from "react";
import { Card, HeaderRow, PokemonImage, PokemonFrame, DataRow, TypeContainer, TypeImage, Information, StyledRadar } from './styles'
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
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
);

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
    const [abilities, setAbilities] = useState([]);
    const [chartData, setChartData] = useState({
        labels: ['HP', 'ATK.', 'DF.', 'SPEED', 'DF. ESP', 'ATK. ESP'],
        datasets: [{
            data: [],
        }]
    })
    useEffect(() => {
        getDataArray();
    }, []);
    const getDataArray = async () => {

        const dataRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const encounter = await axios.get(dataRequest.data.location_area_encounters);
        let locationArea, area, list = [];
        if (encounter.data.length !== 0) {
            locationArea = await axios.get(encounter.data[0].location_area.url);
            area = await axios.get(locationArea.data.location.url);
        }
        for (let i = 0; i < dataRequest.data.stats.length; i++) {
            list[i] = dataRequest.data.stats[i].base_stat;
        }

        let allData = {
            Region: encounter.data.length === 0 ? 'unknown' : area.data.region.name,
            Height: (dataRequest.data.height) / 10,
            Weight: (dataRequest.data.weight) / 10,
        }
        setData(allData);
        setChartData({
            labels: ['HP', 'ATK.', 'DF.', 'SPEED', 'DF. ESP', 'ATK. ESP'],
            datasets: [{
                data: [...list],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }]
        })
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
                    <div>Hability: Overgrow </div>
                </Information>
            </DataRow>
            <DataRow>
                <StyledRadar data={chartData} options={{ plugins: { legend: { labels: { font: { size: 20 }} } }, scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 15,
                                weight: 'bold'
                            }
                        }
                    }
                } }} />
            </DataRow>
        </Card>
    )
}
export default PokemonCard