import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import obj from "../../Object/Object";
import "./FoodItem.scss";
import FoodItemList from "./FoodItemList";

function FoodItem({ serCard, card }) {
  let location = useLocation();

  let [day, setDay] = useState("00");
  let [soat, setSoat] = useState("00");
  let [min, setMin] = useState("00");
  let [secund, setSecund] = useState("00");
  // let [secunds, setSecunds] = useState(0);

  let interval = useRef();

  const startTimer = () => {};

  let addtoCard = (el) => {
    serCard([...card, el]);
    console.log(card);
  };

  return (
    <div>
      <ul className="violet_ul">
        {obj.map((item, i) => {
          if (item.id == location.pathname.split("/").at(-1)) {
            return (
              <li className="violet__item" key={i}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                  }}
                  className="violet__images"
                  key={i}
                >
                  {item.img.map((el, j) => (
                    <img
                      key={j}
                      className="violet__item-img"
                      src={el}
                      alt="img"
                    />
                  ))}
                </div>
                <div className="violet__item-inner">
                  <h3 className="violet__item-name">{item.name}</h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="violet__item-stars">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <p className="violet__item-custom"> (1 customer review)</p>
                  </div>
                  <div className="violet__item-prices">
                    <del className="violet__item-prev__price">
                      $
                      {item.discount_price === null
                        ? item.to_price
                        : item.discount_price}
                    </del>
                    <ins className="violet__item-next__price">
                      ${item.to_price}
                    </ins>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 0 15px 0",
                    }}
                  >
                    🔥
                    <p className="violet__item-last">
                      {" "}
                      {item.sold} sold in last {item.sold_hours} hours
                    </p>
                  </div>
                  <p className="violet__item-about">{item.some_about}</p>
                  <div
                    className="violet__item-hurry__box"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 0 10px 0",
                    }}
                  >
                    <i className="bx bx-time"></i>
                    <p className="violet__item-hurry">Hurry up! Sale end in:</p>
                  </div>
                  <ul className="violet__date-list">
                    <li className="violet__date-item">
                      <p className="violet__date-date">{day}</p>
                      <p className="violet__date-text">days</p>
                    </li>
                    <li className="violet__date-item">
                      <p className="violet__date-date">{soat}</p>
                      <p className="violet__date-text">hours</p>
                    </li>
                    <li className="violet__date-item">
                      <p className="violet__date-date">{min}</p>
                      <p className="violet__date-text">mins</p>
                    </li>
                    <li className="violet__date-item">
                      <p className="violet__date-date">{secund}</p>
                      <p className="violet__date-text">secs</p>
                    </li>
                  </ul>
                  <div className="violet__input-box">
                    <p className="violet__already">
                      Only <span> {item.available} </span>item(s) left in stock.{" "}
                    </p>
                  </div>
                  <div className="violet__range"></div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div
                      className="violet__input-range"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        className="violet__input-place"
                        type="text"
                        placeholder="1"
                      />
                      <div className="violet__range-btns">
                        <button className="violet__range-btn">+</button>
                        <button className="violet__range-btn">-</button>
                      </div>
                    </div>
                    <button className="violet__item-btn">
                      <a
                        className="text-light"
                        href="https://elessi.nasatheme.com/checkout/"
                      >
                        Buy now
                      </a>
                    </button>
                    <button
                      onClick={() => addtoCard(item)}
                      className="violet__item-btn"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <FoodItemList Guaranteed={item.Guaranteed} />
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default FoodItem;
