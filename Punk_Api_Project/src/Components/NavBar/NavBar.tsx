import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar__container">
      <h1 className="navBar__heading">PunkAPi</h1>
      <div className="navBar__selection--mobile">
        <h1 className="navBar__heading--mobile">Select Filters</h1>
        <h1 className="navBar__heading--mobile">Random</h1>
      </div>
    </div>
  );
};

export default NavBar;
