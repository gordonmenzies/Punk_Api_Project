import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
import { useState } from "react";
import { Beer } from "../../assets/types";
import beers from "../../assets/beers";

const preppedMaltList: string[] = [];
const preppedHopsList: string[] = [];
const preppedAbvList: number[] = [];
let preppedfoodPairingList: string[] = [];

const identifyFoodPairings = (): string[] => {
  let list: string[] = [];
  beers.forEach((beer) => {
    beer.food_pairing.forEach((pairing) => {
      list.push(pairing);
    });
  });
  return list;
};

beers.forEach((beer: Beer) => {
  preppedMaltList.push(beer.ingredients.malt[0].name);
  preppedHopsList.push(beer.ingredients.hops[0].name);
  preppedAbvList.push(beer.abv);
  preppedfoodPairingList = identifyFoodPairings();
});

const FilterList = () => {
  const [maltList, setMaltList] = useState<string[]>(preppedMaltList);
  const [hopsList, setHopsList] = useState<string[]>(preppedMaltList);
  const [abvList, setAbvList] = useState<number[]>(preppedAbvList);
  const [foodPairingList, setFoodPairingList] = useState<string[]>(
    preppedfoodPairingList
  );

  return (
    <div className="filterList__container">
      <FilterItem filterChoice="Malt" sortOptions={maltList} />
      <FilterItem filterChoice="Hops" sortOptions={hopsList} />
      <FilterItem
        filterChoice="abv"
        sortOptions={abvList.map((item) => String(item))}
      />
      <FilterItem filterChoice="food pairing" sortOptions={foodPairingList} />
    </div>
  );
};

export default FilterList;
