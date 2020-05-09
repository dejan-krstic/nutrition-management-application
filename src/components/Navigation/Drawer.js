import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const DrawerPortal = (props) => {
  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <div className="drawer" onClick={props.onClick}>
        {props.children}
      </div>
    </CSSTransition>,
    document.getElementById("drawer-portal"),
  );
};

export default DrawerPortal;
