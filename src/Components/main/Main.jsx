import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Categories from "../Categories/Categories";
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

function Main() {
  let [card, serCard] = useState([]);
  return (
    <div>
      <Header />

      <MainHeader />
      <Navbar />
      <Routes>
        <Route
          path="Quickview/:id"
          element={<FoodItem serCard={serCard} card={card} />}
        />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Categories />
              <Products serCard={serCard} card={card} />
              <MyCart card={card} serCard={serCard} />

              <Sales />
              <Partners />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
