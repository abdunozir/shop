import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

// each products' images slider compnent
export default function ProductSlider({ el }) {
  let [showing, setShowing] = useState(0);

  // product slider for images for left btn
  function fproductLeft() {
    let count = el.img.length;

    if (showing > 0) {
      setShowing(showing - 275);
    }
  }

  // product slider for images fro right btn
  function right() {
    let count = el.img.length;

    if (showing < 275 * (count - 1)) {
      setShowing(showing + 275);
    }
  }

  return (
    <div className="fproducts_slider-wrapper">
      {/* slider left btn */}
      <button
        style={{ color: showing == 0 ? "#bfbfbf" : "black" }}
        onClick={() => fproductLeft(el.id)}
        className="fproducts_btn-left"
      >
        {" "}
        <AiOutlineLeft />
      </button>
      <div className="fproducts_img-wrapper">
        <div
          style={{
            transform: `translate(-${showing}px)`,
          }}
          className="fproducts_img"
        >
          {/* images maping */}
          {el.img.map((image, i) => {
            return (
              <div key={i}>
                <Link className="fproducts__link" to={`Quickview/${el.id}`}>
                  <div className="fproducts__imgbox">
                    <img src={image} alt="" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* slider right btn */}
      <button
        style={{
          color: showing == 275 * (el.img.length - 1) ? "#bfbfbf" : "black",
        }}
        onClick={right}
        className="fproducts_btn-right"
      >
        {" "}
        <AiOutlineRight />
      </button>
    </div>
  );
}
