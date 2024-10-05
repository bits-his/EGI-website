import React from "react";
import { useRoutes } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import AboutUs from "./Pages/About/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Courses";
import Event from "./Pages/Event/Event";
import Home from "./Pages/Home/Home";

export default function AppNavigation() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LogIn />,
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
  ]);
  return routes;
}
