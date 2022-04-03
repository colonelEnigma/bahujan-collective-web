import { Link } from "react-router-dom";
import "./artSubmit.css";
import {
  AiOutlineForm,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";
import hide from "./Utils/hide";
import { useState, useEffect } from "react";

const suggestion = ["Dr. Ambedkar", "Lord Buddha", "Hello", "My Name"];

const ArtSubmit = () => {
  const [suggestions, setSuggestions] = useState(suggestion);
  const [selected, setSelected] = useState([]);

  const handleSpace = (word) => {
    const words = word.split(" ");
    return words.join("\u00A0");
  };

  const suggestionClickHandler = (index) => {
    console.log("clicked>>>>>", index);
    const val = suggestions[index];
    setSelected([...selected, val]);
    const newSuggestions = [...suggestions];
    newSuggestions.splice(index, 1);
    setSuggestions([...newSuggestions]);
  };

  const selectedClickHandler = (index) => {
    console.log("clicked>>>>>", index);
    const val = selected[index];
    setSuggestions([...suggestions, val]);
    const newSelected = [...selected];
    newSelected.splice(index, 1);
    setSelected([...newSelected]);
  };

  let styleStates = {
    before: {
      artSubmit: {
        transition: "height 0.5s ease-in-out",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      },
      selected: {
        height: "100vh",
        overflow: "hidden",
        top: "0px",
        bottom: "0px",
        position: "absolute",
      },
      selectedArtList: { display: "none" },
      pickFileDiv: {
        justifyContent: "center",
        alignItems: "center",
      },
      fileIconContainer: {
        borderRadius: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "fit-content",
      },
      chooseFileTxt: "Choose Art File",
      artForm: { display: "none", height: "0", overflow: "hidden" },
      floatingActions: { display: "none" },
      addMoreContainer: {},
    },
    now: {
      artSubmit: {},
      selected: {},
      selectedArtList: {},
      pickFileDiv: {},
      fileIconContainer: {},
      chooseFileTxt: "",
      artForm: {},
      floatingActions: {},
      addMoreContainer: {},
    },
    after: {
      artSubmit: {},
      selected: {},
      selectedArtList: {},
      pickFileDiv: {},
      fileIconContainer: {},
      chooseFileTxt: "",
      artForm: {},
      floatingActions: {},
      addMoreContainer: { display: "none" },
    },
  };
  // setStyles(styleStates.now);
  const [styles, setStyles] = useState(styleStates.before);
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {});
  console.log("styles>>>>>", styleStates);

  const handleKeyDownTag = (e) => {
    if (e.key === "Enter") {
      setSelected([...selected, handleSpace(tagInput)]);
      setTagInput("");
    }
  };
  return (
    <div className="art-submit" style={styles.artSubmit}>
      <div className="art-selected" style={styles.selected}>
        <div className="selected-arts-list" style={styles.selectedArtList}>
          <div className="art-circle"></div>
          <div className="art-circle"></div>
          <div className="art-circle"></div>
          <div className="art-circle"></div>
          <div className="art-circle"></div>
        </div>
        <div className="pick-file-div" style={styles.pickFileDiv}>
          <input type="file" id="file-input" className="file " />
          <label
            htmlFor="file-input"
            onClick={() => {
              setStyles(styleStates.now);
            }}
            className="file-icon-container"
            style={styles.fileIconContainer}
          >
            <AiOutlineForm className="icon-file" />
            {handleSpace(styles.chooseFileTxt)}
          </label>
        </div>
      </div>
      <div className="art-form" style={styles.artForm}>
        <input
          className="input-title form-input"
          type="text"
          placeholder="Add Art Title"
          name="ArtTitle"
        />
        <textarea
          className="input-description form-input"
          type="text"
          placeholder="Add description"
          name="ArtDescription"
        />
        <div className="category-container">
          <div className="category-section form-input">
            <div>Choose category</div>
            <AiOutlineArrowDown className="category-icon" />
          </div>

          <select
            className="input-category "
            type="text"
            id="category"
            placeholder="Add Art Title"
            name="ArtTitle"
          >
            <option value="">Select Category</option>
            <option value="">Select Category</option>
            <option value="">Select Category</option>
          </select>
        </div>
        <div className="tag-form  form-input">
          <div className="input-n-used-tags">
            <div className="used-tags">
              {selected.map((item, index) => (
                <div
                  className="tag"
                  key={index}
                  onClick={() => selectedClickHandler(index)}
                >
                  {handleSpace(item)}
                </div>
              ))}
            </div>
            <input
              className="tag-input"
              placeholder="Add tags"
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleKeyDownTag}
            ></input>
          </div>
          <div className="suggested-tags">
            {suggestions.map((suggestion, index) => (
              <div
                className="tag"
                onClick={() => suggestionClickHandler(index)}
              >
                {handleSpace(suggestion)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="add-more-desktop-container desktopOnly">
        <div className="add-more-desktop-button">
          <AiOutlinePlus className="add-more-icon" />
        </div>
        <div className="tooltip add-more-tooltip" style={hide(true)}>
          <div className="tooltip-pointer-left"></div>
          <div className="tooltip-text">Add more art</div>
        </div>
      </div>

      <div className="floating-actions" style={styles.floatingActions}>
        <div className="add-more-container" style={styles.addMoreContainer}>
          <div
            className="add-more-button shodow"
            onClick={() => {
              setStyles(styleStates.after);
            }}
          >
            <AiOutlinePlus className="add-more-icon" />
          </div>
          <div className="tooltip add-more-tooltip" style={hide(false)}>
            <div className="tooltip-pointer-right"></div>
            <div className="tooltip-text">Add more art</div>
          </div>
        </div>
        <button className="btn-prime submit shodow">
          <Link to="/browse-art"> submit</Link>
        </button>
      </div>
    </div>
  );
};

export default ArtSubmit;
