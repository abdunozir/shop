import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Object from "../../Object/Object";
import {
  GiCutLemon,
  GiFruitTree,
  GiMilkCarton,
  GiBananaPeeled,
} from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import "./Products.scss";
import ProductSlider from "./ProductSlider";

export default function Products({ card, setCard }) {
  let [categoryFilter, setCategoryFilter] = useState("Fruits");
  let filterProducts = (e) => {
    setCategoryFilter(e.currentTarget.id);
  };

  let addtoCard = (el) => {
    let i = 0;
    card.map((item) => {
      if (item.id !== el.id) {
        i += 1;
      }
    });
    console.log(card);
  };

  return (
    <section className="fproducts">
      <div className="container">
        <div className="fproducts__boxs">
          <h2 className="fproducts__title">Featured Products</h2>
          <div className="fproducts__category">
            <ul className="fproducts__clist">
              <li className="fproducts__citem">
                <button
                  onClick={filterProducts}
                  className="fproducts__cbtn"
                  id="Fruits"
                >
                  <GiCutLemon className="foodIcon" />
                  <h3 className="fproducts__cname">Fruits</h3>
                </button>
              </li>
              <li className="fproducts__citem">
                <button
                  onClick={filterProducts}
                  className="fproducts__cbtn"
                  id="Vegetables"
                >
                  <GiFruitTree className="foodIcon" />
                  <h3 className="fproducts__cname">Vegetables</h3>
                </button>
              </li>
              <li className="fproducts__citem">
                <button
                  onClick={filterProducts}
                  className="fproducts__cbtn"
                  id="Milks & Creams"
                >
                  <GiMilkCarton className="foodIcon" />
                  <h3 className="fproducts__cname">Milk & Cream</h3>
                </button>
              </li>
              <li className="fproducts__citem">
                <button
                  onClick={filterProducts}
                  className="fproducts__cbtn"
                  id="Banana"
                >
                  <GiBananaPeeled className="foodIcon" />
                  <h3 className="fproducts__cname">Banana</h3>
                </button>
              </li>
              <li className="fproducts__citem">
                <button
                  onClick={filterProducts}
                  className="fproducts__cbtn"
                  id="SeaFood"
                >
                  <MdFastfood className="foodIcon" />
                  <h3 className="fproducts__cname">Sea Food</h3>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <ul className="fproducts__list">
          {Object.filter((el) => el.category === categoryFilter).map((el) => {
            return (
              <li key={el.id} className="fproducts__item">
                <div className="fproducts__realative">
                  <ProductSlider el={el} />
                  <button className="fproducts__hbtn">
                    <i className="bx bx-heart"></i>
                  </button>
                  <div className="fproducts__mbox">
                    <button
                      className="fproducts__mbtn"
                      aria-controls="offcanvasRight"
                      data-bs-target="#offcanvasRight2"
                      data-bs-toggle="offcanvas"
                      onClick={() => addtoCard(el)}
                    >
                      <i className="bx bx-shopping-bag"></i>
                    </button>
                    <button
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight1"
                      aria-controls="offcanvasRight"
                      className="fproducts__mbtn"
                    >
                      <i className="bx bx-low-vision"></i>
                    </button>
                    <button className="fproducts__mbtn">
                      <i className="bx bx-refresh"></i>
                    </button>
                  </div>
                </div>
                <div className="fproducts__box">
                  <Link className="fproducts__link" to={`Quickview/${el.id}`}>
                    <h3 className="fproducts__subtitle">{el.name}</h3>
                  </Link>
                  <div className="fproducts__dflex">
                    <div className="fproducts__dflex_price">
                      {el.discount_price !== null ? (
                        <del className="fproducts__price">
                          ${el.discount_price}
                        </del>
                      ) : (
                        ""
                      )}
                      <ins className="fproducts__price">${el.to_price}</ins>
                    </div>
                    <div className="fproducts__kgbox">
                      {el.total.one_kg !== undefined ? (
                        <button
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight1"
                          aria-controls="offcanvasRight"
                          className="fproducts__kgbtn"
                        >
                          1<br /> kg
                        </button>
                      ) : (
                        ""
                      )}

                      {el.total.half_kg !== undefined ? (
                        <button
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight1"
                          aria-controls="offcanvasRight"
                          className="fproducts__kgbtn"
                        >
                          500
                          <br /> gr
                        </button>
                      ) : (
                        ""
                      )}

                      {el.total.half_2_kg !== undefined ? (
                        <button
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight1"
                          aria-controls="offcanvasRight"
                          className="fproducts__kgbtn"
                        >
                          250 <br /> gr
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
