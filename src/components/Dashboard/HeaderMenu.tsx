import React from "react";
import "./styles.css";
import userIcon from "../../assets/User_box.svg";
import { useAppSelector } from "../../hooks";
import { selectAuth } from "../../store/slices/authSlice";

const HeaderMenu = () => {
  const userName = useAppSelector(selectAuth).user?.username || "Username";
  return (
    <div className="header-menu-div">
      <div>Dashboard</div>
      <div className="header-menu-user">
        <img src={userIcon} /> {userName}
      </div>
    </div>
  );
};

export default HeaderMenu;
