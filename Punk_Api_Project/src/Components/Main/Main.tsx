import "./Main.scss";
import beers from "../../assets/dataFormatted.ts";
import FilterList from "../FilterList/FilterList";
import NavBar from "../NavBar/NavBar";
import { Beer } from "../../assets/types";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomBeer from "../../Containers/RandomBeer/RandomBeer.tsx";
import BeerList from "../BeerList/BeerList.tsx";

type FilterResult = {
  selectedValue: string;
  filterChoice: string;
};

const Main = () => {
  const [displayBeers, setDisplayBeers] = useState<Beer[]>(beers);
  const [filterResult, setFilterResult] = useState<FilterResult[]>([]);
  const [showFilterList, setShowFilterList] = useState(false);
  // const [prevDisplaybeers, setprevDisplaybeers] = useState<Beer[]>(beers);

  const toggleFilterList = () => {
    setShowFilterList(!showFilterList);
    console.log(showFilterList);
  };

  // const updateFilterState = (filterChoice: string, selectedValue: string) => {

  // };

  const compareArrays = (selectedBeers: Beer[]) => {
    // if (update === false) {
    //   const includedInBothArrays = displayBeers.filter((beer) =>
    //     selectedBeers.includes(beer)
    //   );
    //   setDisplayBeers(includedInBothArrays);
    // } else {
    setDisplayBeers(selectedBeers);
    // }

    console.log("selectedBeers", selectedBeers);
    console.log("displayBeers", displayBeers);
  };

  const readExistingFilters = (selectedValue: string, filterChoice: string) => {
    console.log("filterResult start", filterResult);
    // Function to find an object containing the matching value
    const isTrue = filterResult.find(
      (result) => result.filterChoice === filterChoice
    );

    // Check if an object was found
    if (isTrue) {
      const newArray = [...filterResult];
      // check to see if there is an instance of that filter already in the array
      newArray.forEach((result) => {
        if (filterChoice === result.filterChoice) {
          console.log("repeat filter selected");
          // if there is replace the previous selected valued with the new selcted value
          result.selectedValue = selectedValue;
          // set the new array state
          setFilterResult(newArray);
          filterArray(selectedValue, filterChoice, true);
        }
      });
    } else {
      // add the filter result to the end of the array
      setFilterResult([
        ...filterResult,
        { selectedValue: selectedValue, filterChoice: filterChoice },
      ]);
      filterArray(selectedValue, filterChoice, false);
    }
    console.log("filterResult end", filterResult);
    console.log(filterResult);
  };

  const filterArray = (
    selectedValue: string,
    filterChoice: string,
    update: boolean
  ) => {
    // let maltSearch: Beer[] = [];
    // let hopsSearch: Beer[] = [];
    // let pairingSearch: Beer[] = [];
    // let abvSearch: Beer[] = [];
    let searchedBeers: Beer[] = [];
    let highAbvBeers: Beer[] = [];
    let acidicPhBeers: Beer[] = [];
    let classicRangeBeers: Beer[] = [];

    // if (selectedValue === "Select An Option") {
    //   if (filterChoice === "Malt") {
    //     maltSearch = beers;
    //     compareArrays(maltSearch, true);
    //   } else if (filterChoice === "Hops") {
    //     hopsSearch = beers;
    //     compareArrays(hopsSearch, true);
    //   } else if (filterChoice === "Abv") {
    //     abvSearch = beers;
    //     compareArrays(abvSearch, true);
    //   } else if (filterChoice === "Food pairing") {
    //     pairingSearch = beers;
    //     compareArrays(pairingSearch, true);
    //   }
    // } else {
    // if (filterChoice === "Malt") {
    //   console.log("filterChoice", filterChoice);
    //   maltSearch = beers.filter((beer) =>
    //     beer.ingredients.malt.some((malt) => malt.name === selectedValue)
    //   );
    //   compareArrays(maltSearch, update);
    // } else if (filterChoice === "Hops") {
    //   hopsSearch = beers.filter((beer) =>
    //     beer.ingredients.hops.some((hops) => hops.name === selectedValue)
    //   );
    //   compareArrays(hopsSearch, update);
    // } else if (filterChoice === "Abv") {
    //   abvSearch = beers.filter((beer) => beer.abv === Number(selectedValue));
    //   compareArrays(abvSearch, update);
    // } else if (filterChoice === "Food pairing") {
    //   pairingSearch = beers.filter((beer) =>
    //     beer.food_pairing.includes(selectedValue)
    //   );
    //   compareArrays(pairingSearch, update);
    // } else
    if (filterChoice === "name Search") {
      console.log(selectedValue);
      searchedBeers = beers.filter((beer) => beer.name.includes(selectedValue));
      if (selectedValue === "") {
        searchedBeers = beers;
      }
      compareArrays(searchedBeers);
    } else if (filterChoice === "High ABV > 6.0%") {
      highAbvBeers = beers.filter((beer) => beer.abv > 6);
      compareArrays(highAbvBeers);
    } else if (filterChoice === "Acidic ph < 4") {
      acidicPhBeers = beers.filter((beer) => beer.ph < 4);
      compareArrays(acidicPhBeers);
    } else if (filterChoice === "Classic Range") {
      beers.forEach((beer) => {
        if (Number(beer.first_brewed.split("/")[1]) < 2010) {
          classicRangeBeers.push(beer);
        }
      });
      compareArrays(classicRangeBeers);
    }
  };
  //};

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
              readFilter={readExistingFilters}
              showFilter={toggleFilterList}
            />
            <BeerList beers={displayBeers} />
          </div>
          <Routes>
            <Route
              path="randombeer"
              element={<RandomBeer beer={randomBeerSelector()} />}
            />
          </Routes>
          <div className="mainBody__filterList--mobile">
            <div className="mainBody__container">
              {showFilterList && (
                <FilterList
                  readFilter={readExistingFilters}
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

// beers.forEach((beer) => {
//   if (
//     maltSearch.includes(beer) &&
//     pairingSearch.includes(beer) &&
//     abvSearch.includes(beer) &&
//     hopsSearch.includes(beer) &&
//     searchedBeers.includes(beer)
//   ) {
//     filteredBeerList.push();
//   }
// });

// const filteredBeerList = maltSearch.concat(
//   hopsSearch,
//   pairingSearch,
//   abvSearch,
//   searchedBeers,
//   highAbvBeers,
//   acidicPhBeers,
//   classicRangeBeers
// );

// console.log("maltSearch", maltSearch);
// console.log("hopsSearch", hopsSearch);
// console.log("pairingSearch", pairingSearch);
// console.log("Abvsearch", abvSearch);
// console.log("searchedBeers", searchedBeers);
