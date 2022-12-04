import "./MainHeader.scss";
import React from "react";
import Button from "@mui/material/Button";
import logo from "../img/logo.jpg";
import { BsBagCheck, BsPersonCircle, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Drewer from "./drewer/drewer";
import MobileMenu from "./MobileMenu/MobileMenu";

function MainHeader() {
  return (
    <div className="container">
      <div className="header__main d-flex">
        <div className="d-flex">
          <MobileMenu />
          <BsSearch className="header__mobile-searchIcon" />
        </div>
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="searchBar">
          <input
            className="input__search"
            type="text"
            placeholder="I m shopping for..."
          />
          <button className="input__searchBTn">Search</button>
        </div>

        <div className="Cart">
          <BsPersonCircle className="header__login-personIcon" />
          <Drewer type={"My Carts"} />
          <Drewer type={"Wishlist"} />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
