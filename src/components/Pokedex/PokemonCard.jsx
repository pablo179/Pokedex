import React from 'react';
import PropTypes from 'prop-types';
import { realNumber, loadDefault } from '../../utils';

import {
  CardContainer,
  CardRow,
  PokemonNumber,
  TypeContainer,
  Type,
  PokemonImg,
  PokemonRow,
} from './styles';

function PokemonCard({
  name, id, image, color, types, openModal,
}) {
  const pokemontype = types;

  return (
    <CardContainer
      key={id}
      color={color}
      onClick={() => openModal(
        {
          name,
          id,
          image,
          color,
          types,
        },
      )}
    >
      <CardRow>
        {name}
        <PokemonNumber color={color}>
          {realNumber(id)}
        </PokemonNumber>
      </CardRow>
      <PokemonRow>
        <TypeContainer>
          {
             pokemontype.map((item) => <Type type={item.type.name}>{item.type.name}</Type>)
          }
        </TypeContainer>
        <PokemonImg onError={(e) => { loadDefault(e, id); }} src={image} alt="Pokemon Image" />
      </PokemonRow>
    </CardContainer>
  );
}
PokemonCard.defaulProps = {
  name: 'PokemonName',
  id: 'N° 000',
  image: '',
  color: '#000000',
};
PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  openModal: PropTypes.func.isRequired,
};
export default PokemonCard;
