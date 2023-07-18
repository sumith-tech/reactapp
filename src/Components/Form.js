import React, { useState, useContext } from "react";
import CartContext from "../Store/cart-context";
const Form = (props) => {
  const [meds, setMeds] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [code, setCode] = useState("");

  const cartctx = useContext(CartContext);

  const medsHandler = (event) => {
    setMeds(event.target.value);
  };
  const descriptionHandler = (event) => {
    setdescription(event.target.value);
  };
  const priceHandler = (event) => {
    setprice(event.target.value);
  };

  const quantityhandler = (event) => {
    setQuantity(event.target.value);
  };

  const codeHandler = (event) => {
    setCode(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    const orderDetails = {
      id: code,
      medicine: meds,
      description: description,
      price: price,
      quantity: Quantity,
    };
    cartctx.addItem(orderDetails);
    console.log(orderDetails);
    setMeds("");
    setdescription("");
    setprice("");
    setQuantity("");
    setCode("");
  };

  return (
    <React.Fragment>
      <form onSubmit={onsubmitHandler}>
        <label>Product Code</label>
        <input
          type="number"
          value={code}
          onChange={codeHandler}
          required
        ></input>
        <label>Medicine</label>
        <input type="text" value={meds} onChange={medsHandler} required></input>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={descriptionHandler}
          required
        ></input>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={priceHandler}
          required
        ></input>
        <label>Quantity</label>
        <input
          type="number"
          value={Quantity}
          onChange={quantityhandler}
          required
        ></input>
        <button type="submit">Add product</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
