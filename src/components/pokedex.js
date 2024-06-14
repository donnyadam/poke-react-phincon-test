import React, { useState, useEffect } from "react";
import Card from "./card";

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const fileteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    let limit = 50;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then((response) => response.json())
      .then((poke) => setPokemons(poke.results));
  }, []);


  return (
    <>
      <main>
        {fileteredPokemons.map((poke, idx) => {
          return <Card pokemon={poke} key={idx} />;
        })}
      </main>
    </>
  );
};

export default Pokedex;
