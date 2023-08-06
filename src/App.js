import React, { lazy, Suspense, useState, useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import classes from "./App.module.css";
import CartProvider from "./Components/StoreContext/CartProvider";
import RootLayout from "./Components/Layouts/Root";
import Home from './Components/Home/Home';
import AuthContext from "./Components/StoreContext/auth-context";
const productsArrs =[
  {
    title: "Colors",
    price: 100,
    imageUrl:[ 
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"],

      des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:[ "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: ["https://prasadyash2411.github.io/ecom-website/img/Album%203.png",],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: ["https://prasadyash2411.github.io/ecom-website/img/Album%204.png",],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },
];

const About = lazy(() => import("./Components/About/About"));
const Store = lazy(() => import("./Components/Store/store"));
const Login = lazy(() => import("./Components/Login/Login"));
const ContactUs = lazy(() => import("./Components/Contact/ContactUs"));
const Product = lazy(() => import("./Components/Store/Product"));

function App() {
 // const [storeVisible, setStoreVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const authCtx = useContext(AuthContext);


  const visibleCartHandler = () => {
    if(cartVisible === false){
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }

  };

  const clickHandler=()=>{
    if(cartVisible===true){
      setCartVisible(false);
    }
  };
  return (
    <CartProvider>
      <div className={classes.con} onClick={clickHandler}>
      <Routes>
      <Route
            path="/"
            element={<RootLayout cartHandler={visibleCartHandler} />}
          >
            <Route index element={<Home />} />
            <Route
              path="store"
              element={
                authCtx.isLoggedIn ? (
                  <Suspense fallback={<p>Loading...</p>}><Store productsArr={productsArrs} /></Suspense>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <About />
                </Suspense>
              }
            />
            <Route path="contactus" element={<Suspense fallback={<p>Loading...</p>}><ContactUs /></Suspense>} />
            <Route path="login" element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />
            <Route
              path="store/:productId"
              element={<Suspense fallback={<p>Loading...</p>}><Product productsArr={productsArrs} /></Suspense>}
            />
          </Route>
        </Routes>
        {cartVisible && <Cart />}
      </div>
    </CartProvider>
  );
}

export default App;
