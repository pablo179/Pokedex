import masterBall from './assets/masterball.png'
export const realNumber = (id)=>{ 
    return id > 99 ? 'N° '+id : id > 10 ? 'N° 0'+id : 'N° 00'+id;
}

export const loadDefault = (e,id) => {
    e.currentTarget.onError = null;
    if(e.currentTarget.src  === `https://raw.
    githubusercontent.com/PokeAPI/sprites/master/
    sprites/pokemon/${id}.png`){
        e.currentTarget.src = masterBall;
    }else{
        e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
}
