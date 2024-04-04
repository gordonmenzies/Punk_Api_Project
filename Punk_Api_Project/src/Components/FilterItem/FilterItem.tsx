import "./FilterItem.scss";
import { ChangeEvent } from "react";

type FilterItemProps = {
  filterChoice: string;
  sortOptions: string[];
  readFilter: (selectedValue: string, filterChoice: string) => void;
};

const FilterItem = ({
  readFilter,
  sortOptions,
  filterChoice,
}: FilterItemProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    readFilter(event.target.value, filterChoice);
  };

  // filter duplicates from sort options
  const removeDuplicatesAndOrganise = (sortOptions: string[]): string[] => {
    let uniqueArray = Array.from(new Set(sortOptions));

    if (typeof uniqueArray[0] === "string") {
      uniqueArray = uniqueArray.sort(); // Sort alphabetically
    } else {
      const numberArray = uniqueArray.map(Number).sort((a, b) => a - b); // Convert to numbers and sort
      uniqueArray = numberArray.map(String); // Convert back to strings
    }
    return uniqueArray;
  };

  return (
    <div className="filterItem__container">
      <select onChange={handleChange} className="filterItem__option">
        <option>Select An Option</option>
        {removeDuplicatesAndOrganise(sortOptions).map((sortOption, index) => (
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
