import React from "react";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div style={{ textAlign: "center", padding: 40, backgroundColor: "pink" }}>
      <p style={{ fontSize: 40 }}>Nwawunze Victory@{currentYear}</p>
    </div>
  );
};

export default Footer;
