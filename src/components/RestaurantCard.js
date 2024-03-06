import { CON_URL } from "../components/Utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;

  if (!resData.id) {
    return;
  }
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    resData;

  return (
    <div className="restCard">
      <img
        className="restImage"
        alt="biriyani"
        src={CON_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",\n")}</h4>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Rating</h5>
      <h5>{sla?.slaString}</h5>
    </div>
  );
};
export default RestaurantCard;
