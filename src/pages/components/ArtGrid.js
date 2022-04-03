import "./artGrid.css";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const arts = [
  {
    artTitle: "art1",
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

const ArtGrid = ({ cat }) => {
  return (
    <div className="art-category">
      <div className="category-header">
        <h1 className="category-name-prime">{cat}</h1>
        <div className="category-action ">
          <button className="category-jump ">
            <AiOutlineDown />
          </button>
          <button className="category-explore ">
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <div className="art-grid">
        <div className="art-row even">
          {arts.map((art, index) => {
            if (index % 2 === 0) {
              return (
                <div className="art-container">
                  <Link to="/show-art-m">
                    <img
                      className="art-item"
                      key={index}
                      src={art.artUrl}
                      alt="art"
                    ></img>
                  </Link>
                  <div className="art-overlay">{art.artTitle}</div>
                </div>
              );
            }
          })}
        </div>
        <div className="art-row odd">
          {arts.map((art, index) => {
            if (index % 2 !== 0) {
              return (
                <div className="art-container">
                  <img
                    className="art-item"
                    key={index}
                    src={art.artUrl}
                    alt="art"
                  ></img>
                  <div className="art-overlay">{art.artTitle}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtGrid;
