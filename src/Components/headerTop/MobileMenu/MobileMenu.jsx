import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import "./MobileMenu.scss";
// import component ?
import Drawer from "react-modern-drawer";
//import styles ?
import "react-modern-drawer/dist/index.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <AiOutlineMenu onClick={toggleDrawer} className="header__mobile-menu" />
      </div>
      <Drawer
        className="drewer"
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
      >
        <div onClick={toggleDrawer} className="closer_btn">
          <BsChevronRight />
        </div>
        <div className="drewer__inner">
          <h2>lists</h2>
        </div>
      </Drawer>
    </>
  );
};

export default MobileMenu;
