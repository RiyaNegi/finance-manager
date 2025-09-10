import React, { useState } from "react";
import "./styles.css";

import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="header-div">
      <div>Dashboard</div>
      <HeaderMenu />
    </div>
  );
};

export default Header;
