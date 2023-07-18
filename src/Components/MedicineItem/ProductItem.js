import React from "react";
const ProductItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const addtoCartHandler = (event) => {
    event.preventDefault();
    // cartctx.addItem({ ...props.item, quantity: quantity });
  };
  return (
    <li >
      <div>
        <h3 >{props.name}</h3>
        <div >{props.description}</div>
        <div >{price}</div>
      </div>
      <div>
    <button type="button" onClick={addtoCartHandler}></button>
      </div>
    </li>
  );
};

export default ProductItem;
