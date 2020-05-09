import ReactDOM from "react-dom";

const DrawerBackground = (props) => {
  return ReactDOM.createPortal(
    <div className="drawer-background" onClick={props.onClick}></div>,
    document.getElementById("drawer-background-portal"),
  );
};

export default DrawerBackground;
