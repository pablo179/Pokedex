import React, { useEffect, useState } from 'react';
import Pokedex from './components/Pokedex'
import PokemonPage from './components/PokemonPage'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const closeModal = ()=>{
        setIsOpen(false);
    }
    return (
     <>
        <button onClick={()=>setIsOpen(true)}>abreme</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Example'
        >
            <h1>Title</h1>
        </Modal>
        <Pokedex/>
     </>
    )
}

export default App;