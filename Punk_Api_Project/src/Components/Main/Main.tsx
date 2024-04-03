import "./Main.scss";
import beers from "../../assets/dataFormatted.ts";
import FilterList from "../FilterList/FilterList";
import BeerList from "../BeerList/BeerList";
import NavBar from "../NavBar/NavBar";
import { Beer } from "../../assets/types";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomBeer from "../../Containers/RandomBeer/RandomBeer.tsx";
import Home from "../../Containers/Home/Home.tsx";

type FilterResult = {
  selectedValue: string;
  filterChoice: string;
};

const Main = () => {
  const [displayBeers, setDisplayBeers] = useState<Beer[]>(beers);
  const [filterResult, setFilterResult] = useState<FilterResult[]>([]);
  const [showFilterList, setShowFilterList] = useState(false);

  const toggleFilterList = () => {
    setShowFilterList(!showFilterList);
  };

  const readFilter = (selectedValue: string, filterChoice: string) => {
    setFilterResult([
      ...filterResult,
      { selectedValue: selectedValue, filterChoice: filterChoice },
    ]);

    filterArray(selectedValue, filterChoice);
  };

  const filterArray = (selectedValue: string, filterChoice: string) => {
    let maltSearch: Beer[] = [];
    let hopsSearch: Beer[] = [];
    let pairingSearch: Beer[] = [];
    let abvSearch: Beer[] = [];
    let searchedBeers: Beer[] = [];

    if (filterChoice === "Malt") {
      maltSearch = beers.filter((beer) =>
        beer.ingredients.malt.some((malt) => malt.name === selectedValue)
      );
    } else if (filterChoice === "Hops") {
      hopsSearch = beers.filter((beer) =>
        beer.ingredients.hops.some((hops) => hops.name === selectedValue)
      );
    } else if (filterChoice === "Abv") {
      abvSearch = beers.filter((beer) => beer.abv === Number(selectedValue));
    } else if (filterChoice === "Food pairing") {
      pairingSearch = beers.filter((beer) =>
        beer.food_pairing.includes(selectedValue)
      );
    } else if (filterChoice === "name Search") {
      console.log(selectedValue);
      searchedBeers = beers.filter((beer) => beer.name.includes(selectedValue));
      console.log("searchedBeers", searchedBeers);
    }

    const filteredBeerList = maltSearch.concat(
      hopsSearch,
      pairingSearch,
      abvSearch,
      searchedBeers
    );

    // Check if the lists contain repeats
    setDisplayBeers(filteredBeerList);
  };

  const randomBeerSelector = (): Beer => {
    const randomIndex = Math.floor(Math.random() * displayBeers.length);

    return displayBeers[randomIndex];
  };

  return (
    <BrowserRouter>
      <div className="mainPage">
        <NavBar showFilter={toggleFilterList} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="randombeer"
            element={<RandomBeer beer={randomBeerSelector()} />}
          />
        </Routes>
        <div className="mainBody__container">
          {showFilterList && (
            <FilterList readFilter={readFilter} showFilter={toggleFilterList} />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;

{
  /* <div className="featuredBeer"> 
        <h1>Featured Beer</h1>
        <img src={`${beers[0].image_url}`} />
      </div> */
}
