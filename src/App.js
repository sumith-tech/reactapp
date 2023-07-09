import React, { useState } from "react";
import Form from "./Components/Form";
import ProductList from "./Components/ProductList";


function App() {
  const [productList, setProductList] = useState([]);

  const saveData = (order, price, product) => {

    setProductList((pre) => {
      return [
        ...pre,
        {
          id: order,
          price: price,
          product: product,
        },
      ];
    });
  };

  const deleteProduct = (dltid) => {
    setProductList((current) =>
      current.filter((product) => product.id !== dltid)
    );
    localStorage.removeItem(dltid)
  };
  let value=0;
  for(let i=0;i<productList.length;i++){
    value=value+parseInt(productList[i].price)
  }
  console.log(value)
  

  return (
    <React.Fragment>
      <Form onSaveData={saveData}> </Form>
      <ProductList datalist={productList} ondeleteProduct={deleteProduct} totalamount={value} ></ProductList>
    </React.Fragment>
  );
}

export default App;
