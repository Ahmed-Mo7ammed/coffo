import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Layout from "./component/layout/Layout";
import Blog from "./component/blog/Blog";
import Coffees from "./component/coffees/Coffees";
import Contact from "./component/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/cofo",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "coffees", element: <Coffees /> },
      { path: "contact", element: <Contact /> },
      { path: "Home", element: <Home /> }, 
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
