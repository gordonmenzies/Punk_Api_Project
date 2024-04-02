import "./Main.scss";
import beers from "../../assets/dataFormatted.ts";
import FilterList from "../FilterList/FilterList";
import BeerList from "../BeerList/BeerList";
import NavBar from "../NavBar/NavBar";
import { Beer } from "../../assets/types";
import { useState } from "react";

type FilterResult = {
  selectedValue: string;
  filterChoice: string;
};

const Main = () => {
  const [displayBeers, setDisplayBeers] = useState<Beer[]>(beers);
  const [filterResult, setFilterResult] = useState<FilterResult[]>([]);

  const readFilter = (selectedValue: string, filterChoice: string) => {
    setFilterResult([
      ...filterResult,
      { selectedValue: selectedValue, filterChoice: filterChoice },
    ]);

    console.log(selectedValue, filterChoice);
    console.log("displayBeers", displayBeers);
    console.log("call filter array", filterArray(selectedValue, filterChoice));
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

    // remove any repeated items before displaying

    console.log("filtered Beers", filteredBeerList);
    setDisplayBeers(filteredBeerList);
  };

  const searchName = (selectedValue: string) => {
    console.log(selectedValue);
    const searchedBeers = displayBeers.filter((beer) =>
      beer.name.includes(selectedValue)
    );
    console.log("searchedBeers", searchedBeers);
    setDisplayBeers(searchedBeers);
  };

  return (
    <div className="mainPage">
      <NavBar />
      <div className="featuredBeer">
        <h1>Featured Beer</h1>
        <img src={`${beers[0].image_url}`} />
      </div>
      <div className="mainBody__container">
        <FilterList readFilter={readFilter} />
        <BeerList beers={displayBeers} />
      </div>
    </div>
  );
};

export default Main;
