import "./Main.scss";
import beers from "../../assets/beers";
import FilterList from "../FilterList/FilterList";
import BeerList from "../BeerList/BeerList";
import NavBar from "../NavBar/NavBar";
import { Beer } from "../../assets/types";
import { useState } from "react";

// const [listOfFood, setFoodList] = useState<string[]>([]);

const Main = () => {
  const [displayBeers, setDisplayBeers] = useState<Beer[]>(beers);
  const [filterResult, setFilterResult] = useState<String[]>([]);

  const readFilter = (string: string) => {
    setFilterResult([...filterResult, string]);
  };

  console.log(filterResult);

  return (
    <div>
      <NavBar />
      <div className="mainBody__container">
        <FilterList readFilter={readFilter} />
        <BeerList beers={beers} />
      </div>
    </div>
  );
};

export default Main;
