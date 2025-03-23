import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // corrected import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container py-2">
        <div className="footer-bottom">&copy; 2025 Imgur, Inc</div>
        <div className="footer-links">
          <Link to="#">About</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Rules</Link>
          <Link to="#">Help</Link>
          <Link to="#">Emerald</Link>
          <Link to="#">Wellness</Link>
          <Link to="#">CCPA</Link>
          <Link to="#">EU DSA</Link>
          <Link to="#">Trending</Link>
        </div>
        <div className="footer-right">
          <Link to="#" className="get-app-btn">
            Get the App
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
