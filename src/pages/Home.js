import AboutUsShort from "./components/AboutUsShort";
import ArtDistShort from "./components/ArtDistShort";
import EssayShort from "./components/EssayShort";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <EssayShort />
      <ArtDistShort />
      <AboutUsShort />
      <Footer />
    </main>
  );
};

export default Home;
