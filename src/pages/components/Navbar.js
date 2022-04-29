import "./Navbar.css";
import NavLink from "./NavLink";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoFirebase as Logo } from "react-icons/io5";
import { FaBars as Burger, FaTimes as Cross } from "react-icons/fa";

const logos = {
  mobile: "http://35.154.233.93:3001/uploads/1650822846145FaviconUHD.png",
  desktop: "http://35.154.233.93:3001/uploads/1650823209506LogoBH.png",
};

const links = [
  { to: "/", label: "Home" },
  { to: "/ignite-2022", label: "Ignite 2022" },
  { to: "/projects", label: "Projects" },
  { to: "/about-us", label: "About Us" },
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    console.log("clicked");
  };

  const menuOverlay = click ? "menu-pop" : "";

  return (
    <div className="navbar">
      <div className="navbar-container frosted-glass shodow container">
        <Link to="/" className="navbar-logo">
          <img src="/LogoBH.png" className="logoBH" alt="logo" srcset="" />
        </Link>
        <div className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink to={to} label={label} />
          ))}
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
          {links.map(({ to, label }) => (
            <NavLink to={to} label={label} m={true} onClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
