import React, { Fragment } from "react";
import ButtonCart from "./ButtonCart";
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>Indian Pharma</h1>
        <ButtonCart onClick={props.onshow} />
      </header>
    </Fragment>
  );
};
export default Header;
