import { CON_URL } from "../../Utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  if (!resData.id) {
    return;
  }
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    resData;

  return (
    <div className=" m-4 p-4 w-[245] rounded-lg hover:bg-slate-200">
      <img
        className="w-[200] rounded-md"
        alt="biriyani"
        src={CON_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",\n")}</h4>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Rating</h5>
      <h5>{sla?.slaString}</h5>
    </div>
  );
};

export const withRestaurantPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white rounded-md absolute">
          Promoted
        </label>
        <div>
          <RestaurantCard {...props} />
        </div>
      </div>
    );
  };
};
