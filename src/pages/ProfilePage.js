import "./signup.css";
import { AiOutlineForm, AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProfilePage = () => {
  const [gender, setGender] = useState("Choose Gender");
  const [fileurl, setFileurl] = useState("");
  const [file, setFile] = useState("");

  const handleFile = (e) => {
    setFileurl(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="login">
      <div
        className=" art-selected "
        style={file ? { backgroundImage: `url("${fileurl}")` } : {}}
      >
        <div className="pick-file-div align-file-picker">
          <input
            type="file"
            id="file-input"
            className="file"
            onChange={handleFile}
          />
          <label
            htmlFor="file-input"
            className="file-icon-container align-file-picker-icon"
          >
            <AiOutlineForm className="icon-file" />
          </label>
        </div>
      </div>
      <div className="art-form">
        <input
          className="form-input first-name "
          type="text"
          placeholder="Name"
          name="ArtTitle"
        />

        <textarea
          className="input-bio form-input"
          type="text"
          placeholder="Bio"
          name="ArtDescription"
        />
        <div className="category-container">
          <div className="category-section form-input">
            <div>{gender}</div>
            <AiOutlineArrowDown className="category-icon" />
          </div>

          <select
            className="input-category "
            type="text"
            id="category"
            placeholder="Add Art Title"
            name="ArtTitle"
            onChange={handleGender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
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

export default ProfilePage;
