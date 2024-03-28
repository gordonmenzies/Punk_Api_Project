import "./FilterItem.scss";

type FilterItemProps = {
  filterChoice: string;
  sortOptions: string[];
};

const FilterItem = ({ sortOptions, filterChoice }: FilterItemProps) => {
  return (
    <div className="filterItem__container">
      <select>
        {sortOptions.map((sortOption, index) => (
          <option key={index}>{sortOption}</option>
        ))}
      </select>
      <p>{filterChoice}</p>
    </div>
  );
};

export default FilterItem;
