import React from "react";
import "./navbar.scss";
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
} from "@mui/icons-material";
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
            English
          </div>
          <div className="item">
            <DarkModeOutlined />
          </div>
          <div className="item">
            <FullscreenExitOutlined />
          </div>
          <div className="item">
            <NotificationsNoneOutlined />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined />
          </div>{" "}
          <div className="item">
            <ListOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
