import React from "react";
import { useContext } from "react";

import classes from "./CartItems.module.css";
import CartContext from "../Store/cart-context";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const CartItems = (props) => {
    const cartCtx = useContext(CartContext);

    let total = 0;
    cartCtx.items.forEach((element) => {
      total += Number(element.price) * Number(element.quantity);
    });
  
    const deleteHandler = (event) => {
      event.preventDefault();
      const eleIdx = event.target.id;
      cartCtx.removeCartItem(eleIdx);
      // ele.remove();
    };
  
    const changeQuantityhandler = (event) => {
        console.log(event.target.id);
    }
  return (
    <ul className={classes.itemcart}>
    
      <div className={classes.heading}>
        <span>ITEM</span>
        <span>Price</span>
        <span>Quantity</span>
      </div>
      {cartCtx.items.map((ele, idx) => (
        <li className={classes.list} key={idx}>
          <div>
            <img src={ele.imageUrl} />
            <span>{ele.title}</span>
          </div>
          <span>{ele.price}</span>
          <input type="number" step="1" value={ele.quantity} onChange={changeQuantityhandler} />
          <button id={idx} onClick={deleteHandler}>
            Remove
          </button>
        </li>
      ))}
       <div className={classes.footer}>
        <h5>Total</h5>
        <span>${total}</span>
      </div>
    </ul>
  );
};

export default CartItems;