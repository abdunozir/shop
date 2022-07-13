import React, { useState } from "react";

export default function MyCart({ serCard, card }) {
  let [input, setInput] = useState(0);

  let removeCard = (id) => {
    serCard([
      ...card.filter((el) => {
        if (el.id !== id) {
          return el;
        }
      }),
    ]);
  };
  return (
    <section
      className="offcanvas offcanvas-end mycart"
      tabIndex="-1"
      id="offcanvasRight2"
      aria-labelledby="offcanvasRightLabel"
    >
      <button
        type="button"
        className="quickview__xbtn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i className="bx bx-chevron-right"></i>
      </button>

      <div className="mycart__bigbox">
        <h2 className="mycart__title">My cart</h2>

        <ul className="mycart__list">
          {card.length == 0
            ? ""
            : card.map((el, i) => {
                return (
                  <li key={i} className="mycart__item">
                    <div className="mycart__imgbox">
                      <img src={el.img[0]} alt="product" />
                    </div>
                    <div className="mycart__box">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h3 className="mycart__name">{el.name}</h3>
                        <button
                          className="mycart__removebtn"
                          onClick={() => removeCard(el.id)}
                        >
                          <i className="bx bx-x"></i>
                        </button>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <input
                            className="quickview__input"
                            type="number"
                            defaultValue="1"
                            onChange={(e) => setInput(Number(e.target.value))}
                          />
                          <div className="d-flex flex-column">
                            <button className="quickview__plus">+</button>
                            <button className="quickview__plus">-</button>
                          </div>
                          <p className="mycart__price">x $ {el.to_price}</p>
                        </div>
                        <p className="mycart__totalprice">
                          ${el.to_price * input}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
        </ul>

        <div className="mycart__servis">
          <button className="mycart__servis-btn">
            <i className="bx bx-edit"></i> <br />
            Note
          </button>
          <span className="mycart__servis-span"></span>
          <button className="mycart__servis-btn">
            <i className="bx bxs-car"></i> <br />
            Shipping
          </button>
          <span className="mycart__servis-span"></span>
          <button className="mycart__servis-btn">
            <i className="bx bx-purchase-tag bx-flip-horizontal"></i> <br />
            Cuppon
          </button>
        </div>

        <div className="mycart__total">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mycart__total-subtotal">Subtotal</p>
            <p className="mycart__total-subtotal">$262.00</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mycart__total-shipping">Shipping</p>
            <p className="mycart__total-shipping">Free Shipping</p>
          </div>
        </div>

        <div className="mycart__tprice">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mycart__tprice-total">Total</p>
            <p className="mycart__tprice-total">$262.00</p>
          </div>

          <div className="mycart__tprice-rangebox">
            <div className="mycart__tprice-range">
              <span className="mycart__tprice-rangespan">25%</span>
            </div>
          </div>
          <p className="mycart__tprice-desc">
            Spend <span className="mycart__tprice-price">$118.8</span> more to
            reach <span className="mycart__tprice-strong">Free shipping!</span>
          </p>
        </div>

        <button className="mycart__cartbtn">viwe cart</button>
        <button className="mycart__checkbtn">checkout</button>
      </div>
    </section>
  );
}
