import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Store from "./Components/store";
// import { Button } from "react-bootstrap";
import Header from "./Components/Layouts/Header";
import classes from "./App.module.css";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [storeVisible, setStoreVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  const visibleStoreHandler = () => {
    setStoreVisible(true);
  };

  const visibleCartHandler = () => {
    if(cartVisible === false){
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }

  };
  return (
    <CartProvider>
      <div className={classes.con}>
        <Header
          onClickStore={visibleStoreHandler}
          onClickCart={visibleCartHandler}
        />
        {storeVisible && <Store />}
        {cartVisible && <Cart />}
      </div>
    </CartProvider>
  );
}

export default App;
