import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { GetImageById } from "../../functions/utils";

import pokemon_placeholder from "../../assets/img/pokemon-placeholder.png";

const PokeCard = ({ name, id, types, click }) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
  }, [id]);
  let pid = "" + id;

  return (
    <div className="container-card mb-4">
      <div>
        <div className="text-center">
          <h2 className="limit-text my-0">{name}</h2>
          <p className="pokemon-number mb-0">
            # {pid.padStart(3, "0")}
          </p>
        </div>
      </div>
      <figure
        className={`container-card-img position-relative my-4 container-${types[0].type.name}`}>
          <Link to={click ? `/details/${name}` : "javascript:void"}>
          {error ? (
            <img alt={name} title={name} src={pokemon_placeholder} />
          ) : (
        <img
              onError={(e) => setError(true)}
              className="animation-up-down"
              alt={name}
              title={name}
              src={GetImageById(id)}
            />
          )}
          </Link>
      </figure>
      <button className="w-100 d-flex justify-content-between">
        Catch
      </button>
      
    </div>
  );
};

export default PokeCard;
