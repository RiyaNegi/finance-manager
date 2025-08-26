import React from "react";
import { changeName, selectName } from "../../store/slices/homeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Sidebar from "../Sidebar";
import "./styles.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const nameValue = useAppSelector(selectName);

  return (
    <div className="homepage">
      <Sidebar />
      <div className="home-content">
        Home page
        <br />
        <div className="name-display"> Name update - {nameValue} </div>
        <input
          className="name-input"
          aria-label="Set increment amount"
          value={nameValue}
          onChange={(e) => {
            dispatch(changeName(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default Home;
