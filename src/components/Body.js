import {
  RestaurantCard,
  withRestaurantPromoted,
} from "../components/RestaurantCard";
import restList from "../../Utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../../Utils/UserContext";

import useOnlineStatus from "../../Utils/useOnlineStatus";
const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const { setUserInfo, logineUserName } = useContext(UserContext);

  const RestaurantPromoted = withRestaurantPromoted(RestaurantCard);

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
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>"Ohhh lost internet connection "</h1>;
  }

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-wrap">
        <div className="w-16 h-2 ml-5 mt-2">
          <input
            type="text"
            className="border-2"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
        </div>
        <div className="ml-[130] mt-2">
          <button
            className=" bg-blue-300 rounded-md "
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
        </div>

        <div className="filter">
          <button
            className="bg-gray-300 mt-2 ml-3"
            onClick={() => {
              const filterList = ListOfRestaurant.filter((res) => {
                console.log(res.avgRating);
                return res.avgRating > 4.3 || false;
              });

              setfilteredRestaurant(filterList);
            }}
          >
            Top Restaurant
          </button>
        </div>
        <label className="my-2 mx-6">User Name</label>
        <input
          className="border-2 my-2 mx-10"
          value={logineUserName}
          onChange={(e) => setUserInfo(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap  justify-between w-7/12">
        {filteredRestaurant.map((restaurant, index) => (
          <Link key={index} to={"/restaurants/" + restaurant.id}>
            {/* {restaurant.id === null ? 0 : restaurant.id} */}
            {restaurant.promoted ? (
              <RestaurantPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
