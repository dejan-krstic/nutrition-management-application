import { useState } from "react";
import AppHeader from "./AppHeader";
import NavLinks from "./NavLinks";
import Drawer from "./Drawer";
import DrawerBackground from "./DrawerBackground";
import "./index.scss";

const Navigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <>
      {drawerIsOpen && <DrawerBackground onClick={openDrawerHandler} />}
      <Drawer show={drawerIsOpen} onClick={openDrawerHandler}>
        <NavLinks />
      </Drawer>
      <AppHeader openDrawerHandler={openDrawerHandler} />
    </>
  );
};

export default Navigation;
