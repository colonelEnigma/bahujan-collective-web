import { ALLY, BAHUJAN } from "../Utils/constants";
import "./Modal.css";

const Modal = ({ children }) => {
  console.log(children);
  return <div className="modal">{children}</div>;
};

export default Modal;
