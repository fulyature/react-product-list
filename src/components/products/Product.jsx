import React from "react";
import ProductCard from "./ProductCard";
import "./Product.scss";

const Product = ({ productS }) => {
  return (
    <div className="product-list">
      {productS.map((urun) => (
        <ProductCard key={urun.id} {...urun} />
      ))}
    </div>
  );
};

export default Product;
