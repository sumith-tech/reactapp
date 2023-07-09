import React from "react";

const ProductList = (props) => {
  const deletehandler = (id) => {
    props.ondeleteProduct(id.target.id);
  };

  return (
    <React.Fragment>
      <ul>
        {props.datalist.map((products) => (
          <li key={products.id}>
            {products.product} {products.price}
            <button type="button" onClick={deletehandler} id={products.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Total Order Value {props.totalamount}</h2>
    </React.Fragment>
  );
};

export default ProductList;
