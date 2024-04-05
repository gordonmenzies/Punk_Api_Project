import "./App.scss";
import "./assets/types";
import Main from "./Components/Main/Main";

function App() {
  return <Main />;
}

export default App;

// <div className="appContainer">
//   <div className="navMenu">
//     <div className="seachListing">
//       <p>Search by Name</p>
//       <input type="text"></input>
//     </div>
//     <div className="seachListing">
//       <input type="checkbox"></input>
//       <p>Search items go here</p>
//     </div>
//     <div className="searchListing">
//       <input type="checkbox"></input>
//       <p>Acidity</p>
//     </div>
//     <div className="searchListing">
//       <input type="checkbox"></input>
//       <p>% percentage</p>
//     </div>
//     <div className="searchListing">
//       <input type="checkbox"></input>
//       <p>Range</p>
//     </div>
//   </div>
//   <div className="listContainer">
//     {beers.map((beer) => (
//       <div className="beerContainer">
//         <p>{beer.name}</p>
//         <img src={beer.image_url} />
//         <p>description</p>
//         <p> --------- </p>
//         <p>{beer.description}</p>
//         <p>pairing</p>
//         <p>---------</p>
//         <p>{beer.food_pairing}</p>
//       </div>
//     ))}
//   </div>
// </div>
