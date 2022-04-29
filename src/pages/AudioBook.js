import { AudioBook_Channels as channels } from "../Configs/AudioBook/Channels";

import "./AudioBook.css";
const AudioBook = ({ title, coverUrl }) => {
  const Circle = ({ state = false }) => {
    return (
      <span
        className="circle"
        style={{
          display: "inline-block",
          borderRadius: "50%",
          backgroundColor: `${state ? "green" : "red"}`,
          height: "1rem",
          width: "1rem",
        }}
      ></span>
    );
  };

  return (
    <div className="audiobook-container">
      <div className="ab-flex">
        <div className="ab-left">
          <div className="ab-cover">
            <img src={coverUrl} alt={`${"book title"} cover`} srcset="" />
          </div>
        </div>
        <div className="ab-right">
          <div className="ab-title">
            <div className="ab-title-center">
              <h1>{title}</h1>
              <h2>Buy or request this book from retailers listed below!</h2>
            </div>
            <div className="distributors-desc">
              <h1>Distributors</h1>
              <p>
                <b>Note: </b> Please be Aware that if your audiobook has been
                distributed to any of the retailers below, it may take some time
                to appear on their platforms, Check reatiler websites to see if
                your audiobook is availabe. Currently retailers do not notify
                us...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="audiobook-grid">
        <div className="availability">
          <span>
            <Circle state={true} />
            Distributed
          </span>
          <span>
            <Circle state={false} />
            Pending Distribution
          </span>
        </div>
        <div className="ab-channel-gird">
          {channels.map((channel) => {
            return (
              <div className="channel">
                <Circle state={channel.state} />
                <span>{channel.channle}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AudioBook;
