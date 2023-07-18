import React, { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const additemhandler = (item) => {
    setItems([...items, item]);
  };

  const cartcontext = {
    items: items,
    addItem: additemhandler,
  };

  return <CartContext.Provider value={cartcontext}>
    {props.children}
  </CartContext.Provider>;
};
export default CartProvider;
