import "./NavBar.scss";
import { Link } from "react-router-dom";

type NavBarProps = {
  showFilter?: () => void;
};

const NavBar = ({ showFilter }: NavBarProps) => {
  return (
    <div className="navBar__container">
      <h1 className="navBar__heading--filters" onClick={showFilter}>
        Select Filters
      </h1>
      <Link to="/" className="navBar__heading">
        PunkAPi
      </Link>
      <Link to="/randombeer" className="navBar__heading--random">
        Random
      </Link>
    </div>
  );
};

export default NavBar;
