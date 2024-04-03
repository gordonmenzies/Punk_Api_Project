import "./NavBar.scss";

type NavBarProps = {
  showFilter: () => void;
};

const NavBar = ({ showFilter }: NavBarProps) => {
  // const showFilter = () => {
  //   setShowFilterList(!showFilterList)
  // }

  return (
    <div className="navBar__container">
      <h1 className="navBar__heading">PunkAPi</h1>
      <div className="navBar__selection--mobile">
        <h1 className="navBar__heading--mobile" onClick={showFilter}>
          Select Filters
        </h1>
        <h1 className="navBar__heading--mobile">Random</h1>
      </div>
    </div>
  );
};

export default NavBar;
