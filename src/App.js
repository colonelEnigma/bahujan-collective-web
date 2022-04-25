import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AssamblyPage from "./pages/AssamblyPage";

import ProfilePage from "./pages/ProfilePage";
import ArtSubmit from "./pages/ArtSubmit";
import Navbar from "./pages/components/Navbar";

import BrowseArtPage from "./pages/BrowseArtPage";
import ArtFullScreenMobile from "./pages/ArtFullScreenMobile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":return { ...state,user: action.payload , loggedIn: true  };
//     case "LOGOUT":return { ...state,loggedIn: false,user: { } };
//
//     default:return state;
// };
// const initialState = { loggedIn: true, user: { } };

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testing" element={<AssamblyPage></AssamblyPage>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/browse-art" element={<BrowseArtPage />} />
          <Route path="/submit-art" element={<ArtSubmit />} />
          <Route path="/show-art-m" element={<ArtFullScreenMobile />} />
          <Route path="/show-art-m" element={<ArtFullScreenMobile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
