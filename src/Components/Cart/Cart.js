import {React, useContext,useState, useEffect} from "react";
// import { Button } from "react-bootstrap";
import CartItems from "../Cart/CartItem";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const [showCartItem, setShowCartItem] = useState(false);

    useEffect(()=>{
        if(cartCtx.items.length>0){
            setShowCartItem(true);
        } else {
            setShowCartItem(false);
        }
    }, [cartCtx.items.length])
  return (
    <Modal>
       <div className={classes.header}>
        <h3>Cart Items</h3>
        {!showCartItem && <h6>Your Cart is Empty!</h6>}
        {showCartItem && <CartItems />}
      </div>
    </Modal>
  );
};

export default Cart;