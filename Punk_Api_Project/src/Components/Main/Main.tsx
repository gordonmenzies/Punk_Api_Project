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
  const [radioArray, setRadioArray] = useState<Beer[]>(beers);
  const [nameSearchArray, setNameSearchArray] = useState<Beer[]>(beers);

  const toggleFilterList = () => {
    setShowFilterList(!showFilterList);
  };

  const compareArrays = (selectedBeers: Beer[], filterChoice: string) => {
    if (filterArray.length === 0) {
      setDisplayBeers(selectedBeers);
    } else {
      if (filterChoice === "name Search") {
        const includedInBothArrays = selectedBeers.filter((beer) =>
          radioArray.includes(beer)
        );
        setDisplayBeers(includedInBothArrays);
      } else {
        const includedInBothArrays = selectedBeers.filter((beer) =>
          nameSearchArray.includes(beer)
        );
        setDisplayBeers(includedInBothArrays);
      }
    }
  };

  const readExistingFilters = (selectedValue: string, filterChoice: string) => {
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
  };

  const filterArray = (
    selectedValue: string,
    filterChoice: string,
    filterReselect: boolean
  ) => {
    let searchedBeers: Beer[] = [];
    let highAbvBeers: Beer[] = [];
    let acidicPhBeers: Beer[] = [];
    let classicRangeBeers: Beer[] = [];

    // filter via text input
    if (filterChoice === "name Search") {
      console.log(selectedValue);
      setNameSearchArray(
        beers.filter((beer) => beer.name.includes(selectedValue))
      );
      searchedBeers = beers.filter((beer) => beer.name.includes(selectedValue));
      if (selectedValue === "") {
        setNameSearchArray(beers);
        searchedBeers = beers;
      }
      compareArrays(nameSearchArray, filterChoice);

      // filter via radio buttons
    } else if (filterChoice == "All Beers") {
      compareArrays(beers, filterChoice);
      setRadioArray(beers);
    } else if (filterChoice === "High ABV > 6.0%") {
      setRadioArray(beers.filter((beer) => beer.abv > 6));
      highAbvBeers = beers.filter((beer) => beer.abv > 6);
      compareArrays(radioArray, filterChoice);
    } else if (filterChoice === "Acidic ph < 4") {
      setRadioArray(beers.filter((beer) => beer.ph < 4));
      acidicPhBeers = beers.filter((beer) => beer.ph < 4);
      compareArrays(radioArray, filterChoice);
    } else if (filterChoice === "Classic Range") {
      setRadioArray(
        beers.filter((beer) => {
          return Number(beer.first_brewed.split("/")[1]) < 2010;
        })
      );
      classicRangeBeers = beers.filter((beer) => {
        return Number(beer.first_brewed.split("/")[1]) < 2010;
      });
    } else if (filterChoice === "Hops") {
      if (readExistingFilters(selectedValue, filterChoice) === true) {
      }
    }
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
              readFilter={readExistingFilters}
              showFilter={toggleFilterList}
            />
            {displayBeers.length === 0 ? (
              <p>There are no beers that fit that description</p>
            ) : (
              <BeerList beers={displayBeers} />
            )}
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
              {displayBeers.length === 0 ? (
                <p>There are no beers that fit that description</p>
              ) : (
                <BeerList beers={displayBeers} />
              )}
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
