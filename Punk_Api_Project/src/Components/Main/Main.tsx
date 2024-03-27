import "./Main.scss";
import beers from "../../assets/beers";
import FilterList from "../FilterList/FilterList";
import BeerList from "../BeerList/BeerList";
import NavBar from "../NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="mainBody__container">
        <FilterList />
        <BeerList beers={beers} />
      </div>
    </div>
  );
};

export default Main;
