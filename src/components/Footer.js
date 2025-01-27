import React from "react";
import { Link } from "react-router-dom";
import "../styles/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Wander Plan</div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-text">
          &copy; {new Date().getFullYear()} Wander Plan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
