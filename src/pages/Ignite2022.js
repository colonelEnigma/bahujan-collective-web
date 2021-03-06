import EventCard from "./components/EventCard";
import TextCard from "./components/TextCard";
import "./Ignite2022.css";

// Todo: time string to time object and to local timing and changing comopnent according to time

const IgniteEvents = [
  {
    title: "Session #1",
    date: "Sunday, May 8th ",
    time: "9AM to 11AM (IST)",
    status: "past",
    RegLink: "",
    RecoLink: "",
    description: [
      "Workshop overview. Warm up activities.",
      "Introduction to personal essay. In session writing.",
      "Homework: Personal essay",
    ],
  },
  {
    title: "Session #2",
    date: "Sunday, May 15th ",
    time: "9AM to 11AM(IST)",
    status: "past",
    RegLink: "",
    RecoLink: "",
    description: [
      "Personal essay and Intro to narrative essay.",
      "Discussion of Bahujan and African American literary voices. In session writing.",
      "Homework: Narrative essay assignment.",
      // <span>
      //   <b>Note : </b> New applicants will be provided with recording of prior
      //   session(s).
      // </span>,
    ],
  },
  {
    title: "Session #3",
    date: "Sunday, May 22th ",
    time: "9AM to 11AM(IST)",
    status: "past",
    RegLink: "",
    RecoLink: "",
    description: [
      "Fundamentals of standard essay.",
      "Understanding the basics.",
      "Homework: Review and revise Personal Essay",
      // <span>
      //   <b>Note : </b> New applicants will be provided with recording of prior
      //   session(s).
      // </span>,
    ],
  },
  {
    title: "Session #4",
    date: "Sunday, May 29th ",
    time: "9AM to 11AM(IST)",
    status: "past",
    RegLink: "",
    RecoLink: "",
    description: [
      "Basic, personal and narrative essay review.",
      "Developing and expanding with elements of story.",

      "In session writing and revision feedback.",
      "Homework: Continue working on personal essay",
      // <span>
      //   <b>Note : </b> New applicants will be provided with recording of prior
      //   session(s).
      // </span>,
    ],
  },
  {
    title: "Session #5",
    date: "Sunday, June 5th",
    time: "9AM to 11AM(IST)",
    status: "current",
    RegLink:
      "https://www.eventbrite.com/e/-2022-session-5-poetic-expressions-tickets-352124894037",
    RecoLink: "",
    description: [
      "Poetic expressions.",
      "Poetry styles: Pantoum and life reflection.",
      "Homework: Poetry one in each style.",

      <span>
        <b>Note : </b> New applicants will be provided with recording of prior
        session(s).
      </span>,
    ],
  },
];

const Ignite2022 = ({ userType }) => {
  return (
    <div className="ignite-container">
      <div className="ignite-heading">
        <h1>Ignite 2022</h1>
        <p>Four Week Free Progressive Writing Workshop.</p>
      </div>
      <div className="ignite-content">
        <div className="ignite-content-left">
          <TextCard>
            <h1>About</h1>
            <p>
              Ignite 2022 is a progressive four week writing workshop taught by
              <a
                href="http://thewritingdoula.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b> Linda Jones</b>
              </a>
              , hosted exclusively for the Bahujan community.
              <br />
              In a series of four progressive classes, held on the below dates,
              Linda will help our community writers tap into and express the
              powerful stories that each of us have within ourselves and which
              need to be told and expressed, surely for each of our own sakes
              but also as a collective narrative.
              <br />
              <br />
              <b>Sundays:</b> May 8th, 15th, 22nd, and 29th (9 am to 11 am) -
              All dates and times in IST
              <br />
              <br />
              Essays and Poetry developed over this course and/or outside this
              course can be submitted for consideration to be part of{" "}
              <b>Bahujan Voices 2022: Essay and Poetry Anthology</b>
              <br />
              <br />
              <b>Note:</b> No prior writing experience is required. However,
              working knowledge of English is necessary. <br />
            </p>
          </TextCard>
          <TextCard style={{ padding: "25px 20px" }}>
            <h1 style={{ marginBottom: "20px" }}>Registration</h1>
            <div className="session-grid">
              {IgniteEvents.map((event, index) => {
                return <EventCard event={event} userType={userType} />;
              })}
            </div>
          </TextCard>
          <TextCard>
            <h1>Note</h1>
            <p>
              Please use the links on the right to register for each class as
              and when the registration link is active.These links may also be
              used to request for a video recording of the class if you weren???t
              able to attend the same.
              <br />
              <br />
              <b>
                While it is a four-week series, we still need participants to
                register for each class individually.
              </b>
              <br />
              <br />
              <b>Zoom Attendance :</b> 40 Students <br />
              These seat have been set up to ensure diversity and representation
              within the Bahujan Community, so please review the options that
              are available and pick the one that best intersects with who you
              identify as.Please pick the General Bahujan Category option only
              when you can't register under any of the other special
              <br />
              <br /> If all the Zoom related categories are full please select
              YouTube Live Category
              <br />
              <br /> <b>YouTube Live:</b> 50 Students
              <br />
              We will have a dedicated host and modrator intracting with YouTube
              Live Attendees so rest assured we'll do everything we can to make
              you feel like you'rr part of the class and any questions asked on
              YouTube Live will be posed to the coach, Linda to answer.
            </p>
          </TextCard>
        </div>
      </div>
    </div>
  );
};

export default Ignite2022;
