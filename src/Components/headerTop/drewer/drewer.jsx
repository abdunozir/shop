import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
// import component ?
import Drawer from "react-modern-drawer";
import "./drewer.scss";
//import styles ?
import "react-modern-drawer/dist/index.css";
import WishList from "../wishlist/WishList";
import Card from "../card/Card";

const Drewer = ({ type, icon, setCard, card, wish, setWish, obj, setObj }) => {
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
            <>
              {card.length > 0 ? (
                <div>
                  <p className="wishlist-count">Cards count: {card.length}</p>
                  <Card
                    setCard={setCard}
                    card={card}
                    wish={wish}
                    setWish={setWish}
                    obj={obj}
                    setObj={setObj}
                  />
                </div>
              ) : (
                <>
                  <BsBagCheck
                    onClick={toggleDrawer}
                    className="drewer__card-icon"
                  />
                  <p className="drewer_noProducts">
                    No products in the {type}.
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              {wish.length > 0 ? (
                <div>
                  <p className="wishlist-count">
                    wishlist count: {wish.length}
                  </p>
                  <WishList
                    obj={obj}
                    setObj={setObj}
                    wish={wish}
                    setWish={setWish}
                  />
                </div>
              ) : (
                <>
                  <FiHeart
                    onClick={toggleDrawer}
                    className="drewer__wishes-icon"
                  />
                  <p className="drewer_noProducts">
                    No products in the {type}.
                  </p>{" "}
                </>
              )}
            </>
          )}
          <button onClick={toggleDrawer} className="drewer__returnBtn">
            RETURN TO SHOP
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default Drewer;
