import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PartnersObj from "./PartnersObj/PartnersObj";
import "./Partner.scss";

function Partners() {
  return (
    <div className="container">
      <div className="partner">
        {PartnersObj.map((part, i) => {
          return (
            <img
              key={i}
              className="partner__img"
              src={part.image}
              alt="partners-image"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Partners;
