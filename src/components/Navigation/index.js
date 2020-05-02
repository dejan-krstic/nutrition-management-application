import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import AppHeader from "./AppHeader";
import NavLinks from "./NavLinks";
import Drawer from "./Drawer";
import DrawerBackground from "./DrawerBackground";
import "./index.scss";
import { Button } from "antd";

const Navigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <DrawerBackground onClick={closeDrawerHandler} />}
      <Drawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="navigation-drawer-links">
          <NavLinks />
        </nav>
      </Drawer>

      <AppHeader>
        <Button
          size="large"
          className="navigation-menu-btn"
          onClick={openDrawerHandler}
        >
          <MenuOutlined />
        </Button>
        <h1 className="navigation-title">
          <Link to="/">Nutrition Management</Link>
        </h1>
        <nav className="navigation-header-links">
          <NavLinks />
        </nav>
      </AppHeader>
    </>
  );
};

export default Navigation;
