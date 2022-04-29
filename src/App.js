import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AssamblyPage from "./pages/AssamblyPage";

import ProfilePage from "./pages/ProfilePage";
import Navbar from "./pages/components/Navbar";
import Modal from "./pages/components/Modal";

import ArtFullScreenMobile from "./pages/ArtFullScreenMobile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import TermsModal from "./pages/components/TermsModal";
import AboutUs from "./pages/AboutUs";
import Ignite2022 from "./pages/Ignite2022";
import Projects from "./pages/Projects";
import MenuIcon from "./pages/components/MenuIcon";
import AudioBook from "./pages/AudioBook";

function App() {
  const [userType, setUserType] = useState("");
  const setUser = (type) => {
    setUserType(type);
  };

  return (
    <Router>
      <Navbar />
      {!userType && (
        <Modal>
          <TermsModal setUser={setUser} />
        </Modal>
      )}
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/audiobook/AnUndelivedSpeech"
            element={
              <AudioBook
                title={"AN UNDELIVED SPEECH: ANNIHILATION OF CASTE"}
                coverUrl={"/Images/an Undelivered.png"}
              />
            }
          />
          <Route
            path="/audiobook/TheEssenceOfBuddhism"
            element={
              <AudioBook
                title={"The Essence of Buddhism"}
                coverUrl={"/Images/The Essence of Buddhism.png"}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/ignite-2022"
            element={<Ignite2022 userType={userType} />}
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
