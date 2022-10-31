import React, { useState } from "react";
import { Provider } from "./Context";
import Context from "./Context";

const CartContext = ({ children }) => {

 //estados, funciones, etc.
  
  return (
    
  <Provider value = {{children}}></Provider>
    
  );
};

export default CartContext;