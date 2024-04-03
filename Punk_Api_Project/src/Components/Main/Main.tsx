import "./Main.scss";
import beers from "../../assets/dataFormatted.ts";
import FilterList from "../FilterList/FilterList";
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
    console.log(showFilterList);
  };

  const readFilter = (selectedValue: string, filterChoice: string) => {
    setFilterResult([
      ...filterResult,
      { selectedValue: selectedValue, filterChoice: filterChoice },
    ]);
    console.log("reached");
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

    setDisplayBeers(filteredBeerList);
    console.log(displayBeers);
  };

  const randomBeerSelector = (): Beer => {
    const randomIndex = Math.floor(Math.random() * displayBeers.length);

    return displayBeers[randomIndex];
  };

  return (
    <BrowserRouter>
      <div className="mainPage--check">
        <NavBar showFilter={toggleFilterList} />
        <div className="mainPage__filterListAndContent">
          <div className="mainBody__filterList--desktop">
            <FilterList
              Beers={displayBeers}
              readFilter={readFilter}
              showFilter={toggleFilterList}
            />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="randombeer"
              element={<RandomBeer beer={randomBeerSelector()} />}
            />
          </Routes>
          <div className="mainBody__filterList--mobile">
            <div className="mainBody__container">
              {showFilterList && (
                <FilterList
                  readFilter={readFilter}
                  showFilter={toggleFilterList}
                  Beers={displayBeers}
                />
              )}
            </div>
          </div>
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
