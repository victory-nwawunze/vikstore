import React from "react";
import "./Navbar.css";
import Logo from "../../images/cartImg-removebg-preview.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-flex">
        <img src={Logo} alt="Logo" className="logo-style" />
        <ul className="list-flex">
          <li>Home</li>
          <li>Login</li>
          <div className="shopping-cart">
            <AiOutlineShoppingCart className="style-icon" />
            <span className="count-item">1</span>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
