import React from "react";
import { Link } from "react-router-dom";
import ProductSlider from "../../Products/ProductSlider";

export default function Card({ obj, setObj, card, setCard, setWish, wish }) {
  let addWish = (el) => {
    setObj([
      ...obj.map((item) => {
        if (item.id === el.id) {
          item.like = true;
          return item;
        }
        return item;
      }),
    ]);
  };
  let addtoCard = (el) => {
    setObj([
      ...obj.map((item) => {
        if (item.id === el.id) {
          item.card = false;
          return item;
        }
        return item;
      }),
    ]);
    setCard([...obj.filter((item) => item.card === true)]);
  };
  return (
    <div className="wish-products">
      <ul className="fproducts__list">
        {obj.map((el) => {
          if (el.card === true) {
            return (
              <li key={el.id} className="fproducts__item">
                <div className="fproducts__realative">
                  <ProductSlider el={el} />
                  {el.like === true ? (
                    ""
                  ) : (
                    <button
                      onClick={() => addWish(el)}
                      className="fproducts__hbtn"
                    >
                      <i className="bx bx-heart"></i>
                    </button>
                  )}
                  <div className="fproducts__mbox">
                    <button
                      className="fproducts__mbtn"
                      onClick={() => addtoCard(el)}
                    >
                      <i className="bx bx-exit"></i>
                    </button>
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
