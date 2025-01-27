import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/_navbar.scss";

const Navbar = ({ authenticated, username, onLogout }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">Wander Plan</div>
      <div className={`menu-container ${menuActive ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuActive(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuActive(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuActive(false)}>Contact</Link>
        {authenticated ? (
          <>
            <span className="username">Hello, {username}</span>
            <button
              className="logout-btn"
              onClick={() => {
                onLogout();
                setMenuActive(false);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" onClick={() => setMenuActive(false)}>Sign In</Link>
            <Link to="/signup" onClick={() => setMenuActive(false)}>Sign Up</Link>
          </>
        )}
      </div>
      <div
        className={`hamburger ${menuActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
