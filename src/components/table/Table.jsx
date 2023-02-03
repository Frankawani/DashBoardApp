import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function List() {
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

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell"></TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
