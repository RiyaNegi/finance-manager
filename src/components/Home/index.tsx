import React from "react";
import { changeName, selectName } from "../../store/slices/homeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Sidebar from "../Sidebar";
import "./styles.css";
import Header from "../Dashboard/Header";
import OverviewCards from "../Dashboard/OverviewCards";
import CurrentBalance from "../Dashboard/CurrentBalance";

const Home = () => {
  const dispatch = useAppDispatch();
  const nameValue = useAppSelector(selectName);

  return (
    <div className="homepage">
      <Sidebar />
      <div className="home-content">
        <Header />
        <OverviewCards />
        <CurrentBalance />
      </div>
    </div>
  );
};

export default Home;
