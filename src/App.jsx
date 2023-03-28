import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handlePrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        <button
          onClick={handlePrev}
          disabled={pokemonIndex === 0 ? true : false}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={pokemonIndex === pokemonList.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
