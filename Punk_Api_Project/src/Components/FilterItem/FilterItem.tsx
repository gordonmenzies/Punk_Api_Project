import "./FilterItem.scss";

type FilterItemProps = {
  filterChoice: string;
};

const FilterItem = ({ filterChoice }: FilterItemProps) => {
  return (
    <div className="filterItem__container">
      <input type="checkbox"></input>
      <p>{filterChoice}</p>
    </div>
  );
};

export default FilterItem;
