import ArtGrid from "./components/ArtGrid";

const BrowseArtPage = () => {
  return (
    <div className="browse-art-page">
      <ArtGrid cat={"Bhuddhism"} />
      <ArtGrid cat={"Dr. Ambedkar"} />
    </div>
  );
};

export default BrowseArtPage;
