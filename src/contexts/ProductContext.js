import React, { createContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

// Initial state
const initialState = {
  products: [
    {
      id: 1,
      title: "Product title 1",
      price: "200"
    },
    {
      id: 2,
      title: "Product title 2",
      price: "300"
    }
  ]
};

export const ProductContext = createContext(initialState);

const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Actions
  const removeProduct = id => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id
    });
  };

  const addProduct = product => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product
    });
  };

  return (
    <ProductContext.Provider
      value={{ products: state.products, addProduct, removeProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
