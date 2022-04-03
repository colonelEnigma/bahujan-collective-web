import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="h3 footer-heading">
        <h3>Contact us</h3>
      </div>
      <div className="footer-content">
        <div className="footer-content-item">
          <AiOutlineMail className="footer-content-icon" />
        </div>
        <div className="footer-content-item">
          <FiTwitter className="footer-content-icon" />
        </div>
        <div className="footer-content-item">
          <AiOutlineInstagram className="footer-content-icon" />
        </div>
        <div className="footer-content-item">
          <FiFacebook className="footer-content-icon" />
        </div>
        <div className="footer-content-item">
          <AiOutlineYoutube className="footer-content-icon" />
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright © 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
