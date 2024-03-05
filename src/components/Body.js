import { RestaurantCard } from "../components/RestaurantCard";
import restList from "./Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    let mappedData = json.data.cards.map(
      (current) => current.card.card.info || {}
    );

    setListOfRestaurant(mappedData);
    setfilteredRestaurant(mappedData);

    console.log("filteredRestaurant", filteredRestaurant);
    console.log("ListOfRestaurant", ListOfRestaurant);
  };

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searchBar">
        <input
          type="text"
          className="searchInput"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
            console.log(searchText);
          }}
        />
      </div>
      <button
        className="searchButton"
        onClick={() => {
          const filterRestaurant = ListOfRestaurant.filter((res) => {
            return (
              res?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
              false
            );
          });
          setfilteredRestaurant(filterRestaurant);
        }}
      >
        Search
      </button>
      <div className="filter">
        <button
          data-abc="abc"
          className="filterBtn"
          onClick={() => {
            const filterList = ListOfRestaurant.filter(
              (res) => res.avgRating > 4 || false
            );

            setListOfRestaurant(filterList);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="restContainer">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
