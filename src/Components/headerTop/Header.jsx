import React from "react";
import "./haeder.scss";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./modal.scss";

import logo from "../img/logo.jpg";
import Login from "./Login";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__nesessary d-flex gap-2 ">
          <IoNewspaperOutline />
          <div> Add anything here or just remove it...</div>
        </div>
        <div className="header__langLogin">
          {/* top header language changing */}
          <div className="header__lang d-flex">
            <div className="header__lang-selected">
              <p> English</p>
            </div>

            <div className="lang__box slide-top">
              <div className="lang__text">
                <div className="d-flex header__lang-selected">
                  <p> Russian</p>
                </div>
                <div className="d-flex mt-2 header__lang-selected">
                  <p> Uzbek</p>
                </div>
              </div>
            </div>
          </div>

          {/* top header valuta changing */}
          <div className="dollar">
            US dollar
            <div className="dollar__inner">
              <ul className="dollar__inner-text">
                <li>Euro(EUR)</li>
                <li>Indian Rupee(INR)</li>
                <li>Pound(GBR)</li>
              </ul>
            </div>
          </div>

          {/* top header registration  */}
          <Login text="Login / Register" />
        </div>
      </div>
    </div>
  );
}

export default Header;
