import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink = ({ to, label, m = false, onClick }) => {
  const style = m
    ? {
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        fontSize: "1.3rem",
        fontWeight: "bold",
        color: "var(--color-primary)",
        paddingLeft: "2rem",
      }
    : {};

  return (
    <Link to={to} className="N-link" style={style} onClick={onClick}>
      {label}
    </Link>
  );
};

export default NavLink;
