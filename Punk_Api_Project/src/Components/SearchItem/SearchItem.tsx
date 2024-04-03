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
      <input type="text" onChange={readFilter} value="Name"></input>
      <p>Name</p>
    </div>
  );
};

export default SearchItem;
