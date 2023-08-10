import React from "react";
import "./Favourite.css";
import Button from "../button/Button";
// import Favourite from "../../favouriteData";
// import favouriteData from "../../favouriteData";
const Suggested = () => {
  const Products = [
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ];

  if (Products.length === 0) {
    return <p>Items Not Available</p>;
  }
  return (
    <>
      <h1>Suggest For You</h1>
      <div className="product-flex">
        {Products.map((product) => (
          <div key={product.id} className="product-container">
            <img src={product.image} className="img-size" />
            <div className="desc-style">
              <h5>Product Name: {product.title}</h5>
              <p>Product Price: {product.price}</p>
              <p>Product Descriptions : {product.description}</p>
              <p>Product Category : {product.category}</p>
              <p>Product Rating :{product.rating.count}</p>
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
        ))}
      </div>
    </>
  );
};

export default Suggested;
