import { useState, useEffect } from "react";
import { Pagination, Item } from "../index";

import "./ItemList.scss";

const ItemList = () => {
  const [pokemonList, setPokemonList] = useState();
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(currentUrl)
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

  const goToNextPage = () => {
    setCurrentUrl(nextUrl);
  };

  const goToPrevPage = () => {
    setCurrentUrl(prevUrl);
  };

  return(
    <div className="itemlist-bcontainer">
      <div className="ibcontainer-items">
        {pokemonList.results.map((pokemon, index) => {
          return(
            <Item pokemonData={pokemon} key={index}/>
          );
        })}
      </div>
      <Pagination
        goToNextPage={nextUrl ? goToNextPage : null}
        goToPrevPage={prevUrl ? goToPrevPage : null}
      />
    </div>
  );
};

export default ItemList;