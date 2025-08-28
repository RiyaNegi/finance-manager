import React from "react";
import "./styles.css";
import userIcon from "../../assets/User_box.svg";

const Header = () => {
  return (
    <div className="header-div">
      <div>Dashboard</div>
      <div className="header-user">
        <img src={userIcon} /> Username
      </div>
    </div>
  );
};

export default Header;
