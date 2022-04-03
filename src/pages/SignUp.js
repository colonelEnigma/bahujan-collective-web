import "./signup.css";
import { AiOutlineForm, AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="login">
      <div className=" art-selected ">
        <div className="pick-file-div align-file-picker">
          <input type="file" id="file-input" className="file " />
          <label
            htmlFor="file-input"
            className="file-icon-container align-file-picker-icon"
          >
            <AiOutlineForm className="icon-file" />
          </label>
        </div>
      </div>
      <div className="art-form">
        <div className="form-input signup-name">
          <input
            className="first-name "
            type="text"
            placeholder="First Name"
            name="ArtTitle"
          />
          <input
            className="last-name "
            type="text"
            placeholder="Last Name"
            name="ArtTitle"
          />
        </div>

        <textarea
          className="input-bio form-input"
          type="text"
          placeholder="Bio"
          name="ArtDescription"
        />
        <div className="category-container">
          <div className="category-section form-input">
            <div>Gender</div>
            <AiOutlineArrowDown className="category-icon" />
          </div>

          <select
            className="input-category "
            type="text"
            id="category"
            placeholder="Add Art Title"
            name="ArtTitle"
          >
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Non-Binary</option>
          </select>
        </div>
        <input
          className="input-title form-input"
          type="text"
          placeholder="Education/Work"
          name="ArtTitle"
        />
        <input
          className="input-title form-input"
          type="password"
          placeholder="Password"
          name="ArtTitle"
        />
        <input
          className="input-title form-input"
          type="password"
          placeholder="Confirm Password"
          name="ArtTitle"
        />
        <div className="desk-action">
          <button className="btn-prime login-btn">SignUp</button>
          <p>
            already have an account ? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
