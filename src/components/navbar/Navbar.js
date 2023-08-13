import React from "react";
import "./Navbar.css";
import Logo from "../../images/cartImg-removebg-preview.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-flex">
        <div className="Logo-text">
          <img src={Logo} alt="Logo" className="logo-style" />
          <p style={{ fontWeight: "bolder" }}>
            {" "}
            Vik <span style={{ color: "red" }}>Store</span>
          </p>
        </div>
        <ul className="list-flex">
          <li>Home</li>
          <li>Log-In</li>
          <div className="shopping-cart">
            <AiOutlineShoppingCart className="style-icon" />
            <span className="count-item">0</span>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
