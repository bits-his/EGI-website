import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/YMA.png";
import { BiX } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";


export default function Header({ sectionRefs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

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
  console.log(activeSection)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("hello", entry.target )
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Object.values(sectionRefs).forEach((ref) => {
    //   observer.observe(ref.current);
    // });
    Object.keys(sectionRefs).forEach((key) => {
      if (sectionRefs[key].current) {
        console.log(sectionRefs[key].current)
        observer.observe(sectionRefs[key].current);
      }
    });


    return () => {
      observer.disconnect();
    };
  }, [activeSection, sectionRefs]);

  const location = useLocation()
  const navigate = useNavigate()
  return (
    <header className={` ${isSticky ? "isSticky" : "header-main"}`}>
      <div className="menu-block">
        <div className="header-logo">
          <Link to="/" className="inner" title="Logo">
            <img src={logo} alt="logo" />
            <h4>Y M A</h4>
          </Link>
        </div>
        <nav className="nav-links">
          <ul
            className={`navigation ${isOpen ? "open" : ""} ${isSticky ? "whitelink" : ""
              }`}
          >
            <li onClick={
              location.pathname === "/" ? null : () => navigate("/#home") 
            }>
              <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                Home
              </a>
            </li>
            <li onClick={
              location.pathname === "/blog#about" ? null : () => navigate("/#about")
            }>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                About
              </a>
            </li>
            <li onClick={
              location.pathname === "/blog#program" ? null : () => navigate("/#program")
            }>
              <a href="#program" className={activeSection === 'program' ? 'active' : ''}>
                Program
              </a>
            </li>
            <li onClick={
              location.pathname === "/blog#event" ? null : () => navigate("/#event")
            }>
              <a href="#event" className={activeSection === 'event' ? 'active' : ''}>
              Event
              </a>
            </li>
            <li onClick={
              location.pathname === "/blog#program" ? null : () => navigate("/#contact")
            }>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                Contact
              </a>
            </li>

            {/* <li>
              <NavLink to="/c" title="Blog">
                Blog
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/c" title="Contact">
                Contact
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>

      <div className="hamburger">
        <button onClick={handleClick}>{isOpen ? <BiX /> : <IoMenu />}</button>
      </div>
    </header>
  );
}
