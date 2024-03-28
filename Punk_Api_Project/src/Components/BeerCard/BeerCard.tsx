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
  return (
    <div className="beerCard__content">
      <h1 className="beerCard__heading">{name}</h1>
      <img className="beerCard__image" src={image_url} />
      <h2 className="beerCard__description">description</h2>
      <h2 className="beerCard__description">{description}</h2>
      <h3 className="beerCard__pairing">pairing</h3>
      <h3 className="beerCard__pairing">{food_pairing}</h3>
    </div>
  );
};

export default BeerCard;
