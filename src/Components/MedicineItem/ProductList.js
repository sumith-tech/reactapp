import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import ProductItem from "./ProductItem";
const ProductList = (props) => {
  const cartCtx = useContext(CartContext);

  const medicineList = cartCtx.items.map((products) => (
    <ProductItem
    id={products.id}
    key={products.id}
    name={products.name}
    description={products.description}
    price={products.price}
  />
  ));

  return (
    <React.Fragment>
      <ul>{medicineList}</ul>
    </React.Fragment>
  );
};

export default ProductList;
