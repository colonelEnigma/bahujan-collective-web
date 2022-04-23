import ArtGrid from "./components/ArtGrid";
import "./browseArtPage.css";
import { useState } from "react";

const BrowseArtPage = () => {
  const [inframe, setinframe] = useState({ transform: "translateX(0)" });
  const handleSwitch = (attribute) => {
    if (attribute) {
      setinframe({ transform: "translateX(-100vw)" });
      return;
    }
    setinframe({ transform: "translateX(0)" });
  };

  return (
    <div className="browse-art-page">
      <div className="browse-by">
        <div
          className="browse-parameter btn-second shodow "
          onClick={() => {
            handleSwitch(0);
          }}
        >
          Categories
        </div>
        <div
          className="browse-parameter btn-second  shodow"
          onClick={() => {
            handleSwitch(1);
          }}
        >
          Artists
        </div>
      </div>
      <div className="switch" style={inframe}>
        <div className="by-category">
          <ArtGrid cat={"Category: Bhuddhism"} />
          <ArtGrid cat={"Category: Dr. Ambedkar"} />
        </div>
        <div className="by-artist">
          <ArtGrid cat={"Artist: Bekary Prashad"} />
          <ArtGrid cat={"Artist: Artist-007"} />
        </div>
      </div>
    </div>
  );
};

export default BrowseArtPage;
