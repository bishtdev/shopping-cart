import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import { Upload } from "phosphor-react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCardItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemsId) =>{
    setCardItems((prev)=>({...prev,[itemsId]: newAmount}))
  }

  const contextValue = { cartItems, addToCart, removeToCart, updateCartItemCount };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
