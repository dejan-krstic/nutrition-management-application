import { NavLink } from "react-router-dom";
import { Button } from "antd";

import "./NavLinks.scss";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          <Button size="large">WHAT TO EAT</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          <Button size="large">WHAT TO EAT</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          <Button size="large">WHAT TO EAT</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          <Button size="large">WHAT TO EAT</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          <Button size="large">WHAT TO EAT</Button>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
