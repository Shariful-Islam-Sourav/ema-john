import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <a href="_home">Home</a>
        <a href="_shop">Shop</a>
        <a href="_order">Order</a>
        <a href="_inventory">Manage inventory</a>
      </nav>
    </div>
  );
};

export default Header;
