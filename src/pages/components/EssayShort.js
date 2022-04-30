const EssayShort = () => {
  return (
    <div className="essayShort" style={{}}>
      <div className="content-box" style={{}}>
        <h3 className="pre-heading">Coming Soon</h3>
        <h1 className="h1">Bahujan</h1>
        <h1 className="h1">Voices 2022</h1>
        <p>
          An anthology of personal and narrative essays and poetry from our
          community sharing who they are and what they would like the world to
          know about them. Honest authentic expression!
        </p>

        <button className="btn-second margin-top-2">Coming Soon</button>
      </div>
      <div className="illus-box" style={{ position: "relative" }}>
        <div>
          <img
            src="Images/writing.svg"
            alt="Illustration for essay writing section"
          />
        </div>
      </div>
    </div>
  );
};

export default EssayShort;
