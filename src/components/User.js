import { useState } from "react";

const User = ({ name, location }) => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <h1>{name}</h1>
      <h1>{location}</h1>
    </div>
  );
};

export default User;
