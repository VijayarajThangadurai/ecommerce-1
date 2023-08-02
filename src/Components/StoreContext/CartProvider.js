import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartContext from "./cart-context";
import {json} from 'react-router-dom';
import AuthContext from "./auth-context";
const CartProvider = props => {



    const [itemsArr, updateItemsArr] =useState([]);
     const authCtx = useContext(AuthContext);
     const reStore = async () =>{
        try{
            const email = authCtx.userEmail.replace(/[@.]/g,"");
            const res = await axios.get(`13a4e96961ab4e7bb6406704c7ff6b2a/cart${email}`);
            const resData = await res.data;
            let arr=[];
            resData.array.forEach(element => {
                if(element.cartItems.length !== 0){
                    arr.push(element.cartItems[0])
                }
                
            });
            updateItemsArr(arr);
        } catch (error){
            console.log('Something wrong on refresh');
        }
     }
     if(authCtx.isLoggedIn && itemsArr.length == 0){
        reStore();
     }
    const addCartItemHandler = (item) => {
        updateItemsArr([...itemsArr, item]);
        saveCartItemsToBackend(item);
    };

    const removeCartItemHandler =  async index => {
        
        const copyArr = [...itemsArr];
        let backendId;
        try{
            const email = authCtx.userEmail.replace(/[@.]/g, "");
            const res = await axios.get(`13a4e96961ab4e7bb6406704c7ff6b2a/cart${email}`)
          const resData = await res.data;
          resData.forEach(element=>{
            element.cartItems.forEach(cartItem=>{
                if(cartItem.id === copyArr[index].id){
                    backendId= element._id;
                }
            });
          });
        } catch(error){
            console.log('Product is not available on cart ');
        }
        copyArr.splice(index, 1);
        updateItemsArr(copyArr);
        try{
            const email = authCtx.userEmail.replace(/[@.]/g, "");
            const res = await axios.delete(`13a4e96961ab4e7bb6406704c7ff6b2a/cart${email}/${backendId}`);
          } catch(error) {
            console.log('Delete Error');
          }
    };

    const quantityChangeHandler = async eleId => {
        if(itemsArr.length>0){
          let backendId;
        try{
          const email = authCtx.userEmail.replace(/[@.]/g, "");
          const res = await axios.get(`13a4e96961ab4e7bb6406704c7ff6b2a/cart${email}`);
          const resData = await res.data;
          resData.forEach(element => { 
            element.cartItems.forEach(cartItem => {
              if (cartItem.id === eleId) {
                backendId = element._id;
              }
              // console.log(cartItem.id);
            });
          });
        } catch(error) {
          console.log('Product is not available on cart');
        }
        const copyArr = [...itemsArr];
        const index = copyArr.findIndex((obj) => obj.id === eleId);
        if (index !== -1) {
          copyArr[index].quantity += 1;
          //     console.log(copyArr[index].quantity);
        }
        try {
          const email = authCtx.userEmail.replace(/[@.]/g, "");
          const res = await axios.put(
            `13a4e96961ab4e7bb6406704c7ff6b2a/cart${email}/${backendId}`,
            {
              cartItems: [copyArr[index]],
            }
          );
        } catch (error) {
          console.log("Already updated");
        }
        updateItemsArr(copyArr);
    }
    };
    const saveCartItemsToBackend = async (item) => {
        try {
          const email = authCtx.userEmail.replace(/[@.]/g, "");
          const res = await axios.post(
            `13a4e96961ab4e7bb6406704c7ff6b2a/cart${email}`,
            {
              cartItems: [item],
            }
          );
          console.log("Cart items saved to backend:", res.data);
        } catch (error) {
          console.log("Error saving cart items to backend:", error);
        }
    }
    const cartContext = {
        items: itemsArr,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
        quantityChange: quantityChangeHandler
    };


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;