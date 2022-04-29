import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink = ({ to, label, m = false, onClick }) => {
  return (
    <Link to={to} className={`N-link ${m ? "N-link-m" : ""}`} onClick={onClick}>
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
