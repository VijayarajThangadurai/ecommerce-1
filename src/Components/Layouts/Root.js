import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import Home from "../Home/Home";
const RootLayout = (props) =>{
return (
    <>
    <Header cartHandler={props.cartHandler}/>
    {/* <Home/> */}
    <Outlet/>
    <Footer/>
    </>
)
}

export default  RootLayout;