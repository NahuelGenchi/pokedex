import { useState, useEffect } from "react";

import "./Item.scss";

const Item = (props) => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(props.pokemonData.url)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setPokemon(data);
        setLoading(false);
      })
  }, [props.pokemonData.url])

  if (loading) {
    return "Loading Pokemon...";
  };

  return(
    <div className="item-container">
      <div className="item-c-img">
        <img src={pokemon.sprites.front_default} alt="Pokémon sprite"/>
      </div>
      <div className="item-c-id">
        #{pokemon.id}
      </div>
      <div className="item-c-name">
        {pokemon.name}
      </div>
      <div className="item-c-types">
        {pokemon.types.map((pokeType, index) => {
          return(
            <span key={index}>{pokeType.type.name}</span>
          );
        })}
      </div>
    </div>
  );
};

export default Item;