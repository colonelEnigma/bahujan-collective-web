import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/components/Navbar";
import Home from "./pages/Home";
import BrowseArtPage from "./pages/BrowseArtPage";
import ArtSubmit from "./pages/ArtSubmit";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ArtFullScreenMobile from "./pages/ArtFullScreenMobile";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-art" element={<BrowseArtPage />} />
          <Route path="/submit-art" element={<ArtSubmit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/show-art-m" element={<ArtFullScreenMobile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
