import React from "react";
import "./navbar.scss";
import { SearchOutlined } from "@mui/icons-material";
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
