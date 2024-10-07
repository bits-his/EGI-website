import React from "react";
import { useRoutes } from "react-router-dom";
import AboutUs from "./Pages/About/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Courses";
import Event from "./Pages/Event/Event";
import Home from "./Pages/Home/Home";
import Register from "./Pages/LogIn/Register";

export default function AppNavigation() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/event",
      element: <Event />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return routes;
}
