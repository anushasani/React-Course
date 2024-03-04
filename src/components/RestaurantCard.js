import { CON_URL } from "../components/Utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    resData?.info || {};

  return (
    <div className="restCard">
      <img
        className="restImage"
        alt="biriyani"
        src={CON_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Rating</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};
export default RestaurantCard;
