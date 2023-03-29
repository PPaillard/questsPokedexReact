import React from "react";
import PropTypes from "prop-types";
const Navbar = ({ setPokemonIndex, pokemonList }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            if (pokemon.name === "pikachu") alert("pika pikachu !!!");
            setPokemonIndex(index);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

Navbar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default Navbar;
