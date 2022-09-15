import { useEffect, useState } from "react";

import "./EvolutionChain.scss";

const EvolutionChain = ({ pokemonEvolutionUrl }) => {
  const [loading, setLoading] = useState(true);
  const [pokemonEvolution, setPokemonEvolution] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(pokemonEvolutionUrl?.url)
      .then(data => data.json())
      .then(data => {
        setPokemonEvolution(data);
        setLoading(false);
      })
  }, [pokemonEvolutionUrl]);

  if (loading) {
    return "Loading evolution chain...";
  };

  console.log(pokemonEvolution);
  console.log(pokemonEvolution.chain.evolves_to.length)

  return(
    <div className="evolutionchain-container">
      <div>{pokemonEvolution.chain.species.name}</div>      
      {
        pokemonEvolution.chain.evolves_to.length === 0
        ?
        <div>This Pokémon doesn't have evolutions.</div>
        :
        <div>{pokemonEvolution.chain.evolves_to[0].species.name}</div>
      }
      {
        (pokemonEvolution.chain.evolves_to.length > 0 && pokemonEvolution.chain.evolves_to[0].evolves_to.length > 0)
        ?
        <div>{pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name}</div>
        :
        null
      }
    </div>
  );
};

export default EvolutionChain;