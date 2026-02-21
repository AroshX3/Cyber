// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import Layout from "./assets/Layout";
import App from "./App";

import productdetail from "./assets/Components/Product_detail/productdetail";
import Products_pages from "./assets/Components/Products_page/Products_pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: App },
      { path: "productpage", Component: Products_pages },
      { path: "productdetail", Component: productdetail },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
