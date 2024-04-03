import "./RandomBeer.scss";

type RandomBeerProps = {
  name: string;
  image_url: string;
  description: string;
  food_pairing: string[];
};

const RandomBeer = ({
  name,
  image_url,
  description,
  food_pairing,
}: RandomBeerProps) => {
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
    <div className="RandomBeer__container">
      <h1 className="RandomBeer__heading">{name}</h1>
      <div className="RandomBeer__content">
        <img className="RandomBeer__image" src={image_url} />
        <h2 className="RandomBeer__description">
          {shortenString(description)}
        </h2>
        <div className="RandomBeer__pairingContainer">
          <h3 className="RandomBeer__pairing">pairing</h3>
          <h3 className="RandomBeer__pairing">{food_pairing}</h3>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
