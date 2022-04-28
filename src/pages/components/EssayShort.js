const EssayShort = () => {
  return (
    <div className="essayShort" style={{}}>
      <div className="content-box" style={{}}>
        <h3 className="pre-heading">Coming Soon</h3>
        <h1 className="h1">Essay</h1>
        <h1 className="h1">Writing Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quo
          dicta, recusandae quis unde id dolor cumque distinctio odio numquam
          velit dolorum.
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
