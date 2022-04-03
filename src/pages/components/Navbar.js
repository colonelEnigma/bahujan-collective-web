import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars as Burger, FaTimes as Cross } from "react-icons/fa";
import { IoLogoFirebase as Logo } from "react-icons/io5";

import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const menuOverlay = click ? "menu-pop" : "";

  return (
    <div className="navbar">
      <div className="navbar-container frosted-glass shodow container">
        <Link to="/" className="navbar-logo">
          <Logo className="navbar-icon" />
          baco
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/browse-art" className="nav-link">
            Arts
          </Link>
          <Link to="/submit-art" className="nav-link">
            Submit
          </Link>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </div>
        <div className="menu" onClick={handleClick}>
          {click ? (
            <Cross className="cross menu-icon" />
          ) : (
            <svg
              width="24"
              className="burger menu-icon"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 7C2 6.44772 2.44772 6 3 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H3C2.44772 8 2 7.55228 2 7ZM2 17C2 16.4477 2.44772 16 3 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17Z"
                fill="#202020"
              />
            </svg>

            // <Burger className="burger menu-icon" />
          )}
        </div>
      </div>
      <div className={"menu-overlay frosted-glass shodow " + menuOverlay}>
        <div className="link-container">
          <Link to="/" className="link" onClick={handleClick}>
            Home
          </Link>
          <Link to="/browse-art" className="link" onClick={handleClick}>
            Arts
          </Link>
          <Link to="/submit-art" className="link" onClick={handleClick}>
            Submit
          </Link>
          <Link to="/signup" className="link" onClick={handleClick}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
