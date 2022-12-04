import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Object from "../../Object/Object";
import About from "../About/About";
import Categories from "../Categories/Categories";
import Filter from "../filter/Filter";
import FoodItem from "../FoodITem/FoodItem";
import Footer from "../Footer/Footer";
import Header from "../headerTop/Header";
import MainHeader from "../headerTop/MainHeader";
import Hero from "../hero/Hero";
import MyCart from "../Mycart/Mycart";
import Navbar from "../navbar/Navbar";
import Partners from "../Partners/Partners";
import Products from "../Products/Products";
// import Quickview from "../Quickview";
import Sales from "../Sales/Sales";
// import FoodItem from "../FoodItem";
import "./main.scss";

function Main() {
  let [obj, setObj] = useState([...Object]);
  let [card, setCard] = useState([]);
  return (
    <div className="root-child">
      <Header />

      <MainHeader />
      <Navbar />
      <Routes>
        <Route
          path="Quickview/:id"
          element={
            <FoodItem setCard={setCard} card={card} obj={obj} setObj={setObj} />
          }
        />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Categories />
              <Products setCard={setCard} card={card} />
              <MyCart card={card} setCard={setCard} />

              <Sales />
              <Partners />
              {/* <Footer /> */}
            </>
          }
        />
        <Route path="filter/:id" element={<Filter obj={obj} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
