import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar__container">
      <h1 className="navBar__heading">PunkAPi</h1>
      <h1 className="navBar__heading--mobile">Filter</h1>
      <h1 className="navBar__heading--mobile">Random</h1>
    </div>
  );
};

export default NavBar;
