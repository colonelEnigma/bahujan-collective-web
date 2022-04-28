import { contacts } from "../Configs/Contacts/contacts";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="Aboutus-container">
      <div className="grid-container">
        <div className="section">
          <h1>About Us</h1>
          <p>
            Bahujan Collective is a platform to nurture, develop, support,
            showcase and assert Bahujan community through a platform, that also
            doubles as a storefront. <br />
            It is a platform Conceived, Funded, Staffed, and Executed, by
            Bahujan Community and serving the Bahujan community.
          </p>
        </div>
        <div className="section">
          <h1>Purpose and Vision</h1>
          <p>
            Fulfil the need for a unifying platform on which our Bahujan
            Community can celebrate our Assertion and Excellence.We don't think
            ours is the only platform, we see many such Bahujan Platforms
            already in play, and we believe that we can all co-exist and serve
            our community.
            <br />
            Connect community
            <br />
            Offer development opportunities
            <br />
            Showcase work and workmanship with a goal to open international
            markets
          </p>
        </div>
        <div className="section">
          <h1>Team</h1>
          <p>
            We are a group of Bahujan Community members spread across India and
            United States of America.
            <br />
            Our zeal and enthusiasm for this mission is fully embodied in the
            following quote by Babasaheb: <br />
            Connect community
            <p>
              <b>
                “For a successful revolution it is not enough that there is
                discontent. What is required is a profound and thorough
                conviction of the justice, necessity and importance of political
                and social rights.” - B. R. Ambedkar{" "}
              </b>
            </p>
            {/* Please click here to know more about the current team */}
          </p>
        </div>
        <div className="section">
          <h1>Stay in Touch</h1>
          <p>
            {contacts.map((contact, index) => {
              return (
                <span>
                  <a
                    href={contact.url}
                    className="contactLinks"
                    style={contact.url ? {} : { color: "#727272" }}
                  >
                    <contact.icon className=".footer-content-icon" />
                    {contact.channel}
                  </a>
                  <br />
                </span>
              );
            })}
            (include “Grievance” in the subject of your email in case of
            grievances)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
