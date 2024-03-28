import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
import { Beer } from "../../assets/types";
import beers from "../../assets/beers";

type FilterListProps = {
  readFilter: (string: string) => void;
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
  preppedMaltList.push(beer.ingredients.malt[0].name);
  preppedHopsList.push(beer.ingredients.hops[0].name);
  preppedAbvList.push(beer.abv);
  preppedFoodPairingList = identifyFoodPairings();
});

const FilterList = ({ readFilter }: FilterListProps) => {
  return (
    <div className="filterList__container">
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
        filterChoice="abv"
        sortOptions={preppedAbvList.map((item) => String(item))}
      />
      <FilterItem
        readFilter={readFilter}
        filterChoice="food pairing"
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
