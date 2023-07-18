import React, { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Layout/Header";
import ProductList from "./Components/MedicineItem/ProductList";
import CartProvider from "./Store/CartProvider";
import Cart from "./Components/Cart/Cart";

function App() {
  const [showCart, setShowcart] = useState(false);

  const showCartHandler = () => {
    setShowcart(true);
  };
  const closeCartHandler = () => {
    setShowcart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onclose={closeCartHandler} />}
      <Header onshow={showCartHandler} />
      <Form />
      <ProductList />
    </CartProvider>
  );
}

export default App;
