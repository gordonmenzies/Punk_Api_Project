import "./Main.scss";
import beers from "../../assets/beers";
import FilterList from "../FilterList/FilterList";
import BeerList from "../BeerList/BeerList";
import NavBar from "../NavBar/NavBar";
import { Beer } from "../../assets/types";

// const [listOfFood, setFoodList] = useState<string[]>([]);

const identifyFoodPairings = () => {
  let list: string[] = [];
  beers.forEach((beer) => {
    beer.food_pairing.forEach((pairing) => {
      list.push(pairing);
    });
  });
  return list;
};

const preppedMaltList: string[] = [];
const preppedHopsList: string[] = [];
const preppedAbvList: number[] = [];
let preppedfoodPairingList: string[] = [];

const populateLists = () => {
  beers.forEach((beer: Beer) => {
    preppedMaltList.push(beer.ingredients.malt[0].name);
    preppedHopsList.push(beer.ingredients.hops[0].name);
    preppedAbvList.push(beer.abv);
    preppedfoodPairingList = identifyFoodPairings();
  });
};

populateLists();

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
