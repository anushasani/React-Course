import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "./Utils/constants";

const Restaurantmenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name} -{" "}
              {item.card.info.price || item.card.info.defaultPrice}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Restaurantmenu;
