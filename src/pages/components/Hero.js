import { Link } from "react-router-dom";
const heroBg = {
  1: {
    backgroundImage:
      "url(https://unsplash.com/photos/CKlHKtCJZKk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgyNTQy&force=true&w=1920)",
  },
  2: {
    backgroundImage:
      "url(https://unsplash.com/photos/333oj7zFsdg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgyNTEw&force=true&w=1920)",
  },
  3: {
    backgroundImage:
      "url(https://unsplash.com/photos/YO8KdpMh0PY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgzMzEx&force=true&w=1920)",
  },
  4: {
    backgroundImage:
      "url(https://unsplash.com/photos/IXYVzgwr2k0/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgzMjYx&force=true&w=1920)",
  },
  5: {
    backgroundImage:
      "url(https://unsplash.com/photos/Ak5c5VTch5E/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgyMzE5&force=true&w=1920)",
  },
  6: {
    backgroundImage:
      "url(https://unsplash.com/photos/jw3xbuelpKM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgzOTcy&force=true&w=1920)",
  },
  7: {
    backgroundImage:
      "url(https://unsplash.com/photos/xG8IQMqMITM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgwODMy&force=true&w=1920)",
  },
  8: {
    backgroundImage:
      "url(https://unsplash.com/photos/0nbHOppXZCE/download?force=true&w=1920)",
  },
  9: {
    backgroundImage:
      "url(https://unsplash.com/photos/tcyW6Im5Uug/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgzNzc4&force=true&w=1920)",
  },
  10: {
    backgroundImage:
      "url(https://unsplash.com/photos/505eectW54k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgxNjI2&force=true&w=1920)",
  },
  11: {
    backgroundImage:
      "url(https://unsplash.com/photos/Jowx9DUhoMM/download?force=true&w=1920)",
  },
  12: {
    backgroundImage:
      "url(https://unsplash.com/photos/Lo6OIm82gTs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgzODQ5&force=true&w=1920)",
  },
  13: {
    backgroundImage:
      "url(https://unsplash.com/photos/ZG4Tz-ivLb8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgzODky&force=true&w=1920)",
  },
  14: {
    backgroundImage:
      "url(https://unsplash.com/photos/IXYVzgwr2k0/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwOTgzMjYx&force=true&w=1920)",
  },
  15: {
    backgroundImage:
      "url(https://unsplash.com/photos/8hFiT80X-6o/download?force=true&w=1920)",
  },
};

const Hero = () => {
  return (
    <div className="hero" style={heroBg[1]}>
      <h1 className="xxl-h1">Ignite 2022</h1>
      <h1 className="xl-h1" style={{ fontSize: "500" }}>
        Writing Workshop
      </h1>
      <p className="p-hero">
        Ignite 2022 is a free progressive four week writing workshop taught by
        Linda Jones, hosted exclusively for the Bahujan community. <br />{" "}
        <b> Note :</b> No prior writing experience needed, however working
        knowledge of the English Language is needed.
      </p>
      <button className="btn-prime shodow" style={{ marginTop: "20px" }}>
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/ignite-2022"
        >
          IGNITE 2022
        </Link>
      </button>
    </div>
  );
};

export default Hero;
