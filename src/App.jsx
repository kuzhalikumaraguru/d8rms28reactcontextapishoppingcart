import React from "react";
import ShoppingCart from './components/shoppingCart';
import CartContextComponent from "./utils/cartContextComponent";
function App() {
  return (
    <CartContextComponent>
        <ShoppingCart />
    </CartContextComponent>
  );
}

export default App;
