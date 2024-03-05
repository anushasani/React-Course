import { LOGO_URL } from "../components/Utils/constants";
import { useState } from "react";

const Header = () => {
  let [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-Items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
