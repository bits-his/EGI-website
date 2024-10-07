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
            <h4>Yazeed Academy</h4>
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
              <NavLink to="/a" title="About">
                About
              </NavLink>
            </li>
            <li>
              <NavDropdown title="Program" id="courses" as={"div"}>
                <NavDropdown.Item as={"div"}>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Pre Nursery
                  </a>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Nursery section
                  </a>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Primary section
                  </a>
                  <a
                    href="#"
                    style={{ color: "var(--link-color)" }}
                    // target="_blank"
                  >
                    Secondary section
                  </a>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/e" title="Event">
                Event
              </NavLink>
            </li>

            <li>
              <NavLink to="/c" title="Blog">
                Blog
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/c" title="Contact">
                Contact
              </NavLink>
            </li>
            <div className="d-flex justify-content-between">
              <a
                href="https://yazeed-academy-app.elscholar.ng/application-form"
                target="_blank"
              >
                <div className="login">
                  <button className="register">Application</button>
                </div>
              </a>
              <a
                href="https://yazeed-academy-app.elscholar.ng/login"
                target="_blank"
              >
                <div className="login">
                  <button className="register">Returning Student</button>
                </div>
              </a>
            </div>
          </ul>
        </nav>
      </div>
      <div className="hamburger">
        <button onClick={handleClick}>{isOpen ? <BiX /> : <IoMenu />}</button>
      </div>
    </header>
  );
}
