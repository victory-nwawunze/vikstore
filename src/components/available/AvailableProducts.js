import React, { useEffect, useState } from "react";
import "./AvailableProducts.css";
import axios from "axios";
import Spinner from "../spinner/loadingSpinner";

const AvailableProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const allProduct = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setProduct(response.data);
      //   console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error");
      setLoading(false);
    }
  };
  useEffect(() => {
    allProduct();
  }, []);
  return (
    <div>
      <div className="option">
        <h1>AvailableProducts</h1>
        <div>
          <h2>
            <label for="cars">Filter by title:</label>
            <select id="cars">
              {product.map((products) => (
                <option value="volvo">
                  <option>{products.title}</option>
                </option>
              ))}
            </select>
          </h2>
        </div>
      </div>
      <div className="item-container">
        {loading ? (
          <Spinner />
        ) : (
          product.map((products) => (
            <div>
              <img
                src={products.images}
                style={{ width: 450, borderRadius: 5 }}
                className="img-hover"
              />
              <p>{products.title}</p>
              <p>${products.price}</p>
              <p>Description : {products.description}</p>
              <p>Category : {products.category.name}</p>
              {/* <Button>Buy</Button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableProducts;
