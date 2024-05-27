import React from "react";
import "./Product.css";

const Product = ({ data }) => {
  return (
    <div className="product">
      <img src={data.productImage} width={400} height={400} />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p>${data.price}</p>
      </div>
      <button className="addtocartbtn"> Add To Cart  </button>
    </div>
  );
};

export default Product;
