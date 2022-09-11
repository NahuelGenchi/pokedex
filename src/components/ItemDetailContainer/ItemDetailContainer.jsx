import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../index";

import "./ItemDetailContainer.scss";

const ItemDetailContainer = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setPokemon(data);
        setLoading(false);
      })
  }, [name]);

  if (loading) {
    return "Loading Pokémon data...";
  };

  return(
    <div className="itemdetail-container">
      <div className="itemdetail-c-name">
        <h1>{pokemon.name}</h1>
        <div>#{pokemon.id}</div>
      </div>
      <div className="itemdetail-c-img">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={`${pokemon.name} official artwork`}/>
      </div>
      <ItemDetail pokemonDetailsUrl={pokemon.species.url} pokemonTypes={pokemon.types} pokemonWeight={pokemon.weight} pokemonHeight={pokemon.height}/>
    </div>
  );
};

export default ItemDetailContainer;