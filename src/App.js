import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Store from "./Components/Store/store";
// import { Button } from "react-bootstrap";
// import Header from "./Components/Layouts/Header";
import classes from "./App.module.css";
import CartProvider from "./Components/StoreContext/CartProvider";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Layouts/Root";
import Home from './Components/Home/Home';
import ContactUs from "./Components/Contact/ContactUs";
import Product from "./Components/Store/Product";
const ProductsArrs =[
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

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
        {path:"/", element: <Home/>},
        {path:"/store", element: <Store ProductsArr={ProductsArrs}/>},
        {path:"/about", element: <About/>},
        {path:"/contactus", element: <ContactUs/>},
        {
          path:'/store/:productId',
          element: <Product productsArr ={ProductsArrs}/>,
        }
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
