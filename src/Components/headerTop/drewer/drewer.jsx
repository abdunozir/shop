import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
// import component ?
import Drawer from "react-modern-drawer";
import "./drewer.scss";
//import styles ?
import "react-modern-drawer/dist/index.css";

const Drewer = ({ type, icon }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div>
        {type === "My Carts" ? (
          <BsBagCheck onClick={toggleDrawer} className="header__cart--icon" />
        ) : (
          <FiHeart onClick={toggleDrawer} className="header__wishes--icon" />
        )}
      </div>
      <Drawer
        className="drewer"
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
      >
        <div onClick={toggleDrawer} className="closer_btn">
          <BsChevronRight />
        </div>
        <div className="drewer__inner">
          <h2>{type}</h2>
          {type === "My Carts" ? (
            <BsBagCheck onClick={toggleDrawer} className="drewer__card-icon" />
          ) : (
            <FiHeart onClick={toggleDrawer} className="drewer__wishes-icon" />
          )}
          <p className="drewer_noProducts">No products in the {type}.</p>
          <button onClick={toggleDrawer} className="drewer__returnBtn">
            RETURN TO SHOP
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default Drewer;
