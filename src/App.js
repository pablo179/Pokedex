import React, { useEffect, useState } from 'react';
import Pokedex from './components/Pokedex'
import Modal from 'react-modal';
import PokemonCard from './components/pokemonCard'

Modal.setAppElement('#root');

const App = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const closeModal = ()=>{
        setIsOpen(false);
    }
    const openModal = (props) =>{
        setModalData(props)
        setIsOpen(true);
    }
    return (
     <>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Example'
            style={{content :{
                width: '800px',
                height: '90%',
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                padding: '0',
                marginRight: '-50%',
                transform: 'translate(-50%,-50%'
            }}}
        >
            <PokemonCard {...modalData}/>
        </Modal>
        <Pokedex openModal={openModal} />
     </>
    )
}

export default App;