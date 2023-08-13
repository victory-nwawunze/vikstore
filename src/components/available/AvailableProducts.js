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
      <h1>AvailableProducts</h1>
      <div className="item-container">
        {loading ? (
          <Spinner />
        ) : (
          product.map((products) => (
            <div>
              <p>{products.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableProducts;
