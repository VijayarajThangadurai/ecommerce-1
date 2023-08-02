import React from "react";

const CartContext = React.createContext({
    items: [],
    addCartItem: (item)=>{},
    removeCartItem: (item)=>{},
    quantityChange: ()=> {},
    onLogout: ()=>{},
    onLogin:()=>{}
});

export default CartContext;