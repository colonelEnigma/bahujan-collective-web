import { useEffect, useReducer, useRef, useState } from "react";
import { ALLY, BAHUJAN } from "../Utils/constants";
import "./TermsModal.css";

const TermsModal = ({ setUser }) => {
  const [userType, setUserType] = useState("");
  const bahujancheck = useRef(null);
  const allycheck = useRef(null);

  const handleUserType = (type, e) => {
    // user can be bahujan or ally

    if (userType === type) {
      setUserType("");
      bahujancheck.current.checked = false;
      allycheck.current.checked = false;
    } else {
      if (type === ALLY) {
        bahujancheck.current.checked = false;
        allycheck.current.checked = true;
      } else if (type === BAHUJAN) {
        bahujancheck.current.checked = true;
        allycheck.current.checked = false;
      }
      setUserType(type);
    }
  };

  const handleEnter = () => {
    setUser(userType);
  };

  useEffect(() => {
    console.log("userType " + userType);
  }, [userType]);
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h3>Disclaimer – Please Read</h3>

        <p className="font-sm">
          This platform currently only has projects for participation by Bahujan
          Community Members.
        </p>
        <p className="font-sm">
          By Bahujan Community Members - we mean that you identify as being from
          one of the oppressed caste communities broadly identified as SC, ST,
          OBC, or are from one of these oppressed caste communities but you or
          your ancestors have since converted and are part of other religious
          minorities.
        </p>
        <p className="font-sm">
          This also includes Mandal Excluded OBC with Ambedkarite ideology, who
          are sometimes referred to as Dominant Castes (but are not from the
          Brahmin, Kshatriya or Vaishya Castes).
        </p>
        <p className="font-sm">
          Bahujan Community Members can be of any nationality across the Indian
          Subcontinent and maybe residing in any part of the world. You are all
          family and you are welcome to register and participate.
        </p>
        <p className="font-sm">
          Finally, we trust you when you say that you identify as
          <br />
        </p>
        <p className="font-sm">
          *Please check the appropriate box to proceed.
          <br />
        </p>
        <div className="check-box " style={{ justifyContent: "flex-start" }}>
          <input
            className="checkbox-input"
            type="checkbox"
            placeholder="Confirm Password"
            name="Confirm Password"
            id="bahujan"
            onChange={(e) => handleUserType(BAHUJAN, e)}
            required
            ref={bahujancheck}
          />
          <label htmlFor="bahujan" className="modal-checkbox-label">
            I identify as a <b>Bahujan Community Member</b>.
          </label>
        </div>
        <div className="check-box" style={{ justifyContent: "flex-start" }}>
          <input
            className="checkbox-input"
            type="checkbox"
            placeholder="Confirm Password"
            name="Confirm Password"
            id="ally"
            ref={allycheck}
            onChange={(e) => handleUserType(ALLY, e)}
            required
          />
          <label htmlFor="ally" className="modal-checkbox-label">
            I identify as an <b>Ally</b>.
          </label>
        </div>
        <p className="font-sm ">
          *Allies can browse but many links will not be live for you and your
          participation will be limited.
        </p>
        <button className="btn-modal shodow" style={{}} onClick={handleEnter}>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
