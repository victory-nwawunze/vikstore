import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Img1 from "../../images/pexels-andrea-piacquadio-3755015-removebg-preview.png";
import Img2 from "../../images/pexels-karolina-grabowska-5632399-removebg-preview.png";
import Img3 from "../../images/pexels-karolina-grabowska-4968637-removebg-preview.png";
import Button from "../button/Button";

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
          <div>
            <div className="flex-banner">
              <div>
                <img src={Img1} />
              </div>
              <div>
                <h2 className="heading-text">
                  Grab upto 50% Of On
                  <br />
                  Any Headphones
                </h2>
                <Button
                  style={{
                    padding: "10px 25px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex-banner">
              <div>
                <img src={Img2} />
              </div>
              <div>
                <h2 className="heading-text">
                  Grab upto 50% Of On
                  <br />
                  Any Deals
                </h2>
                <Button
                  style={{
                    padding: "10px 25px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex-banner">
              <div>
                <img src={Img3} />
              </div>
              <div>
                <h2 className="heading-text">
                  Make Payments with
                  <br />
                  Ease
                </h2>
                <Button
                  style={{
                    padding: "10px 25px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Make Payment Now
                </Button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
