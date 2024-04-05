import "./BeerCard.scss";

type BeerCardProps = {
  name: string;
  image_url: string;
  description: string;
  food_pairing: string[];
};

const BeerCard = ({
  name,
  image_url,
  description,
  food_pairing,
}: BeerCardProps) => {
  const shortenString = (string: string): string => {
    const maxLength = 200;
    if (string.length <= maxLength) {
      return string;
    }
    // Find the last full stop within maxLength
    const lastSpaceIndex = string.lastIndexOf(".", maxLength);
    // If there's no full stop within maxLength, truncate the string to maxLength
    if (lastSpaceIndex === -1) {
      return string.substring(0, maxLength).trim();
    }
    // Truncate the string to the last full stop within maxLength
    return string.substring(0, lastSpaceIndex).trim();
  };

  const shortenFoodPairingAddSpaces = (food_pairing: string[]): string[] => {
    if (food_pairing.length > 5) {
      food_pairing = food_pairing.slice(0, 5);
    }
    food_pairing.forEach((pairing) => (pairing = pairing + " "));
    return food_pairing;
  };

  return (
    <div className="beerCard__container">
      <h1 className="beerCard__heading">{name}</h1>
      <div className="beerCard__content">
        <img className="beerCard__image" src={image_url} />
        <h2 className="beerCard__description">{shortenString(description)}</h2>
        <div className="beerCard__pairingContainer">
          <h3 className="beerCard__pairing">
            {shortenFoodPairingAddSpaces(food_pairing)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
