import React, { useRef, useState } from "react";
import organ from "../img/organ1.jpg";
import organ2 from "../img/organ2.jpg";
import organ3 from "../img/organ3.jpg";
import "./hero.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Hero() {
  let [slider, setSlider] = useState(0);
  let slide = useRef(null);
  // slide.current.scrollLeft = slider * 925;
  let moveLeft = () => {
    console.log(slide.current.scrollLeft);
    if (slider !== 0) {
    }
    slide.current.scrollLeft = slider;
  };
  let moveRight = () => {
    if (slider !== 3) {
    }
    slide.current.scrollLeft = slider;
  };
  return (
    <div className="Hero__main">
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={organ} className="d-block w-100" alt="..." />
            <div className="slider__desc carousel-caption d-none d-md-block">
              <h4>Elessi Store</h4>
              <p className="slider__p">
                Fresh vegetables <br /> Sale up to 30% off
              </p>
              <button className="slider__dec-btn">show now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={organ2} className="d-block w-100" alt="..." />
            <div className="slider__desc  carousel-caption d-none d-md-block">
              <h3 className="text_blue">Second slide label</h3>
              <p className="slider__p p-black">
                Fresh vegetables <br /> Sale up to{" "}
                <span className="span__text">30% off</span>
              </p>
              <button className="slider__dec-btn2">show now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={organ3} className="d-block w-100" alt="..." />
            <div className="slider__desc  carousel-caption d-none d-md-block">
              <h3 className="text_blue">Third slide label</h3>
              <p className="slider__p p-black">
                Fresh vegetables <br /> Sale up to{" "}
                <span className="span__text">30% off</span>
              </p>
              <button className="slider__dec-btn3">show now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div ref={slide} className="hero__slider">
        <button
          onClick={() => (slider !== 0 ? setSlider(slider - 1) : slider)}
          className="hero_left-btn"
        >
          <AiOutlineLeft />
        </button>
        <div
          className="hero__slider-wrapper"
          style={{ transform: `translatex(-${slider}00vw)` }}
        >
          <div
            className="hero__slider-img"
            style={{ backgroundImage: `url(${organ})` }}
          >
            {/* <img src={organ} alt="hero product image slider" /> */}
            <div className="hero__slider-texts">
              <h2 className="slider_title">Elessi Store</h2>
              <p className="text_blue">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
                eaque.
              </p>
              <button className="slider__dec-btn">Buy Now</button>
            </div>
          </div>
          <div
            className="hero__slider-img"
            style={{ backgroundImage: `url(${organ2})` }}
          >
            {/* <img src={organ2} alt="hero product image slider" /> */}
            <div className="hero__slider-texts">
              <h2 className="slider_title">Elessi Store</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
                eaque.
              </p>
              <button className="slider__dec-btn--black">Buy Now</button>
            </div>
          </div>
          <div
            className="hero__slider-img"
            style={{ backgroundImage: `url(${organ3})` }}
          >
            {/* <img src={organ3} alt="hero product image slider" /> */}
            <div className="hero__slider-texts">
              <h2 className="slider_title">Elessi Store</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
                eaque.
              </p>
              <button className="slider__dec-btn--black">Buy Now</button>
            </div>
          </div>
        </div>
        <button
          onClick={() => (slider !== 2 ? setSlider(slider + 1) : slider)}
          className="hero__right-btn"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

export default Hero;
