import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../../context/shop-context";

const Product = ({ data }) => {
  const { addToCart , cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[data.id]

  return (
    <div className="product">
      <img src={data.productImage} width={400} height={400} />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p>${data.price}</p>
      </div>
      <button className="addtocartbtn" onClick={() => addToCart(data.id)}>
        Add To Cart {cartItemAmount > 0 &&  <>({cartItemAmount})</> }
      </button>
    </div>
  );
};

export default Product;
