import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
import { Beer } from "../../assets/types";
import SearchItem from "../SearchItem/SearchItem";
import RadioButton from "../RadioButton/RadioButton";

type FilterListProps = {
  readFilter: (selectedValue: string, filterChoice: string) => void;
  showFilter: () => void;
  Beers: Beer[];
};

let preppedMaltList: string[] = [];
let preppedHopsList: string[] = [];
let preppedAbvList: number[] = [];
let preppedFoodPairingList: string[] = [];

const FilterList = ({ Beers, showFilter, readFilter }: FilterListProps) => {
  const identifyFoodPairings = (Beers: Beer[]): string[] => {
    let list: string[] = [];
    Beers.forEach((beer) => {
      beer.food_pairing.forEach((pairing) => {
        list.push(pairing);
      });
    });
    return list;
  };

  const identifyHops = (Beers: Beer[]): string[] => {
    let list: string[] = [];
    Beers.forEach((beer) => {
      beer.ingredients.hops.forEach((hop) => {
        list.push(hop.name);
      });
    });
    return list;
  };

  const identifyMalts = (Beers: Beer[]): string[] => {
    let list: string[] = [];
    Beers.forEach((beer) => {
      beer.ingredients.malt.forEach((malt) => {
        list.push(malt.name);
      });
    });
    return list;
  };

  const identifyAbv = (Beers: Beer[]): number[] => {
    let list: number[] = [];
    Beers.forEach((beer) => {
      list.push(beer.abv);
    });
    return list;
  };

  preppedMaltList = identifyMalts(Beers);
  preppedHopsList = identifyHops(Beers);
  preppedAbvList = identifyAbv(Beers);
  preppedFoodPairingList = identifyFoodPairings(Beers);

  return (
    <div className="filterList__container">
      <h3 onClick={showFilter}>close menu</h3>
      <SearchItem searchName={readFilter} filterChoice="name Search" />
      {/* <p> ////////// </p>
      <FilterItem
        readFilter={readFilter}
        filterChoice="Malt"
        sortOptions={preppedMaltList}
      />
      <FilterItem
        readFilter={readFilter}
        filterChoice="Hops"
        sortOptions={preppedHopsList}
      />
      <FilterItem
        readFilter={readFilter}
        filterChoice="Abv"
        sortOptions={preppedAbvList.map((item) => String(item))}
      />
      <FilterItem
        readFilter={readFilter}
        filterChoice="Food pairing"
        sortOptions={preppedFoodPairingList}
      /> */}
      <p> ////////// </p>
      <RadioButton filterChoice="High ABV > 6.0%" readFilter={readFilter} />
      <RadioButton filterChoice="Acidic ph < 4" readFilter={readFilter} />
      <RadioButton filterChoice="Classic Range" readFilter={readFilter} />
    </div>
  );
};

export default FilterList;
