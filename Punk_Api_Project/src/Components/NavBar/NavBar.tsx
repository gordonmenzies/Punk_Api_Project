import "./NavBar.scss";
import { Link } from "react-router-dom";

type NavBarProps = {
  showFilter: () => void;
};

const NavBar = ({ showFilter }: NavBarProps) => {
  // const showFilter = () => {
  //   setShowFilterList(!showFilterList)
  // }

  return (
    <div className="navBar__container">
      <Link to="/" className="navBar__heading">
        PunkAPi
      </Link>
      <div className="navBar__selection--mobile">
        <h1 className="navBar__heading--mobile" onClick={showFilter}>
          Select Filters
        </h1>
        <Link to="/randombeer" className="navBar__heading--mobile">
          Random
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
