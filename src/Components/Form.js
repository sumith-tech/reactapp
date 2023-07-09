import React, { useState } from "react";

const Form = (props) => {
  const [orderid, setOrderid] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");

  const orderHandler = (event) => {
    setOrderid(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const productHandler = (event) => {
    setProduct(event.target.value);
  };

  const onsubmitHandler = (event) => {
   event.preventDefault();
   const orderDetails = {
     expenseamount: price,
     description: product,
     id: orderid,
   };
   localStorage.setItem(orderid, JSON.stringify(orderDetails));

    props.onSaveData(orderid, price, product);
    setOrderid("");
    setPrice("");
    setPrice("");
  };

  return (
    <React.Fragment>
      <form onSubmit={onsubmitHandler}>
        <label>Order id</label>
        <input type="number" onChange={orderHandler}></input>
        <label>Selling Price</label>
        <input type="number" onChange={priceHandler}></input>
        <label>Product Name</label>
        <input type="text" onChange={productHandler}></input>
        <button type="submit">Add product</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
