import { LOGO_URL } from "../../Utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import UserContext from "../../Utils/UserContext";

const Header = () => {
  let [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { logineUserName } = useContext(UserContext);
  // console.log("data", data);
  return (
    <div className="flex justify-between  bg-gray-200 shadow-lg ">
      <div className="logoContainer">
        <Link to="/">
          <img className="w-36" src={LOGO_URL} />
        </Link>
      </div>

      <div className=" flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            OnlineStatus : {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/About"> About us</Link>
          </li>
          <li className="px-6">
            <Link to="/Contact"> Contact Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="px-4 bg-slate-400 rounded-lg  ml-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{logineUserName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
