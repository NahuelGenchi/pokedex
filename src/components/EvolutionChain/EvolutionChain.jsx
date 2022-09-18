import { useEffect, useState } from "react";

import "./EvolutionChain.scss";

const EvolutionChain = ({ pokemonEvolutionUrl }) => {
  const [loading, setLoading] = useState(true);
  const [pokemonEvolution, setPokemonEvolution] = useState();
  const [firstPokeEvo, setFirstPokeEvo] = useState();
  const [secondPokeEvo, setSecondPokeEvo] = useState();
  const [thirdPokeEvo, setThirdPokeEvo] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(pokemonEvolutionUrl?.url)
      .then(data => data.json())
      .then(data => {
        setPokemonEvolution(data);
        setLoading(false);
      })
  }, [pokemonEvolutionUrl]);

  useEffect(() => {
    if (loading === false) {
      const callFirstPokemonEvolution = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonEvolution?.chain.species.name}`)
          .then(data => data.json())
          .then(data => {
            setFirstPokeEvo(data);
          })
      };
      callFirstPokemonEvolution();
    }
    if (pokemonEvolution?.chain.evolves_to.length > 0) {
      const callSecondPokemonEvolution = () => {
        const secondPokemonName = pokemonEvolution?.chain.evolves_to[0].species.name;
        fetch(`https://pokeapi.co/api/v2/pokemon/${secondPokemonName}`)
          .then(data => data.json())
          .then(data => {
            setSecondPokeEvo(data);
          })
      };
      callSecondPokemonEvolution();

      if (pokemonEvolution?.chain.evolves_to[0].evolves_to.length > 0) {
        const callThirdPokemonEvolution = () => {
          const thirdPokemonName = pokemonEvolution?.chain.evolves_to[0].evolves_to[0].species.name;
          fetch(`https://pokeapi.co/api/v2/pokemon/${thirdPokemonName}`)
            .then(data => data.json())
            .then(data => {
              setThirdPokeEvo(data);
            })
        };
        callThirdPokemonEvolution();
      }
    };
  }, [loading, pokemonEvolution?.chain.evolves_to, pokemonEvolution?.chain.species.name]);

  if (loading) {
    return "Loading evolution chain...";
  };

  return (
    <div className="evolutionchain-bcontainer">
      <h2>Evolutions</h2>
      <div className="evolutionchain-container">
        <div className="evolutionchain-c-pokemon">
          <div className="evolutionchain-c-p-img">
            <img src={firstPokeEvo?.sprites.front_default} alt={`${firstPokeEvo?.name} sprite`} />
          </div>
          <div className="evolutionchain-c-p-name">{firstPokeEvo?.name}</div>
        </div>
        {
          pokemonEvolution.chain.evolves_to.length === 0
            ?
            <div>This Pokémon doesn't have evolutions.</div>
            :
            (
              <div className="evolutionchain-c-pokemon">
                <div className="evolutionchain-c-p-img">
                  <img src={secondPokeEvo?.sprites.front_default} alt={`${secondPokeEvo?.name} sprite`} />
                </div>
                <div className="evolutionchain-c-p-name">{secondPokeEvo?.name}</div>
              </div>
            )
        }
        {
          (pokemonEvolution.chain.evolves_to.length > 0 && pokemonEvolution.chain.evolves_to[0].evolves_to.length > 0)
            ?
            <div className="evolutionchain-c-pokemon">
              <div className="evolutionchain-c-p-img">
                <img src={thirdPokeEvo?.sprites.front_default} alt={`${thirdPokeEvo?.name} sprite`} />
              </div>
              <div className="evolutionchain-c-p-name">{thirdPokeEvo?.name}</div>
            </div>
            :
            null
        }
      </div>
    </div>
  );
};

export default EvolutionChain;