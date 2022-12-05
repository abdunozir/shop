import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductSlider from "../Products/ProductSlider";
import "./FoodItem.scss";
import FoodItemList from "./FoodItemList";
import ItemCounter from "./ItemCounter/ItemCounter";
import Timer from "./Timer/Timer";

function FoodItem({ setCard, card, setObj, obj, wish, setWish }) {
  let location = useLocation();
  let [suggested, setSuggested] = useState("");
  let [count, setCount] = useState(0);
  useEffect(() => {
    obj.map((el) => {
      if (el.id == location.pathname.split("/").at(-1)) {
        setSuggested(el.category);
      }
    });
  }, []);

  let addtoCard = (el) => {
    setObj([
      ...obj.map((product) => {
        if (product.id === el.id) {
          product.card = true;
          return product;
        }
        return product;
      }),
    ]);
  };

  let addWish = (el) => {
    setObj([
      ...obj.map((product) => {
        if (product.id === el.id) {
          product.like = true;
          return product;
        }
        return product;
      }),
    ]);
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
                  {item.discount_price !== null ? (
                    <div className="violet__item-prices">
                      <del className="violet__item-prev__price">
                        ${item.to_price}
                      </del>
                      <ins className="violet__item-next__price">
                        ${item.discount_price}
                      </ins>
                    </div>
                  ) : (
                    <div className="violet__item-prices">
                      <ins className="violet__item-next__price">
                        ${item.to_price}
                      </ins>
                    </div>
                  )}
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
                  {item.discount_price !== null ? (
                    <>
                      <Timer />
                    </>
                  ) : (
                    ""
                  )}
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
                    {/* <div
                      className="violet__input-range"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ItemCounter
                        setCount={setCount}
                        count={count}
                        item={item}
                        setObj={setObj}
                        obj={obj}
                      />
                    </div> */}
                    <button className="violet__item-btn">
                      <a
                        className="text-light"
                        href="https://elessi.nasatheme.com/checkout/"
                      >
                        Buy now
                      </a>
                    </button>
                    {item.card === true ? (
                      ""
                    ) : (
                      <button
                        onClick={() => addtoCard(item)}
                        className="violet__item-btn"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                  <FoodItemList Guaranteed={item.Guaranteed} />
                </div>
              </li>
            );
          }
        })}
      </ul>
      <div className="suggested-products-title">
        <p>Related Products</p>
      </div>
      {obj.map((el) => {})}
      <ul className="fproducts__list pb-4">
        {obj.map((el) => {
          if (el.category === suggested) {
            return (
              <li key={el.id} className="fproducts__item">
                <div className="fproducts__realative">
                  <ProductSlider el={el} />
                  {el.like === true ? (
                    ""
                  ) : (
                    <button
                      className="fproducts__hbtn"
                      onClick={() => addWish(el)}
                    >
                      <i className="bx bx-heart"></i>
                    </button>
                  )}
                  <div className="fproducts__mbox">
                    {el.card === true ? (
                      ""
                    ) : (
                      <button
                        className="fproducts__mbtn"
                        onClick={() => addtoCard(el)}
                      >
                        <i className="bx bx-shopping-bag"></i>
                      </button>
                    )}
                    <button className="fproducts__mbtn">
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
          }
        })}
      </ul>
    </div>
  );
}

export default FoodItem;
