import "./SearchItem.scss";
import { ChangeEvent } from "react";

type SearchItemProps = {
  filterChoice: string;
  searchName: (selectedValue: string, filterChoice: string) => void;
};

const SearchItem = ({ searchName, filterChoice }: SearchItemProps) => {
  const readFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    searchName(selectedValue, filterChoice);
  };

  return (
    <div className="filterItem__container">
      <p>{filterChoice}</p>
      <input type="text" onChange={readFilter}></input>
    </div>
  );
};

export default SearchItem;
