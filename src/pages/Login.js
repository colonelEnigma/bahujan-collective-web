import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="desktop"> </div>
      <div className="art-form" style={{ height: "100vh" }}>
        <img
          className="baco-icon-large"
          src="Icons/logo/LogoBH.png"
          alt="Bahujan Collective Logo"
        />
        <input
          className="input-title form-input"
          type="text"
          placeholder="Email"
          name="ArtTitle"
        />
        <input
          className="input-title form-input"
          type="password"
          placeholder="Password"
          name="ArtTitle"
        />
        <div className="desk-action">
          <button className="btn-prime login-btn"> Login</button>
          <p>
            Don't have account ? <Link to={"/signup"}>SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
