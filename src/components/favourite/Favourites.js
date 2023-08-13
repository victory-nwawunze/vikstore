import React, { useState } from "react";
import "./Favourite.css";
import Button from "../button/Button";
import favouriteData from "./favouriteData";

const Suggested = () => {
  return (
    <div>
      <h1>Suggested for you</h1>
      <div className="product-flex">
        {favouriteData.length === 0 ? (
          <p>No Data</p>
        ) : (
          favouriteData.map((favourite) => (
            <div>
              <img src={favourite.image} style={{ width: 450 }} />
              <p>{favourite.title}</p>
              <p>${favourite.price}</p>
              <p>{favourite.description}</p>
              <p>{favourite.category}</p>
              <p>{favourite.rating.rate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Suggested;
