import React, { useState } from "react";
import "./navbar.scss";
import "./navbar_hover.scss";
import "./category.scss";

import homeImg from "../img/home1.jpg";
import homeImg2 from "../img/home2.jpg";
import homeImg3 from "../img/home3.jpg";
import homeImg4 from "../img/home4.jpg";
import homeImg5 from "../img/home5.jpg";
import homeImg6 from "../img/home6.jpg";

import { CgMenuCheese } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { GiHeadphones } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { BsChevronRight } from "react-icons/bs";

function Navbar() {
  const [isActive, setisActive] = useState(false);

  return (
    <div className="navbar__main">
      <div className="container">
        <div className="navbar__navbar d-flex">
          <div className="category--btn ">
            <p
              className="category-text"
              onClick={(e) => setisActive(!isActive)}
            >
              <CgMenuCheese className="menu__icon" />
              bowse category
            </p>

            {isActive && (
              <div className="category-menu">
                <ul className="category_innerList">
                  <li className="category-items fruit">
                    <GiFruitBowl className="category__icon" /> Fruits{" "}
                    <BsChevronRight className="right__arrow" />
                    <div className="fruit__hover slide-left">
                      <div className="fruit__hover-inner d-flex">
                        <div className="shop-hover-divs">
                          <h6 className="shop-titles">Theme Elements</h6>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                        </div>
                        <div className="shop-hover-divs">
                          <h6 className="shop-titles">Theme elements</h6>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="category-items vegetable">
                    <GiFruitBowl className="category__icon" />
                    Vegetables <BsChevronRight className="right__arrow" />
                    <div className="vegetable__hover slide-left">
                      <div className="vegetable__hover-inner d-flex">
                        <div className="shop-hover-divs">
                          <h6 className="shop-titles">Daily vegeatable</h6>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                        </div>
                        <div className="shop-hover-divs">
                          <h6 className="shop-titles">Exotic vegetable</h6>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                          <li className="shop-hover-list-item">
                            Infinite scroll
                          </li>
                          <li className="shop-hover-list-item">
                            Ajax Load More
                          </li>
                          <li className="shop-hover-list-item">Top SideBar</li>
                          <li className="shop-hover-list-item">Left SideBar</li>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Drinks <BsChevronRight className="right__arrow" />
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Butter & Egges{" "}
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Trees{" "}
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Cakes{" "}
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Meats{" "}
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Fish{" "}
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Grapes{" "}
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Banana{" "}
                  </li>
                  <li className="category-items">
                    <GiFruitBowl className="category__icon" />
                    Potatoes{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <nav className="navbar">
            <ul className="navbar__list list d-flex">
              <li className="list__item home">
                <p className="element-title">
                  Home <BsChevronDown className="bottom--arrow" />
                </p>
                <div className="home__hover slide-top">
                  <div className="home__inner-Back">
                    <div className="home-hover-box">
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg2}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg3}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg4}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg5}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg6}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg5}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg2}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg4}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg6}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg5}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg2}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                      <div className="hover-home-item">
                        <img
                          className="hover-box-img"
                          src={homeImg4}
                          alt="sd"
                          width={150}
                          height={150}
                        />
                        <p className="home-Img-text">Fashion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list__item shop">
                <div className="element-title">
                  Shop <BsChevronDown className="bottom--arrow" />
                </div>
                <div className="shop-hover slide-top">
                  <div className="shop-hover-inner">
                    <ul className="shop-hover-list d-flex">
                      <div className="shop-hover-divs">
                        <h6 className="shop-titles">Shop pages</h6>
                        <li className="shop-hover-list-item">
                          Infinite scroll <span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">
                          Left SideBarspan <span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">
                          Ajax Load More <span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h6 className="shop-titles">Product layout</h6>
                        <li className="shop-hover-list-item">
                          Infinite scroll<span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">
                          Left SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h6 className="shop-titles">Products imgs</h6>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-hot">hot</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h6 className="shop-titles">Products Features</h6>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                      <div className="shop-hover-divs">
                        <h6 className="shop-titles">Shop pages</h6>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                        <li className="shop-hover-list-item">
                          Infinite scroll
                        </li>
                        <li className="shop-hover-list-item">Ajax Load More</li>
                        <li className="shop-hover-list-item">Top SideBar</li>
                        <li className="shop-hover-list-item">Left SideBar</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list__item element">
                <p className=" element-title">
                  Elements <BsChevronDown className="bottom--arrow" />
                </p>
                <div className="element-hover ">
                  <div className="element-hover-inner ">
                    <ul className="shop-hover-list d-flex">
                      <li className="shop-hover-divs">
                        <h6 className="shop-titles">Blogs </h6>
                        <p className="shop-hover-list-item">Standart</p>
                        <p className="shop-hover-list-item">Mansory</p>
                        <p className="shop-hover-list-item">Grid</p>
                        <p className="shop-hover-list-item">List</p>
                        <p className="shop-hover-list-item">Left sidebar</p>
                        <p className="shop-hover-list-item">
                          Rigt sidebar <span className="span-new">new</span>
                        </p>
                      </li>
                      <li className="shop-hover-divs">
                        <h6 className="shop-titles">Header Type</h6>
                        <p className="shop-hover-list-item">
                          Infinite scroll<span className="span-hot">hot</span>
                        </p>
                        <p className="shop-hover-list-item">Ajax Load More</p>
                        <p className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </p>
                        <p className="shop-hover-list-item">Left SideBar</p>
                        <p className="shop-hover-list-item">Infinite scroll</p>
                        <p className="shop-hover-list-item">Ajax Load More</p>
                        <p className="shop-hover-list-item">Top SideBar</p>
                      </li>
                      <li className="shop-hover-divs">
                        <h6 className="shop-titles">Theme Elements</h6>
                        <p className="shop-hover-list-item">Infinite scroll</p>
                        <p className="shop-hover-list-item">Ajax Load More</p>
                        <p className="shop-hover-list-item">
                          Top SideBar<span className="span-hot">hot</span>
                        </p>
                        <p className="shop-hover-list-item">Left SideBar</p>
                        <p className="shop-hover-list-item">Infinite scroll</p>
                        <p className="shop-hover-list-item">Ajax Load More</p>
                        <p className="shop-hover-list-item">Top SideBar</p>
                      </li>
                      <li className="shop-hover-divs">
                        <h6 className="shop-titles">Theme elements</h6>
                        <p className="shop-hover-list-item">Infinite scroll</p>
                        <p className="shop-hover-list-item">Ajax Load More</p>
                        <p className="shop-hover-list-item">
                          Top SideBar<span className="span-new">new</span>
                        </p>
                        <p className="shop-hover-list-item">Left SideBar</p>
                        <p className="shop-hover-list-item">Infinite scroll</p>
                        <p className="shop-hover-list-item">Ajax Load More</p>
                        <p className="shop-hover-list-item">Top SideBar</p>
                        <p className="shop-hover-list-item">Left SideBar</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list__item page">
                <p className="element-title">
                  Pages <BsChevronDown className="bottom--arrow" />
                </p>
                <div className="page-hover slide-top">
                  <div className="page-hover-inner">
                    <ul className="page-list">
                      <li className="page-item">My Accaount</li>
                      <li className="page-item">Contact us</li>
                      <li className="page-item">About us</li>
                      <li className="page-item">ORder Tracking</li>
                      <li className="page-item">FAQ</li>
                      <li className="page-item">Site Boxed</li>
                      <li className="page-item">Popup news</li>
                      <li className="page-item">Site Boxed</li>
                      <li className="page-item">Top promotion</li>
                      <li className="page-item">Cookie LAW GDRP</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list__item vendors">
                <p className="element-title">
                  Vendors <BsChevronDown className="bottom--arrow" />
                </p>
                <div className="vendor-hover slide-top">
                  <div className="page-hover-inner">
                    <ul className="page-list">
                      <li className="page-item">Vendoor list</li>
                      <li className="page-item">Vendoor</li>
                      <li className="page-item">Vendoor v2</li>
                      <li className="page-item">Vendoor v1</li>
                      <li className="page-item">Vendoor v3</li>
                      <li className="page-item">Vendoor store</li>
                      <li className="page-item">Vendoor store v2</li>
                      <li className="page-item">Vendoor store v1</li>
                      <li className="page-item">Vendoor store v3</li>
                      <li className="page-item">LAW GDRP</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div>
            <a className="numberTel" href="#">
              <GiHeadphones className="headPhone" />
              (+01)-800-3456-88
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
