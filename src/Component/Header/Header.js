import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { BiX } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={` ${isSticky ? "isSticky" : "header-main"}`}>
      <div className="menu-block">
        <div className="header-logo">
          <Link to="/" className="inner" title="Logo">
            <img src={logo} alt="logo" />
            <h4>EGI</h4>
          </Link>
        </div>
        <nav className="nav-links">
          <ul
            className={`navigation ${isOpen ? "open" : ""} ${
              isSticky ? "whitelink" : ""
            }`}
          >
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/about" title="About">
                About
              </NavLink>
            </li>
            <li>
              <NavDropdown title="Courses" id="courses" as={"div"}>
                <NavDropdown.Item as={"div"}>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Foundamental Principle of Agricbusiness
                  </a>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Farm Operations Management
                  </a>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Vegetable Farm Enterprises
                  </a>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Livestock Farm Enterprises
                  </a>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Farm Products Costing
                  </a>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Farm Stock Management
                  </a>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/event" title="Event">
                Event
              </NavLink>
            </li>

            <li>
              <NavDropdown title="Blog" id="blog" as={"div"}>
                <NavDropdown.Item as={"div"} style={{ color: "black" }}>
                  <NavLink
                    to="/blogpost"
                    title="Blog Post"
                    style={{ color: "var(--link-color)" }}
                  >
                    Blog Post
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/contact" title="Contact">
                Contact
              </NavLink>
            </li>
            <Link to={"/register"}>
              <div className="login">
                <button className="register">Register</button>
              </div>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="hamburger">
        <button onClick={handleClick}>{isOpen ? <BiX /> : <IoMenu />}</button>
      </div>
    </header>
  );
}
