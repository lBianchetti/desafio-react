import React, { createContext, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const sharedState = 'Hello from Context!';
  const itensNoCarrinho = [];

  const myFunction = () => {
    console.log('Function executed!');
  };



  return (
    <CartContext.Provider value={{ sharedState, itensNoCarrinho, myFunction }}>
      {children}
    </CartContext.Provider>
  );
};