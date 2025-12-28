import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass-card">
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span style={{ color: '#ff3333' }}>&lt;</span>
          Bhuvaneshwari
          <span style={{ color: '#ff3333' }}>/&gt;</span>
        </NavLink>

        <div className="mobile-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " active" : "")
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " active" : "")
              }
              onClick={closeMenu}
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " active" : "")
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " active" : "")
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/goodbye"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " active" : "")
              }
              onClick={closeMenu}
            >
              Bye
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
