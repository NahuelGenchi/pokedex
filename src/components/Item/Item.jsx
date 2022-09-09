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
            <span
              key={index}
              style={{
                backgroundColor: (
                  (pokeType.type.name === "grass" && "#8BD169") ||
                  (pokeType.type.name === "poison" && "#B76DA4") ||
                  (pokeType.type.name === "fire" && "#FF603F") ||
                  (pokeType.type.name === "flying" && "#8995DB") ||
                  (pokeType.type.name === "water" && "#52A8FA") ||
                  (pokeType.type.name === "bug" && "#B7C53F") ||
                  (pokeType.type.name === "normal" && "#B7B6A4") ||
                  (pokeType.type.name === "dark" && "#8C6E5C") ||
                  (pokeType.type.name === "electric" && "#FFD34E") ||
                  (pokeType.type.name === "ground" && "#E2C56A") ||
                  (pokeType.type.name === "psychic" && "#FF6DA4") ||
                  (pokeType.type.name === "ice" && "#7DD3FA") ||
                  (pokeType.type.name === "steel" && "#A9A8B1") ||
                  (pokeType.type.name === "fighting" && "#C13023") ||
                  (pokeType.type.name === "fairy" && "#EE9BEE") ||
                  (pokeType.type.name === "rock" && "#B89F38") ||
                  (pokeType.type.name === "dragon" && "#713BFA") ||
                  (pokeType.type.name === "ghost" && "#715996")
                )
              }}
            >
              {pokeType.type.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Item;