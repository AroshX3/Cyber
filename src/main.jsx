// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import Layout from "./assets/Layout";
import App from "./App";

import productdetail from "./assets/Components/Product_detail/productdetail";
import Products_pages from "./assets/Components/Products_page/Products_pages";
import Shoppingcart from "./assets/Components/ShoppingCart/Shoppingcart";
import Step1 from "./assets/Components/Step1/Step1";
import Step2 from "./assets/Components/Step2/Step2";
import Step3 from "./assets/Components/Step3/Step3";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: App },
      { path: "productpage", Component: Products_pages },
      { path: "productdetail/:id", Component: productdetail },
      { path: "shopcart", Component: Shoppingcart },
      { path: "step1", Component: Step1 },
      { path: "step2", Component: Step2 },
      { path: "step3", Component: Step3 },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
