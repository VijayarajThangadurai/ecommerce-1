import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Store from "./Components/store";
// import { Button } from "react-bootstrap";
// import Header from "./Components/Layouts/Header";
import classes from "./App.module.css";
import CartProvider from "./Components/Store/CartProvider";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Layouts/Root";

function App() {
 // const [storeVisible, setStoreVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  // const visibleStoreHandler = () => {
  //   setStoreVisible(true);
  // };

  const visibleCartHandler = () => {
    if(cartVisible === false){
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }

  };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout cartHandler = {visibleCartHandler}/>,
      children: [
        {path:"/store", element: <Store/>},
        {path:"/about", element: <About/>},
      ],
    },
  ]);
  return (
    <CartProvider>
      <div className={classes.con}>
        {/* <Header
          onClickStore={visibleStoreHandler}
          onClickCart={visibleCartHandler}
        />
        {storeVisible && <Store />} */}
        <RouterProvider router={route}/>
        {cartVisible && <Cart />}
      </div>
    </CartProvider>
  );
}

export default App;
