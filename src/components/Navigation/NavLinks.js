import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { NAVIGATION_LINKS } from "../../constants";
import FacebookLogin from "../../containers/FacebookLogin";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <FacebookLogin />
      </li>
      {Object.values(NAVIGATION_LINKS).map((link) => (
        <li>
          <NavLink to={link.path} exact>
            <Button size="large" ghost>
              {link.text}
            </Button>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
