import React from "react";
import "./Navbar.css";
import Logo from "../../images/cartImg-removebg-preview.png";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-flex">
        <img src={Logo} alt="Logo" className="logo-style" />
        <ul className="list-flex">
          <li>Home</li>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
