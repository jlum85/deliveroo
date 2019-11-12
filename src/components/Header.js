import React from "react";
import Logo from "../images/deliveroo.png";

const Header = props => {
  return (
    <header>
      <div className="wrapper">
        <img className="logo" src={Logo} alt="Logo"></img>
      </div>
    </header>
  );
};

export default Header;
