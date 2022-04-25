import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const usePasswordToggle = () => {
  const [visibile, setVisibile] = useState(false);
  const clkHndler = () => {
    visibile ? setVisibile(false) : setVisibile(true);
  };
  const style = {
    width: "20px",
    height: "20px",
    position: "absolute",
    top: "15px",
    right: "10px",
  };

  const icon = visibile ? (
    <AiOutlineEye style={style} onClick={clkHndler} />
  ) : (
    <AiOutlineEyeInvisible style={style} onClick={clkHndler} />
  );

  const inputType = visibile ? "text" : "password";
  return [icon, inputType];
};

export default usePasswordToggle;
