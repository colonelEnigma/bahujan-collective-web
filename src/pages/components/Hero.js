import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="xxl-h1">Art</h1>
      <h1 className="xxl-h1">Recognition</h1>
      <p className="p-hero">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        necessitatibus sunt, error maxime doloribus impedit officiis assumenda.
        Excepturi adipisci distinctio rerum minima odio minus harum omnis neque
        eveniet fugit. At?
      </p>
      <div className="btn-pair">
        <button className="btn-prime">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="./submit-art"
          >
            SUBMIT YOUR ENTRY
          </Link>
        </button>
        <button className="btn-second">FIND OUT MORE</button>
      </div>
    </div>
  );
};

export default Hero;
