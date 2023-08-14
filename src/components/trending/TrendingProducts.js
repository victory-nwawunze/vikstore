import React, { Component, useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./TrendingProducts.css";
// import Trending1 from "../../images/Trending1-removebg-preview.png";
// import Trending2 from "../../images/Trending2-removebg-preview.png";
// import Trending3 from "../../images/Trending_3-removebg-preview.png";
// import Trending4 from "../../images/Trend4-removebg-preview.png";
// import Button from "../button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import Spinner from "../spinner/loadingSpinner";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const allProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setProducts(response.data);
      console.log("this is the trendingProducts========>", response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error from the trendingProducts =====>", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <h1>Trending Products</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Navigation, Autoplay, Scrollbar]}
      >
        {loading ? (
          <Spinner />
        ) : (
          products.map((product) => (
            <SwiperSlide>
              <div>
                <img src={product.images} style={{ width: 450 }} />
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>{product.category.name}</p>
              </div>
            </SwiperSlide>
          ))
        )}
        ...
      </Swiper>
    </div>
  );
};

export default TrendingProducts;
// render() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//   };
{
  /* <Slider {...settings}>
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
</Slider> */
}
