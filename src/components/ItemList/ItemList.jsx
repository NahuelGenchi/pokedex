import { useState, useEffect } from "react";

import "./ItemList.scss";

const ItemList = () => {
  const [pokemonList, setPokemonList] = useState();
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setPokemonList(data);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
      })
  }, [currentUrl]);

  if (loading) {
    return "Loading...";
  };

  const goNextUrl = () => {
    setCurrentUrl(pokemonList.next);
  };

  return(
    <div>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ItemList;