import React, { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        {/* Brand always visible */}
        {/* Brand with route to homepage */}
        <Link to="/" className="brand fs-2 me-3">
          imgur
        </Link>
        {/* Hamburger for mobile */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* LEFT SECTION (desktop only) */}
        <div className="left-section">
          <button className="nav-button">
            <img
              src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.da483e9d9559c3b4e912.svg"
              alt="New Post"
            />
            <span>New Post</span>
          </button>
          <button className="nav-button orange">
            <img
              src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-meme.2aa65f808a1476b35608.svg"
              alt="Make Meme"
            />
            <span>Make Meme</span>
          </button>
        </div>

        {/* CENTER SECTION (desktop only) */}
        <div className="center-section">
          <div className="search-box">
            <input type="text" placeholder="Search for meme, funny..." />
          </div>
        </div>

        {/* RIGHT SECTION (desktop only) */}
        <div className="right-section">
          <div className="bell-icon">🔔</div>
          <div className="user-info">
            <div className="icon">A</div>
            <span>abhijitchanda...</span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <button className="nav-button">
            <img
              src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.da483e9d9559c3b4e912.svg"
              alt="New Post"
            />
            <span>New Post</span>
          </button>
          <div className="search-box">
            <input type="text" placeholder="Search for meme, funny..." />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
