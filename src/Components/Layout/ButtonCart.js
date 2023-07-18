import { useContext } from "react";
import CartContext from "../../Store/cart-context";
const ButtonCart = (props) => {
  const cartctx = useContext(CartContext);
  let numberofCartItems = 0;
  cartctx.items.forEach((item) => {
    numberofCartItems = numberofCartItems + Number(item.quantity);
  });

  return (
    <button onClick={props.onClick} >
      <span >Your Cart</span>
      <span>{numberofCartItems}</span>
    </button>
  );
};
export default ButtonCart;
