import "./signup.css";
import usePasswordToggle from "./Utils/usePasswordToggle";
import {
  AiOutlineForm,
  AiOutlineArrowDown,
  // AiOutlineEye,
  // AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
// set correct fields

const apiTargate = {
  base: "http://35.154.233.93:3001",
  UploadImage: "/upload/profile",
};
const FieldOptions = {
  artist: "optional",
  writer: "optional",
  username: "ness",
  Email: "",
  Gender: [
    "",
    "Man",
    "Woman",
    "Transgender",
    "Non-Binary/non-conforming",
    "Prefer not to respond",
  ],
  CasteLocation: [
    "",
    "SC",
    "ST",
    "NT",
    "OBC",
    "DNT",
    "if you are of mixed-caste please select one which you most identify with",
  ],
  Religion: [
    "",
    "Atheist",
    "Buddhist",
    "Muslim",
    "Sikh",
    "Christian",
    "Hindu",
    "Other",
    "Prefer not to respond",
  ],
};

const SignUp = () => {
  const [fileurl, setFileurl] = useState("");
  const [file, setFile] = useState("");

  const [icon, inputType] = usePasswordToggle();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    gender: "",
    caste: "",
    religion: "",
    artist: false,
    writer: false,
    photo: "",
  });
  const handleFile = (e) => {
    setFileurl(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    let formdata = new FormData();
    formdata.append("photo", e.target.files[0]);
    const requestOptions = {
      method: "POST",
      body: formdata,
    };
    fetch(apiTargate.base + apiTargate.UploadImage, requestOptions).then(
      (response) => {
        response.json().then((data) => {
          setUserData({ ...userData, photo: apiTargate.base + data.path });
        });
      }
    );
  };

  const handleFromData = (e) => {
    console.log(<icon />);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(userData);
  };

  return (
    <div className="login">
      <div
        className=" art-selected "
        style={file ? { backgroundImage: `url("${fileurl}")` } : {}}
      >
        <div className=" file-pic-btn-su">
          <input
            type="file"
            id="file-input"
            className="file"
            onChange={handleFile}
          />
          <label htmlFor="file-input" className=" align-file-picker-icon">
            <AiOutlineForm className="icon-file" />
          </label>
        </div>
      </div>
      <div className="art-form" style={{ paddingTop: "100px" }}>
        <input
          className="form-input first-name "
          type="text"
          placeholder="Name"
          name="name"
          value={userData.name}
          onChange={handleFromData}
          required
        />

        <input
          className="form-input "
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleFromData}
          required
        />

        <input
          className="form-input "
          type="text"
          placeholder="Username"
          name="username"
          value={userData.username}
          onChange={handleFromData}
          required
        />

        <div className="category-container">
          <div className="category-section form-input">
            <div>{userData.religion ? userData.religion : "Religion"}</div>
            <AiOutlineArrowDown className="category-icon" />
          </div>
          <select
            className="input-category "
            type="text"
            id="category"
            placeholder="Add Art Title"
            name="religion"
            value={userData.religion}
            onChange={handleFromData}
            required
          >
            {FieldOptions.Religion.map((op) => {
              return (
                <option key={op} value={op}>
                  {op}
                </option>
              );
            })}
          </select>
        </div>

        <div className="category-container">
          <div className="category-section form-input">
            <div>{userData.gender ? userData.gender : "Gender"}</div>
            <AiOutlineArrowDown className="category-icon" />
          </div>

          <select
            className="input-category "
            type="text"
            id="category"
            placeholder="Add Art Title"
            name="gender"
            value={userData.gender}
            onChange={handleFromData}
            required
          >
            {FieldOptions.Gender.map((op) => {
              return (
                <option key={op} value={op}>
                  {op}
                </option>
              );
            })}
          </select>
        </div>

        <div className="category-container">
          <div className="category-section form-input">
            <div>{userData.caste ? userData.caste : "Caste Location"}</div>
            <AiOutlineArrowDown className="category-icon" />
          </div>

          <select
            className="input-category "
            type="text"
            id="category"
            placeholder="Caste"
            name="caste"
            value={userData.caste}
            onChange={handleFromData}
            required
          >
            {FieldOptions.CasteLocation.map((op) => {
              return (
                <option key={op} value={op}>
                  {op}
                </option>
              );
            })}
          </select>
        </div>
        <div className="password-wrapper">
          <input
            style={{ width: "100%" }}
            className="input-title form-input"
            type={inputType}
            placeholder="Password"
            name="password"
            required
          />
          {icon}
        </div>

        <input
          className="input-title form-input"
          type={inputType}
          placeholder="Confirm Password"
          name="Confirm Password"
          required
        />

        <div className="check-box  ">
          <input
            className="checkbox-input"
            type="checkbox"
            name="artist"
            id="artist"
            onChange={(e) => {
              setUserData({ ...userData, artist: e.target.checked });
            }}
            required
          />
          <label htmlFor="artist" className="checkbox-label-d">
            Artist
          </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="writer"
            id="writer"
            onChange={(e) => {
              setUserData({ ...userData, writer: e.target.checked });
              console.log("artist " + userData.writer);
            }}
            required
          />
          <label htmlFor="writer" className="checkbox-label-d">
            Writer
          </label>
        </div>
        <div className="check-box ">
          <input
            className="checkbox-input"
            type="checkbox"
            placeholder="Confirm Password"
            name="Confirm Password"
            id="declaration"
            required
          />
          <label htmlFor="declaration" className="checkbox-label">
            i have read and agree to the i have read and agree to the
          </label>
        </div>

        <div className="desk-action">
          <button className="btn-prime login-btn" onClick={handleSubmit}>
            SignUp
          </button>
          <p>
            already have an account ? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
