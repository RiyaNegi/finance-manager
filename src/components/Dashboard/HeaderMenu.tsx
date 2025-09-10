import React from "react";
import "./styles.css";
import userIcon from "../../assets/User_box.svg";
import { useAppSelector } from "../../hooks";
import { selectAuth } from "../../store/slices/authSlice";

import { 
  Button, 
  Avatar, 
  Box, 
  Text, 
  Portal,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
} from "@chakra-ui/react";

const HeaderMenu = () => {
  const userName = useAppSelector(selectAuth).user?.username || "Username";
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <div className="header-user">
          <img src={userIcon} /> {userName}
        </div>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent>
            <MenuItem value="profile">Profile</MenuItem>
            <MenuItem value="settings">Settings</MenuItem>
            <MenuItem value="logout">Logout</MenuItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </MenuRoot>
  );
};

export default HeaderMenu;
