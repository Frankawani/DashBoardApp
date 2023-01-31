import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function Table() {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://unsplash.com/photos/K84vnnzxmTQ",
      customer: "John Doe",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Appoved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://unsplash.com/photos/Ba1eGcAFj5w",
      customer: "Micheal Doe",
      date: "1 March",
      amount: 785,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342352,
      product: "Redragon S101",
      img: "https://unsplash.com/photos/K84vnnzxmTQ",
      customer: "John Doe",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://unsplash.com/photos/AGr13YPOPqw",
      customer: "Jane Doe",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Appoved",
    },
    {
      id: 234355,
      product: "ASUS ROG Strix",
      img: "https://unsplash.com/photos/2EGNqazbAMk",
      customer: "Carol Doe",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "pending",
    },
  ];

  return <div className="table">Table ooo</div>;
}

export default Table;
