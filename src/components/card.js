import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { name, url } = props.pokemon;
  const numPoke = url.split("/")[6];

  const navigate = useNavigate();

  const detailPage = () => {
    console.log(name);
    navigate('/detail', { state: { pokemonName: name}})
  }

  return (
    <div className="Card" onClick={detailPage}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numPoke}.svg`}
        alt=""
      />
      <small>No {numPoke}</small>
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
