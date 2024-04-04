import "./RandomBeer.scss";
import { Beer } from "../../assets/types";
import NavBar from "../../Components/NavBar/NavBar";

type RandomBeerProps = { beer: Beer };

const RandomBeer = ({ beer }: RandomBeerProps) => {
  return (
    <div className="randomBeer__background">
      <div className="randomBeer__container">
        <h1 className="randomBeer__heading">{beer.name}</h1>
        <img className="randomBeer__image" src={beer.image_url} />
        <p className="randomBeer__description">{beer.description}</p>
        <div className="randomBeer__pairingContainer">
          <h3 className="randomBeer__pairing">pairing</h3>
          <h3 className="randomBeer__pairing">{beer.food_pairing}</h3>
          <h3 className="randomBeer_percentage">Percentage</h3>
          <p className="randomBeer_percentage">{beer.abv}% </p>
          <h3 className="randomBeer_BrewersTips">Brewers Tips </h3>
          <p className="randomBeer_brewersTips">{beer.brewers_tips}% </p>
          <h3 className="randomBeer_firstBrewed">First Brewed</h3>
          <p className="randomBeer_firstBrewed">{beer.first_brewed}% </p>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
