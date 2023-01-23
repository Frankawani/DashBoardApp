import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "users",
    element: (
      <div>
        <List />
      </div>
    ),
  },
  {
    path: "users/:userId",
    element: (
      <div>
        <Single />
      </div>
    ),
  },
  {
    path: "users/new",
    element: (
      <div>
        <New />
      </div>
    ),
  },
  {
    path: "products",
    element: (
      <div>
        <List />
      </div>
    ),
  },
  {
    path: "products/:productid",
    element: (
      <div>
        <Single />
      </div>
    ),
  },
  {
    path: "products/new",
    element: (
      <div>
        <New />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
