import { NavLink } from "react-router-dom";
import { Button } from "antd";

import "./NavLinks.scss";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          <Button size="large">MY RECIPES</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/meal-plan" exact>
          <Button size="large">MEAL PLAN</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/groceries" exact>
          <Button size="large">GROCERIES</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/shopping-list" exact>
          <Button size="large">SHOPPING LIST</Button>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
