import "./Home.scss";
import beers from "../../assets/dataFormatted.ts";
import FilterList from "../../Components/FilterList/FilterList.tsx";
import BeerList from "../../Components/BeerList/BeerList.tsx";
import { Beer } from "../../assets/types";
import { useState } from "react";

type FilterResult = {
  selectedValue: string;
  filterChoice: string;
};

const Home = () => {
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

    // Check if the lists contain repeats
    setDisplayBeers(filteredBeerList);
    console.log("Reached");
  };

  return (
    <div className="mainPage">
      <div className="mainBody__container">
        {showFilterList && (
          <FilterList
            Beers={displayBeers}
            readFilter={readFilter}
            showFilter={toggleFilterList}
          />
        )}
        <BeerList beers={displayBeers} />
      </div>
    </div>
  );
};

export default Home;
