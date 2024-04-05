import "./FilterList.scss";
import { Beer } from "../../assets/types";
import SearchItem from "../SearchItem/SearchItem";
import RadioButton from "../RadioButton/RadioButton";

type FilterListProps = {
  readFilter: (selectedValue: string, filterChoice: string) => void;
  showFilter: () => void;
  Beers: Beer[];
};

const FilterList = ({ showFilter, readFilter }: FilterListProps) => {
  return (
    <div className="filterList__container">
      <h3 onClick={showFilter}>close menu</h3>
      <SearchItem searchName={readFilter} filterChoice="name Search" />
      <p> ////////// </p>
      <RadioButton filterChoice="All Beers" readFilter={readFilter} />
      <RadioButton filterChoice="High ABV > 6.0%" readFilter={readFilter} />
      <RadioButton filterChoice="Acidic ph < 4" readFilter={readFilter} />
      <RadioButton filterChoice="Classic Range" readFilter={readFilter} />
    </div>
  );
};

export default FilterList;
