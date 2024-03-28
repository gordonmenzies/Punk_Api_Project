import "./FilterItem.scss";
import { ChangeEvent } from "react";

type FilterItemProps = {
  filterChoice: string;
  sortOptions: string[];
  readFilter: (selectedValue: string) => void;
};

const FilterItem = ({
  readFilter,
  sortOptions,
  filterChoice,
}: FilterItemProps) => {
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    readFilter(selectedValue);
  };

  return (
    <div className="filterItem__container">
      <select onChange={handleSelect} className="filterItem__option">
        {sortOptions.map((sortOption, index) => (
          <option className="filterItem__option" key={index}>
            {sortOption}
          </option>
        ))}
      </select>
      <p>{filterChoice}</p>
    </div>
  );
};

export default FilterItem;
