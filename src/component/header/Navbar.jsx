import React, { useState } from "react";
import styles from "./styles.module.css";
import { NavLink, useLocation, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

let { navbar, NavLinkes, brandName, mobileMenu, mobileNav ,navbarInHome} = styles;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";
  

  return (
  <div className="container">
    <div className="row d-flex justify-content-evenly">
    <div className={`${ !isHome?navbar:navbarInHome} d-flex justify-content-between align-items-center p-3 `}>
      {/* Logo */}
      <div className='ml-auto'>
        <NavLink to="coffo/" className="text-decoration-none text-light">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className={`${NavLinkes} d-none d-md-block `}>
        <ul className="d-flex list-unstyled justify-content-around align-items-center ">
          <li className="px-2 text-center mx-2 bg-danger">
            <NavLink to="/" className="text-decoration-none text-light">
              <h6>Home</h6>
            </NavLink>
          </li>
          <li className="px-2 text-center mx-2">
            <NavLink to="/About" className="text-decoration-none text-light">
              <h6>About</h6>
            </NavLink>
          </li>
          <li className="px-2 text-center mx-2">
            <NavLink to="/Coffees" className="text-decoration-none text-light">
              <h6>Coffees</h6>
            </NavLink>
          </li>
          <li className="px-2 text-center mx-2">
            <NavLink to="/Blog" className="text-decoration-none text-light">
              <h6>Blog</h6>
            </NavLink>
          </li>
          <li className="px-2 text-center mx-2">
            <NavLink to="/contact" className="text-decoration-none text-light">
              <h6>Contact</h6>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Button */}
      <button className="d-md-none text-white bg-transparent border-0" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Mobile Menu */}
      <div className={`${mobileNav} ${isOpen ? mobileMenu : "d-none"}`}>
        <ul className="list-unstyled text-center">
          <li className="py-2">
            <NavLink to="/home" className="text-decoration-none text-light">
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/About" className="text-decoration-none text-light">
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/Coffees" className="text-decoration-none text-light">
              Coffees
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/Blog" className="text-decoration-none text-light">
              Blog
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/contact" className="text-decoration-none text-light">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
      
  </div>
  );
}
