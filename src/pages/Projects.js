import TextCard from "./components/TextCard";
import "./Projects.css";
const tCardStyle = { width: "100%" };
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="anual-projects">
        <h1>2022 Projects</h1>
        <div className="projects-grid">
          <TextCard style={tCardStyle}>
            <h1>Ignite 22</h1>
            <p>Writing Workshop</p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1>Bahujan Voices 2022</h1>
            <p>Essay and Poetry Anthology</p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1>Bahujan Art 2022</h1>
            <p>
              Art and Artist Anthology (Additional Details will be published
              soon)
            </p>
          </TextCard>
        </div>
      </div>
      <div className="anual-projects">
        <h1>
          Bahujan-Collective Shop:
          <span
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              backgroundColor: "yellow",
              borderRadius: "10px",
            }}
          >
            Coming Soon
          </span>
        </h1>
        <div className="projects-grid">
          <TextCard style={tCardStyle}>
            <h1>Ignite 22</h1>
            <p>Writing Workshop</p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1>Bahujan Voices 2022</h1>
            <p>Essay and Poetry Anthology</p>
          </TextCard>
          <TextCard style={tCardStyle}>
            <h1>Bahujan Art 2022</h1>
            <p>
              Art and Artist Anthology (Additional Details will be published
              soon)
            </p>
          </TextCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
