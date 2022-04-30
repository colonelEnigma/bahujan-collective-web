import { useNavigate } from "react-router-dom";
import TextCard from "./components/TextCard";
import "./Projects.css";
const tCardStyle = { width: "100%" };
const xlH1 = {
  fontFamily: "var(--font-display)",
  fontSize: "3rem",
  color: "var(--color-primary)",
  marginLeft: "10px",
  margin: "10px 0 10px 10px",
};

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      <div className="anual-projects">
        <h1 style={xlH1}>2022 Projects</h1>
        <div className="projects-grid">
          <TextCard style={tCardStyle}>
            <h1
              onClick={() => {
                navigate("/ignite-2022");
              }}
              style={{ cursor: "pointer" }}
            >
              Ignite 2022
            </h1>
            <p
              onClick={() => {
                navigate("/ignite-2022");
              }}
              style={{ cursor: "pointer" }}
            >
              Ignite 2022 is a progressive four week writing workshop, hosted
              exclusively for the Bahujan community. In a series of four
              progressive classes, held on the below dates, We will help our
              community writers tap into and express the powerful stories that
              each of us have within ourselves and which need to be told and
              expressed, surely for each of our own sakes but also as a
              collective narrative.
            </p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1>Bahujan Voices 2022 : Essay and Poetry Anthology</h1>
            <p>
              Immediately after concluding Ignite 2022 Writing Course we would
              like to invite you to submit your essays and poetry entries to our
              Submission project.
            </p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1>Bahujan Canvas 2022: Art Anthology</h1>
            <p>
              Art and Artist Anthology (Additional Details will be published
              soon)
            </p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1 style={{ marginBottom: "10px" }}>
              Bahujan-Collective Shop
              <span
                style={{
                  fontSize: "1.rem",
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "yellow",
                  borderRadius: "10px",
                }}
              >
                Coming Soon
              </span>
            </h1>
            <p>
              Shop front that will feature products created, produced, and
              collaborated on by Bahujan artists, writers, artisans, and
              developers, working in a collective, profit-sharing mode.
            </p>
          </TextCard>
        </div>
      </div>
      <div className="anual-projects">
        <h1 style={xlH1}>2023 and Beyond</h1>
        <div className="projects-grid">
          <TextCard style={tCardStyle}>
            <h1>Babasaheb Ambedkar Writings and Speeches Abridged Volumes</h1>
            <p>Community Sourced Project – kickoff in Spring 2023</p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1>Bahujan Discovery 2023</h1>
            <p>
              Similar to Bahujan Voices 2022 – but each artist and/or writer
              brings along with them another participant who fits a specific
              criterion and they apply and submit as a pair.
            </p>
          </TextCard>
        </div>
      </div>
      <div className="anual-projects">
        <h1 style={xlH1}>Past Projects</h1>
        <div className="projects-grid">
          <TextCard style={tCardStyle}>
            <h1>Ignite 2021</h1>
            <p>Writing workshop</p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1>Audiobooks</h1>
            <p>
              <span
                onClick={() => {
                  navigate("/audiobook/AnUndelivedSpeech");
                }}
                style={{ cursor: "pointer" }}
              >
                <b>An Undelivered Speech:</b> Annhilation of Caste and The
                Paper: Castes in India​.
              </span>
              <br />
              <span
                onClick={() => {
                  navigate("/audiobook/TheEssenceOfBuddhism");
                }}
                style={{ cursor: "pointer" }}
              >
                <b>The Essence of Buddhism</b>
              </span>
            </p>
          </TextCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
