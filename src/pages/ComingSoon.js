import { useState } from "react";
import "./ComingSoon.css";
import countDown from "./Utils/CountDown";

const ComingSoon = () => {
  const [days, hours, minute, seconds] = countDown();
  console.log(days, hours, minute, seconds);

  const [SecondTrigger, SetSecondTrigger] = useState(false);

  const triggerToggle = () => {
    SetSecondTrigger(!SecondTrigger);
  };

  setInterval(triggerToggle, 1000);

  return (
    <div className="coming-soon">
      <div className="notify-section">
        <h1 className="">Coming soon !</h1>
        <p className="coming-soon-subtext ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          itaque corrupti harum!
        </p>
        <form className="coming-soon-form" action="">
          <button className="notify-btn">Notify Me</button>
          <input
            className="notify-input"
            type="email"
            name="email"
            id="email"
          />
        </form>
      </div>
      <div className="countdown-section">
        <img
          className="countdown-img"
          src="Images/inProgressDevelopment.svg"
          alt="Development in Progress Illustration"
        />
        <div className="countdown">
          <div className="container-day">
            <h3 className="day">{days}</h3>
            <h3>Day</h3>
          </div>
          <div className="container-hour">
            <h3 className="hour">{hours}</h3>
            <h3>Hour</h3>
          </div>
          <div className="container-minute">
            <h3 className="minute">{minute}</h3>
            <h3>Minute</h3>
          </div>
          <div className="container-second">
            <h3 className="second">{seconds}</h3>
            <h3>Second</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
