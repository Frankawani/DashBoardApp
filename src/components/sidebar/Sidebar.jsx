import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

import {  Link } from "react-router-dom";

function Sidebar() {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={linkStyle}>
          <span className="logo">FrankTech</span>
        </Link> 
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"> LISTS</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dasboard</span>
          </li>
          <Link to="/users" style={linkStyle}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <Inventory2Icon className="icon" />
            <span>Products</span>
          </li>{" "}
          <li>
            <BookmarkBorderIcon className="icon" />
            <span>Orders</span>
          </li>{" "}
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>{" "}
          <p className="title"> MAIN</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>{" "}
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>{" "}
          <p className="title"> SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>{" "}
          <li>
            <WebStoriesIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title"> USER</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
