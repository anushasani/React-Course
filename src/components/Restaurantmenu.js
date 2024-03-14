import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import { RestaurantCatogory } from "../components/RestaurantCatogory";
import { useState } from "react";

const Restaurantmenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" text-center">
      <h1 className="  text-2xl my-5 font-bold">{name}</h1>
      <p className="  text-lg my-5 font-bold">
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>
      <div>
        {category.map((category, index) => (
          <RestaurantCatogory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Restaurantmenu;
