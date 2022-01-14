import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/pokedex" element={<Pokedex/>}/>
        <Route exact path="/pokedex/pokemon" element={<Pokemon/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
