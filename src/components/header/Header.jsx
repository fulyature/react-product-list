import React from "react";
import "./Header.scss";
const Header = ({ categorieS }) => {
  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="btn-wrapper">
        {categorieS.map((item, i) => (
          <button key={i}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
