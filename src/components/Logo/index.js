import React from "react";
import "./style.css";

/**
 * @author
 * @function Logo
 **/

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={require("../../blogPostImages/logo.png")} alt="" />
    </div>
  );
};

export default Logo;
