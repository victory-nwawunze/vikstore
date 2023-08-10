import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingProducts.css";
import Trending1 from "../../images/Trending1-removebg-preview.png";
import Trending2 from "../../images/Trending2-removebg-preview.png";
import Trending3 from "../../images/Trending_3-removebg-preview.png";
import Trending4 from "../../images/Trend4-removebg-preview.png";
import Button from "../button/Button";

export default class TrendingProducts extends Component {
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
      <>
        <h1>Trending Products</h1>
        <div className="trending-slider-container">
          <Slider {...settings}>
            <div>
              <div className="flex-banner">
                <div>
                  <img src={Trending1} />
                </div>
                <div>
                  <h2 className="heading-text">
                    School Bag
                    <br />
                    $90
                  </h2>
                  <Button
                    style={{
                      padding: "10px 25px",
                      borderRadius: "50px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Try It
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex-banner">
                <div>
                  <img src={Trending2} />
                </div>
                <div>
                  <h2 className="heading-text">
                    Leather Jacket
                    <br />
                    $10
                  </h2>
                  <Button
                    style={{
                      padding: "10px 25px",
                      borderRadius: "50px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Try It
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex-banner">
                <div>
                  <img src={Trending3} />
                </div>
                <div>
                  <h2 className="heading-text">
                    Long Sleieve
                    <br />
                    $60
                  </h2>
                  <Button
                    style={{
                      padding: "10px 25px",
                      borderRadius: "50px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Try It
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex-banner">
                <div>
                  <img src={Trending4} />
                </div>
                <div>
                  <h2 className="heading-text">
                    Silver Chain
                    <br />
                    $500
                  </h2>
                  <Button
                    style={{
                      padding: "10px 25px",
                      borderRadius: "50px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Try it
                  </Button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
