import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import App from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";
import UserLayout from "./components/user_layout.jsx";
import Admin from "./components/layout_admin.jsx";
import Login from "./components/login.jsx";

function checkLogin() {
  let token = localStorage.getItem("access_token");
  if (token) {
    return redirect("/");
  } else {
    return null;
  }
}

const routers = createBrowserRouter([
  {
    path: "/reactdemologin",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/reactdemologin/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "users",
        element: <h1>User management</h1>,
      },
      {
        path: "products",
        element: <h1>Product management</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers} />
);
