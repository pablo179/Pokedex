import masterBall from './assets/masterball.png';

export const realNumber = (id) => {
  if (id > 99) { return `N° ${id}`; }
  if (id > 9) { return `N° 0${id}`; }
  return `N° 00${id}`;
};

export const loadDefault = (e, id) => {
  e.currentTarget.onError = null;
  if (e.currentTarget.src === `https://raw.
    githubusercontent.com/PokeAPI/sprites/master/
    sprites/pokemon/${id}.png`) {
    e.currentTarget.src = masterBall;
  } else {
    e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
};
