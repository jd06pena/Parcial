import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { CurrentCountry } from "./gifs/CurrentCountry";
// import { mockGifs } from "./mock-data/gif.mock";
import { useState } from "react";
import { getCountryByQuery } from "./actions/getCountryByQuery";
import './App.css';

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState([]);
  const [country, setCountry] = useState([]);

  const handleSearch = (search = "") => {
    const newSearch = search.trim().toLowerCase();
    if (previousSearches.includes(newSearch)) return;
    if (newSearch === "") return;
    setPreviousSearches([newSearch, ...previousSearches].slice(0, 10));
  };

  const handlePreviousSearchClick = async (search) => {
    const result = await getCountryByQuery(search);
    setPreviousSearches(previousSearches.filter((s) => s !== search));
    setCountry([...result, ...country]);
  };

  return (
    <>
    <div className="container_app">
    {/* Componente Header */}
      <Header title="Paises" description="Buscador de paises" />
      {/* Componente Search */}
      <Search onSearch={handleSearch} />
      

      {/* Componente Gifs previos */}
      <PreviousSearches
        searches={previousSearches}
        onPreviousSearchClick={handlePreviousSearchClick}
      />
      {/* Componente Gifs actuales */}
      <CurrentCountry contrys={country} />
</div>
      
    </>
  );
};
