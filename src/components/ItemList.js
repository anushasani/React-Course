import { CON_URL } from "../../Utils/constants";

export const ItemList = ({ items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray border-b-2 text"
        >
          <div className="py-2 flex  flex-wrap space-between">
            <span>{item.card.info.name}</span>

            <span className="ml-6">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="flex justify-between">
            <div className="flex py-2 relative">
              <p className="text-xs text-left ">{item.card.info.description}</p>
            </div>
            <div className="w-1/6 relative">
              {}
              <img src={CON_URL + item?.card?.info?.imageId} className="" />
              <button className="bg-white w-12 shadow-md rounded-md text-green-400 border- border-green-600 absolute top-14 left-10">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
