import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/loadingSpinner";
import Button from "../button/Button";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const ProductsItem = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      setProducts(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ProductsItem();
  }, []);

  return (
    <div className="items-container">
      <h2>AVAILABLE PRODUCTS</h2>
      <div>
        {loading ? (
          <Spinner />
        ) : products.length === 0 ? (
          <p>No Data</p>
        ) : (
          products.map((product) => (
            <div className="f">
              {product.image ? (
                <img src={product.image} onLoad={() => setLoading(false)} />
              ) : (
                <p>No Data</p>
              )}
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>{product.rating.count}</p>
              <Button>Add to carts</Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
