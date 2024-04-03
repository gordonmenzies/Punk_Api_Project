import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
import { Beer } from "../../assets/types";
import beers from "../../assets/dataFormatted";
import SearchItem from "../SearchItem/SearchItem";

type FilterListProps = {
  readFilter: (selectedValue: string, filterChoice: string) => void;
  showFilter: () => void;
};

const preppedMaltList: string[] = [];
const preppedHopsList: string[] = [];
const preppedAbvList: number[] = [];
let preppedFoodPairingList: string[] = [];

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
  beer.ingredients.malt.forEach((malt) => {
    preppedMaltList.push(malt.name);
  });
  beer.ingredients.hops.forEach((hops) => {
    preppedHopsList.push(hops.name);
  });
  preppedAbvList.push(beer.abv);
  preppedFoodPairingList = identifyFoodPairings();
});

const FilterList = ({ showFilter, readFilter }: FilterListProps) => {
  return (
    <div className="filterList__container">
      <h3 onClick={showFilter}>close menu</h3>
      <SearchItem searchName={readFilter} filterChoice="name Search" />
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
      />
    </div>
  );
};

export default FilterList;

// const [selectMaltOption, setMaltOption] = useState<string>("");
// const [selectHopsOption, setHopsOption] = useState<string>("");
// const [selectAbvOption, setAbvOption] = useState<string>("");
// const [selectFoodPairingOption, setFoodPairingOption] = useState<string>("");

// // const handleMaltSelect = (selectedValue: string) => {
// //   setMaltOption(selectedValue);
// // };

// // const handleHopsSelect = (selectedValue: string) => {
// //   setHopsOption(selectedValue);
// // };

// // const handleAbvSelect = (selectedValue: string) => {
// //   setAbvOption(selectedValue);
// // };

// // const handleFoodPairingSelect = (selectedValue: string) => {
// //   setFoodPairingOption(selectedValue);
// // };
