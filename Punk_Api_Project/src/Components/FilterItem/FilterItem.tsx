import "./FilterItem.scss";
import { Beer } from "../../assets/types";

type FilterItemProps = {
  filterChoice: string;
  beer: Beer;
};

const FilterItem = ({ beer, filterChoice }: FilterItemProps) => {
  return (
    <div className="filterItem__container">
      <select></select>
      <p>{filterChoice}</p>
    </div>
  );
};

export default FilterItem;
