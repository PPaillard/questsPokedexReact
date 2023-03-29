import PropTypes from "prop-types";
import { useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
  /*if (pokemon.name === "pikachu") {
    alert("pika pikachu !!!");
  }*/
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
