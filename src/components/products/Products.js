import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/loadingSpinner";
import Button from "../button/Button";
import { Autoplay, Navigation } from "swiper/modules";
import "./Products.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const ProductsItem = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );

      setProducts(response.data);
      console.log("This is the data==========>>", response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ProductsItem();
  }, []);

  return (
    <div>
      <h1>Most Recent Search</h1>
      <Swiper
        spaceBetween={100}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay configuration
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {loading ? (
          <Spinner />
        ) : products.length === 0 ? (
          <p>Please Check Internet Connection</p>
        ) : (
          products.map((product) => (
            <div className="slide-item">
              <SwiperSlide>
                {" "}
                <img
                  src={product.images}
                  style={{ width: 250, marginLeft: 100 }}
                />
                <p>Title: {product.title}</p>
                <p>Price :${product.price}</p>
                <p>Description : {product.description}</p>
                <p>Category : {product.category.name}</p>
                {/* <p>Rating : {product.rating.rate}</p> */}
                <Button>Buy</Button>
              </SwiperSlide>
            </div>
          ))
        )}
      </Swiper>
    </div>

    // <div className="items-container">
    //   <h2>AVAILABLE PRODUCTS</h2>
    //   <div>
    //     {loading ? (
    //       <Spinner />
    //     ) : products.length === 0 ? (
    //       <p>No Data</p>
    //     ) : (
    //       products.map((product) => (
    //         <div>
    //           <div>
    //             {product.image ? (
    //               <img
    //                 src={product.image}
    //                 onLoad={() => setLoading(false)}
    //                 className="product-img"
    //               />
    //             ) : (
    //               <p>No Data</p>
    //             )}
    //             <p>{product.title}</p>
    //             <p>{product.price}</p>
    //             <p>{product.description}</p>
    //             <p>{product.category}</p>
    //             <p>{product.rating.count}</p>
    //             <Button>Add to carts</Button>
    //           </div>
    //         </div>
    //       ))
    //     )}
    //   </div>
    // </div>
  );
}

export default Products;
