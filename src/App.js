import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokedex from './components/Pokedex'
import PokemonPage from './components/PokemonPage'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Pokedex />} />
                <Route exact path="/pokemon" element={<PokemonPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;