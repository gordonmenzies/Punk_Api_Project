import "./RandomBeer.scss";
import { Beer } from "../../assets/types";

type RandomBeerProps = { beer: Beer };

const RandomBeer = ({ beer }: RandomBeerProps) => {
  const shortenString = (string: string): string => {
    const maxLength = 200;
    if (string.length <= maxLength) {
      return string; // Return the original string if it's already within the maxLength
    }

    // Find the last space within maxLength
    const lastSpaceIndex = string.lastIndexOf(" ", maxLength);

    // If there's no space within maxLength, truncate the string to maxLength
    if (lastSpaceIndex === -1) {
      return string.substring(0, maxLength).trim();
    }

    // Truncate the string to the last space within maxLength
    return string.substring(0, lastSpaceIndex).trim();
  };

  return (
    <div className="randomBeer__container">
      <h1 className="randomBeer__heading">{beer.name}</h1>
      <div className="randomBeer__content">
        <div className="randomBeer__imgAndDescription">
          <img className="randomBeer__image" src={beer.image_url} />
          <h2 className="randomBeer__description">{beer.description}</h2>
        </div>
        <div className="randomBeer__pairingContainer">
          <h3 className="randomBeer__pairing">pairing</h3>
          <h3 className="randomBeer__pairing">{beer.food_pairing}</h3>
          <h3 className="randomBeer_percentage">Percentage</h3>
          <h3 className="randomBeer_percentage">{beer.abv}% </h3>
          <h3 className="randomBeer_BrewersTips">Brewers Tips </h3>
          <h3 className="randomBeer_brewersTips">{beer.brewers_tips}% </h3>
          <h3 className="randomBeer_firstBrewed">First Brewed</h3>
          <h3 className="randomBeer_firstBrewed">{beer.first_brewed}% </h3>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
