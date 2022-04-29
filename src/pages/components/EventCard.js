// import { useState } from "react";
import { BAHUJAN } from "../Utils/constants";
import "./EventCard.css";
const bgColor = {
  future: "hsla(213, 97%, 87%, 1)",
  current: " hsla(141, 79%, 85%, 1)",
  past: " hsla(141, 79%, 85%, 1)",
};

const cssColorBlk = { color: "black" };

const EventCard = ({ userType, event }) => {
  console.log(`status>> ${event.status} ${bgColor[event.status]}`);
  return (
    <div
      className="event-card"
      style={{ backgroundColor: bgColor[event.status] }}
    >
      <div className="event-info">
        <div className="event-card-content">
          <h1>{event.title}</h1>
          <p>
            <b style={{ cssColorBlk }}>{event.date}</b>
          </p>
          <p>
            <b>{event.time}</b>
          </p>
        </div>
        <ul className="event-description">
          {event.description.map((desc, index) => {
            return (
              <li key={index}>
                <p>{desc}</p>
              </li>
            );
          })}
        </ul>
        <div className="event-card-action">
          {!event.RecoLink && event.RegLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={event.RegLink}
              style={
                userType === BAHUJAN
                  ? {}
                  : {
                      pointerEvents: "none",
                      boxShadow: "none",
                      backgroundColor: "gray",
                    }
              }
            >
              <span>
                {console.log(userType)}
                {userType === BAHUJAN ? "Register" : "Bahujan Only"}
              </span>
            </a>
          )}
          {event.RecoLink && event.RegLink && (
            <a href={event.RecoLink} target="_blank" rel="noopener noreferrer">
              <span>Request Recording</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
