import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = () => {
  return (
    <div className="filterList__container">
      <FilterItem filterChoice="filterItem" />;
    </div>
  );
};

export default FilterList;
