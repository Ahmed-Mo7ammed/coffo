import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import styles from "./styles.module.css";

let { navbar, NavLinkes, mobileMenu, mobileNav, navbarInHome } = styles;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/coffo" || location.pathname === "/coffo/home";

  return (
    <div className="container">
      <div className="row d-flex justify-content-evenly">
        <div className={`${!isHome ? navbar : navbarInHome} d-flex justify-content-between align-items-center p-3`}>
          
          {/* Logo */}
          <div>
            <NavLink to="/coffo" className="text-decoration-none text-light">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className={`${NavLinkes} d-none d-md-block`}>
            <ul className="d-flex list-unstyled justify-content-around align-items-center">
              {["Home", "About", "Coffees", "Blog", "Contact"].map((item) => (
                <li key={item} className="px-2 text-center mx-2">
                  <NavLink to={`/coffo/${item.toLowerCase()}`} className="text-decoration-none text-light">
                    <h6>{item}</h6>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Menu Button */}
          <button className="d-md-none text-white bg-transparent border-0" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={`${mobileNav} ${mobileMenu}`}>
              <ul className="list-unstyled text-center">
                {["Home", "About", "Coffees", "Blog", "Contact"].map((item) => (
                  <li key={item} className="py-2">
                    <NavLink to={`/coffo/${item.toLowerCase()}`} className="text-decoration-none text-light" onClick={() => setIsOpen(false)}>
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
