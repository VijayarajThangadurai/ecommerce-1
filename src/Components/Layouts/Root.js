import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const RootLayout = props =>{
return (
    <>
    <Header cartHandler={props.cartHandler}/>
    <Outlet/>
    </>
)
}

export default  RootLayout;