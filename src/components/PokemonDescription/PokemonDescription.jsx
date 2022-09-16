import "./PokemonDescription.scss";

const PokemonDescription = ({ pokemonDescription }) => {
  const englishDesc = pokemonDescription?.filter(desc => desc.language.name === "en");
  console.log(englishDesc);
  return(
    <div className="pokemon-description">
      {pokemonDescription
      ?
      <p>{englishDesc[0].flavor_text}</p>
      :
      <p>This Pokémon doesn't have a description.</p>
      }
    </div>
  );
};

export default PokemonDescription;