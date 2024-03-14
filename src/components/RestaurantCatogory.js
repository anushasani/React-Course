import { ItemList } from "./ItemList";
import { useState } from "react";

export const RestaurantCatogory = (props) => {
  const { data, showItems, setShowIndex } = props;

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-[800] shadow-lg m-auto  cursor-pointer ">
      <div className=" flex align-middle justify-between  font-bold ">
        <span className="   flex p-4   flex-wrap">
          {data.title} ({data.itemCards.length})
        </span>
        <span onClick={handleClick}>{"⬇"}</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
