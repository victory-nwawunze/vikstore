import React from "react";
import "./loadingSpinner.css";
import LoadingGiff from "../../images/spinner-icon-0.gif";
const loadingSpinner = () => {
  return (
    <div className="spinner-container">
      <img src={LoadingGiff} className="spinner-style" />
    </div>
  );
};

export default loadingSpinner;
