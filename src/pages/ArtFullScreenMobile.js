import "./ArtFullScreenMobile.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const arts = [
  {
    artTitle: "Art 1",
    artUrl:
      "https://images.unsplash.com/photo-1648514035374-4486b55f15b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    artTitle: "art2",
    artUrl:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    artTitle: "art3",
    artUrl:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    artTitle: "art4",
    artUrl:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    artTitle: "art5",
    artUrl:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    artTitle: "art6",
    artUrl:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    artTitle: "art7",
    artUrl:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    artTitle: "art8",
    artUrl:
      "https://images.unsplash.com/photo-1647705331414-a6318a8bbcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    artTitle: "art9",
    artUrl:
      "https://images.unsplash.com/photo-1647705331414-a6318a8bbcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    artTitle: "art10",
    artUrl:
      "https://images.unsplash.com/photo-1647705331414-a6318a8bbcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    artTitle: "art11",
    artUrl:
      "https://images.unsplash.com/photo-1647705331414-a6318a8bbcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    artTitle: "art12",
    artUrl:
      "https://images.unsplash.com/photo-1647705331414-a6318a8bbcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    artTitle: "art13",
    artUrl:
      "https://images.unsplash.com/photo-1648050761477-e666b8779f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    artTitle: "art14",
    artUrl:
      "https://images.unsplash.com/photo-1648050761477-e666b8779f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    artTitle: "art15",
    artUrl:
      "https://images.unsplash.com/photo-1648050761477-e666b8779f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    artTitle: "art16",
    artUrl:
      "https://images.unsplash.com/photo-1648050761477-e666b8779f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    artTitle: "art17",
    artUrl:
      "https://images.unsplash.com/photo-1648050761477-e666b8779f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
];

const ArtFullScreenMobile = () => {
  console.log(arts[0].artUrl);
  return (
    <div className="art-fullscreen-mobile">
      <div className="art-stream-fullscreen">
        <div className="art-card">
          <div className="art-image">
            <img src={arts[0].artUrl} alt={arts[0].artTitle} />
          </div>
          <div className="art-short-desc">
            <div className="art-title-bar-m">
              <h2 className="art-title-m">{arts[0].artTitle}</h2>
              <div className="art-title-m-btn shodow">
                <button>
                  <AiOutlineInfoCircle className="btn-icon-m" />
                </button>
                <button>
                  <AiOutlineHeart className="btn-icon-m" />
                </button>
              </div>
            </div>
            <p className="art-short-desc-containt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              possimus ea minima deleniti repudiandae.
            </p>
          </div>
        </div>
      </div>
      <div className="art-detail-m">Lorem ipsum dolor sit amet.</div>
    </div>
  );
};

export default ArtFullScreenMobile;
