import "./BeerList.scss";
import { Beer } from "../../assets/types";
import BeerCard from "../BeerCard/BeerCard";

type BeerListProps = {
  beers: Beer[];
};

const BeerList = ({ beers }: BeerListProps) => {
  return (
    <div className="beerList">
      {beers.map((beer: Beer) => (
        <BeerCard
          name={beer.name}
          image_url={beer.image_url}
          description={beer.description}
          food_pairing={beer.food_pairing}
        />
      ))}
    </div>
  );
};

export default BeerList;
