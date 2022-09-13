import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination, Item } from "../index";

import "./ItemList.scss";

const ItemList = () => {
  const urlId = useParams().number;
  console.log(urlId);

  const [pokemonList, setPokemonList] = useState();
  const [currentUrl, setCurrentUrl] = useState(urlId === undefined ? "https://pokeapi.co/api/v2/pokemon" : `https://pokeapi.co/api/v2/pokemon?offset=${urlId * 2}0&limit=20`);
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
  }, [urlId, currentUrl]);

  if (loading) {
    return "Loading...";
  };

  const goToNextPage = () => {
    setCurrentUrl(nextUrl);
  };

  const goToPrevPage = () => {
    setCurrentUrl(prevUrl);
  };

  return (
    <>
      <header className="itemlist-header">
        <h1>Pokémon List</h1>
        <p>Select a pokémon and you'll see its details.</p>
      </header>
      <div className="itemlist-bcontainer">
        <div className="ibcontainer-items">
          {pokemonList.results.map((pokemon, index) => {
            return (
              <Item pokemonData={pokemon} key={index} />
            );
          })}
        </div>
        <Pagination
          nextPage={nextUrl ? nextUrl : null}
          prevPage={prevUrl ? prevUrl : null}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          urlId={urlId}
        />
      </div>
    </>
  );
};

export default ItemList;