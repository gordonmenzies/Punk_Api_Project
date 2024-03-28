import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
import beers from "../../assets/beers";

const FilterList = () => {
  return (
    <div className="filterList__container">
      <FilterItem filterChoice="Malt" beer={beers[0]} />
      <FilterItem filterChoice="Hops" beer={beers[0]} />
      <FilterItem filterChoice="abv" beer={beers[0]} />
      <FilterItem filterChoice="food pairing" beer={beers[0]} />
    </div>
  );
};

export default FilterList;
