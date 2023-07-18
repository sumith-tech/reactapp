import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const hasitem = cartctx.items.length > 0;

  // const cartItemRemoveHandler = (id) => {
  //   cartctx.removeItem(id);
  // };
  // const cartItemAddHandler = (item) => {
  //   console.log(item);
  //   cartctx.addItem({ ...item, quantity: 1 });
  // };
  const OrderItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.medicine}
          quantity={item.quantity}
          price={item.price}
          // onRemove={cartItemRemoveHandler.bind(null, item.id)}
          // onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  let totalamount = 0;
  cartctx.items.forEach((item) => {
    totalamount = totalamount + item.price * Number(item.quantity);
  });
  totalamount = totalamount.toFixed(2);

  return (
    <Modal onClick={props.onclose}>
      {OrderItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclose}>
          Close
        </button>
        {hasitem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
