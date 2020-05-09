import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { NAVIGATION_LINKS } from "../../constants";

const NavLinks = () => {
  return (
    <ul className="nav-links">
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
