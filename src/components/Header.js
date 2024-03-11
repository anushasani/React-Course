import { LOGO_URL } from "../components/Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";

const Header = () => {
  let [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-Items">
        <ul>
          <li>OnlineStatus : {onlineStatus === true ? ":-)" : ":-("}</li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/About"> About us</Link>
          </li>
          <li>
            <Link to="/Contact"> Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="btnLogin"
          onClick={() => {
            btnNameReact === "Login"
              ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
