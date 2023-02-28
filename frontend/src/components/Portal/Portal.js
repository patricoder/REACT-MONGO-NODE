import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById("modals"));
};

export default Portal;
