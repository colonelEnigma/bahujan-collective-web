import "./footer.css";
import { contacts } from "../../Configs/Contacts/contacts";

const Footer = () => {
  return (
    <div className="footer">
      <div className="h3 footer-heading">
        <h3>Contact us</h3>
      </div>
      <div className="footer-content">
        {contacts.map((contact) => {
          return (
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.channel}
            >
              <div className="footer-content-item">
                <contact.icon className="footer-content-icon" />
              </div>
            </a>
          );
        })}
      </div>
      <div className="copy-right">
        <p>Copyright © 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
