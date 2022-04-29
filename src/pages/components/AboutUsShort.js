import { useNavigate } from "react-router-dom";

const AboutUsShort = () => {
  const navigate = useNavigate();
  return (
    <section className="about-us-short">
      <h1 className="h1">About us</h1>
      <h2 className="h2">Who we are</h2>
      <p>
        Bahujan Collective is a platform to nurture, develop, support, showcase
        and assert Bahujan community through a platform, that also doubles as a
        storefront
      </p>
      <h2 className="h2">Aim of the Platform</h2>
      <p>
        Fulfil the need for a unifying platform on which our Bahujan Community
        can celebrate our Assertion and Excellence. We don't think ours is the
        only platform, we see many such Bahujan Platforms already in play, and
        we believe that we can all co-exist and serve our community.
      </p>
      <button
        className="btn-second margin-top-2"
        style={{
          maxWidth: "300px",
          border: "3px solid var(--color-primary)",
          color: "var(--color-primary)",
        }}
        onClick={() => navigate("/about-us")}
      >
        Know More
      </button>
    </section>
  );
};

export default AboutUsShort;
