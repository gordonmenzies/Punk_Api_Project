import "./Main.scss";
import beers from "../../assets/dataFormatted.ts";
import FilterList from "../FilterList/FilterList";
import BeerList from "../BeerList/BeerList";
import NavBar from "../NavBar/NavBar";
import { Beer, Malt } from "../../assets/types";
import { useState } from "react";

type FilterResult = {
  selectedValue: string;
  filterChoice: string;
};

// interface FilterObject {
//   Hops?: string[];
//   Malt?: string[];
//   Abv?: number;
//   foodPairing: string[];
// }

const Main = () => {
  const [displayBeers, setDisplayBeers] = useState<Beer[]>(beers);
  const [filterResult, setFilterResult] = useState<FilterResult[]>([]);

  const readFilter = (selectedValue: string, filterChoice: string) => {
    setFilterResult([
      ...filterResult,
      { selectedValue: selectedValue, filterChoice: filterChoice },
    ]);

    console.log(filterResult);
    console.log("displayBeers", displayBeers);
    filterArray();
  };

  const filterArray = () => {
    let maltSearch: Beer[] = [];
    let hopsSearch: Beer[] = [];
    let pairingSearch: Beer[] = [];
    let abvSearch: Beer[] = [];

    filterResult.forEach((result) => {
      displayBeers.forEach((beer) => {
        if (result.filterChoice === "Malt") {
          beer.ingredients.malt.forEach((malt) => {
            if (malt.name === result.selectedValue) {
              maltSearch.push(beer);
            }
          });
        } else if (result.filterChoice === "Hops") {
          beer.ingredients.hops.forEach((hops) => {
            if (hops.name === result.selectedValue) {
              hopsSearch.push(beer);
            }
          });
        } else if (result.filterChoice === "Abv") {
          if (beer.abv === Number(result.selectedValue)) {
            abvSearch.push(beer);
          }
        } else if (result.filterChoice === "Food pairing") {
          beer.food_pairing.forEach((pairing) => {
            if (pairing === result.selectedValue) {
              pairingSearch.push(beer);
            }
          });
        }
      });
    });

    console.log(maltSearch);
    console.log(hopsSearch);
    console.log(pairingSearch);
    console.log(abvSearch);

    const filteredBeerList = maltSearch.concat(
      hopsSearch,
      pairingSearch,
      abvSearch
    );
    return filteredBeerList;
  };

  const searchName = (selectedValue: string, filterChoice: string) => {
    console.log(selectedValue);

    const searchedBeers = displayBeers.filter((beer) =>
      beer.name.includes(selectedValue)
    );

    console.log("searchedBeers", searchedBeers);
    // setDisplayBeers(searchedBeers);
  };

  return (
    <div className="mainPage">
      <NavBar />
      <div className="featuredBeer">
        <h1>Featured Beer</h1>
        <img src={`${beers[0].image_url}`} />
      </div>
      <div className="mainBody__container">
        <FilterList readFilter={readFilter} searchName={searchName} />
        <BeerList beers={displayBeers} />
      </div>
    </div>
  );
};

export default Main;

// interface FilterObject {
//   hops?: string;
//   malt?: string;
//   preparedFood?: string;
//   abv?: number;
// }

// interface Malt {
//   name: string;
//   amount: Volume;
// }

// interface Hop {
//   name: string;
//   amount: Volume;
//   add: string;
//   attribute: string;
// }

/// METHOD FOR CREATING SEAPARATE VALUES TO FILTER THROUGH
// const readFilter = (selectedValue: string, filterChoice: string) => {
//   console.log("filterChoice", filterChoice);
//   console.log("selectedValue", selectedValue);
//   if (filterChoice === "Hops") {
//     setFilterHop(selectedValue);
//   } else if (filterChoice === "Malt") {
//     console.log(selectedValue);
//     setFilterMalt(selectedValue);
//   } else if (filterChoice === "Food pairing") {
//     setFilterPairing(selectedValue);
//   } else if (filterChoice === "Abv") {
//     setFilterAbv(selectedValue);
//   }
// };

//   // read the choice made in the filter selection and assign the values
//   const searchNestedArray = (data: Beer[], searchQuery: string) => {
//     return data.filter((object) =>
//       object.ingredients.malt.some((item) => item.name === searchQuery)
//     );
//   };

// const myFilter = (filter) => {
//     return data.filter((item) => {
//       const filter = {
//         byDistrict: true,
//         byWard: true,
//         byCategory: true,
//       };
//       if (filterData.district) filter.byDistrict = item.district === filterData.district;
//       // Even if one ward_no.ward matches the value it's true
//       if (filterData.ward) filter.byWard = item.ward_no.some((wards) => wards.ward === filterData.ward);
//       if (filterData.category)
//         filter.byCategory = item.ward_no.some((wards) =>
//           Object.keys(wards).some((categoryName) => categoryName !== 'ward' && categoryName === filterData.category));

//       return filter.byDistrict && filter.byWard && filter.byCategory;
//     });
//   }

// // takes items from the filterResult array and assigns them as
// // to the filterItem Object
// const createFilterObject = (filterResult: FilterResult[], object:FilterObject) => {
//   filterResult.forEach((result) => {
//     Object.keys(object).forEach(key => {
//       if (object[key as keyof FilterObject] === result.filterChoice)
//     })
//   })
// };

// filterResult.forEach((result) => {
//   if (result.filterChoice === "Malt") {
//     maltSearch = displayBeers.filter((beer) => {
//       beer.ingredients.malt.filter((malt) => {
//         return malt.name === result.selectedValue;
//       });
//     });
//   } else if (result.filterChoice === "Hops") {
//     hopsSearch = displayBeers.filter((beer) => {
//       beer.ingredients.hops.filter((hops) => {
//         return hops.name === result.selectedValue;
//       });
//     });
//   } else if (result.filterChoice === "Abs") {
//     absSearch = displayBeers.filter((beer) => {
//       return beer.abv === Number(result.selectedValue);
//     });
//   } else if (result.filterChoice === "Food pairing") {
//     pairingSearch = displayBeers.filter((beer) => {
//       return beer.food_pairing.filter((pairing) => {
//         pairing === result.selectedValue;
//       });
//     });
//   }
// });

// displayBeers.forEach((beer) => {
//   beer.ingredients.malt.forEach((malt) => {
//     if (malt.name === filterResult[0].selectedValue) {
//       maltSearch.push(beer);
//     }
//   });
// });
