import { useEffect, useState } from "react";

const ItemDetail = ({pokemonDetailsUrl, pokemonTypes, pokemonWeight, pokemonHeight, handleEvolution}) => {
  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(pokemonDetailsUrl)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setPokemonDetails(data);
        handleEvolution(data.evolution_chain);
        setLoading(false);
      })
  }, [pokemonDetailsUrl]);

  if (loading) {
    return "Loading Pokémon details...";
  };

  return (
    <div className="itemdetail-c-info">
      <div className="itemdetail-c-i-col">
        <div className="itemdetail-c-i-c-row">
          <div className="itemdetail-c-i-c-cell strong">ID:</div>
          <div className="itemdetail-c-i-c-cell"># {pokemonDetails.id}</div>
        </div>
        <div className="itemdetail-c-i-c-row">
          <div className="itemdetail-c-i-c-cell strong">Name:</div>        
          <div className="itemdetail-c-i-c-cell">{pokemonDetails.name}</div>
        </div>
        <div className="itemdetail-c-i-c-row">
          <div className="itemdetail-c-i-c-cell strong">Type:</div>
          <div className="itemdetail-c-i-c-cell poketypes">
          {pokemonTypes.map((pokemonType, index) => {
            return(
              <div
                key={index}
                style={{
                  backgroundColor: (
                    (pokemonType.type.name === "grass" && "#8BD169") ||
                    (pokemonType.type.name === "poison" && "#B76DA4") ||
                    (pokemonType.type.name === "fire" && "#FF603F") ||
                    (pokemonType.type.name === "flying" && "#8995DB") ||
                    (pokemonType.type.name === "water" && "#52A8FA") ||
                    (pokemonType.type.name === "bug" && "#B7C53F") ||
                    (pokemonType.type.name === "normal" && "#B7B6A4") ||
                    (pokemonType.type.name === "dark" && "#8C6E5C") ||
                    (pokemonType.type.name === "electric" && "#FFD34E") ||
                    (pokemonType.type.name === "ground" && "#E2C56A") ||
                    (pokemonType.type.name === "psychic" && "#FF6DA4") ||
                    (pokemonType.type.name === "ice" && "#7DD3FA") ||
                    (pokemonType.type.name === "steel" && "#A9A8B1") ||
                    (pokemonType.type.name === "fighting" && "#C13023") ||
                    (pokemonType.type.name === "fairy" && "#EE9BEE") ||
                    (pokemonType.type.name === "rock" && "#B89F38") ||
                    (pokemonType.type.name === "dragon" && "#713BFA") ||
                    (pokemonType.type.name === "ghost" && "#715996")
                  )
                }}
              >
                {pokemonType.type.name}
              </div>
            );
          })}
          </div>
        </div>
        <div className="itemdetail-c-i-c-row">
          <div className="itemdetail-c-i-c-cell strong">Weight:</div>
          <div className="itemdetail-c-i-c-cell">{pokemonWeight}</div>
        </div>
        <div className="itemdetail-c-i-c-row">
          <div className="itemdetail-c-i-c-cell strong">Height:</div>
          <div className="itemdetail-c-i-c-cell">{pokemonHeight}</div>
        </div>
        <div className="itemdetail-c-i-c-row">
          <div className="itemdetail-c-i-c-cell strong">Color:</div>
          <div className="itemdetail-c-i-c-cell">{pokemonDetails.color.name}</div>
        </div>
        <div className="itemdetail-c-i-c-row">
          <div className="itemdetail-c-i-c-cell strong">Habitat:</div>
          <div className="itemdetail-c-i-c-cell">{pokemonDetails.habitat === null ? "No information" : pokemonDetails.habitat.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;