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
    <div className="beerContainer">
      <p>{name}</p>
      <img src={image_url} />
      <p>description</p>
      <p> --------- </p>
      <p>{description}</p>
      <p>pairing</p>
      <p>---------</p>
      <p>{food_pairing}</p>
    </div>
  );
};

export default BeerCard;
