import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Img1 from "../../images/pexels-anna-shvets-3962294.jpg";
import Img2 from "../../images/pexels-gustavo-fring-3985062.jpg";
import Img3 from "../../images/pexels-sam-lion-5709656.jpg";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide-1">
            <h1 className="heading-text">Lorem ipsum dolor sit.</h1>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="btn">Login</button>
          </div>
          <div className="slide-2">
            <h1 className="heading-text">Lorem ipsum dolor sit.</h1>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="btn">Login</button>
          </div>
          <div className="slide-3">
            <h1 className="heading-text">Lorem ipsum dolor sit.</h1>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="btn">Login</button>
          </div>
        </Slider>
      </div>
    );
  }
}
