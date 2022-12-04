import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductSlider from "../Products/ProductSlider";
import "./Filter.scss";

export default function Filter({ obj }) {
  let location = useLocation();
  let filter = location.pathname.split("/").at(-1).split("&").join(" ");
  return (
    <div>
      <div className="fiter-products">
        <h2 className="related-products__title">Related Products</h2>
        <ul className="fproducts__list">
          {obj
            .filter((el) => el.category === filter)
            .map((el) => {
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
                        // onClick={() => addtoCard(el)}
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
    </div>
  );
}
