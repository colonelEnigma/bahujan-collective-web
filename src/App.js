import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import ArtSubmit from "./pages/ArtSubmit";
import Navbar from "./pages/components/Navbar";
import BrowseArtPage from "./pages/BrowseArtPage";
import ArtFullScreenMobile from "./pages/ArtFullScreenMobile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/browse-art" element={<BrowseArtPage />} />
          <Route path="/submit-art" element={<ArtSubmit />} />
          <Route path="/show-art-m" element={<ArtFullScreenMobile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
