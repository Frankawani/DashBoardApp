import { KeyboardArrowUp, Person2Outlined } from "@mui/icons-material";
import React from "react";
import "./widget.scss";
function Widget({ type }) {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <Person2Outlined className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="COUNTER">213213</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          20 %{" "}
        </div>
        <Person2Outlined className="icon" />
      </div>
    </div>
  );
}

export default Widget;
