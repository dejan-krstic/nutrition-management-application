import { NavLink } from "react-router-dom";
import { Button } from "antd";

import "./NavLinks.scss";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          <Button size="large" className="navigation-link-btn">
            MY RECIPES
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/meal-plan" exact>
          <Button size="large" className="navigation-link-btn">
            MEAL PLAN
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/groceries" exact>
          <Button size="large" className="navigation-link-btn">
            GROCERIES
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/shopping-list" exact>
          <Button size="large" className="navigation-link-btn">
            SHOPPING LIST
          </Button>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
