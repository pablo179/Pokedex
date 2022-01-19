import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/pokedex" element={<Pokedex />} />
                <Route exact path="/pokedex/pokemon" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;