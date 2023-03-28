import React from "react";

const Navbar = ({ handlePrev, handleNext, pokemonIndex, pokemonsLength }) => {
  return (
    <div>
      <button onClick={handlePrev} disabled={pokemonIndex === 0 ? true : false}>
        Prev
      </button>
      <button
        onClick={handleNext}
        disabled={pokemonIndex === pokemonsLength - 1 ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar;
