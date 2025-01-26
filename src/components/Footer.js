import React from "react";
import "../styles/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Wander Plan</div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-text">
          &copy; {new Date().getFullYear()} Wander Plan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
