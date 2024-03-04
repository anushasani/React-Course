import { RestaurantCard } from "../components/RestaurantCard";
import restList from "./Utils/mockData";
import { useState } from "react";
const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState(restList);

  return (
    <div className="body">
      <div className="searchBar">
        <label>
          Search :
          <input className="searchInput" />
        </label>
      </div>
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            const filterList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurant(filterList);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="restContainer">
        {ListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
