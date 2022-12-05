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
import Product from "./Product";

export default function Products({
  obj,
  setObj,
  wish,
  setWish,
  card,
  setCard,
}) {
  let [categoryFilter, setCategoryFilter] = useState("Fruits");
  let filterProducts = (e) => {
    setCategoryFilter(e.currentTarget.id);
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
            return <Product el={el} obj={obj} setObj={setObj} key={el.id} />;
          })}
        </ul>
      </div>
    </section>
  );
}
