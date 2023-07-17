import React from "react";
import CartContext from "../StoreContext/cart-context";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import {Link, useLocation} from 'react-router-dom';
import classes from './Header.module.css'
import { useContext } from "react";


const Header = (props) => {
const location = useLocation();
    const cartCtx = useContext(CartContext);

    let cartCount = 0;
  
    // cartCtx.items.forEach(element => {
    //     cartCount += Number(element.quantity);
    // })

    // const clickStoreHandler = (event) => {
    //   event.preventDefault();
    //   props.onClickStore();
    // };
  
    cartCtx.items.forEach((element)=>{
      cartCount+= Number(element.quantity);
    });

    const cartClickHandler = (event) => {
      event.preventDefault();
      // props.onClickCart();
      props.CartHandler();
    };
  
    const isStoreVisible = location.pathname === "/store";
    return (
      <Navbar className={classes.nav} bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/" className={classes.brand}>
            The Genrics
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="jds.com" onClick={clickStoreHandler}>
              Store
            </Nav.Link>
            <Nav.Link href="/">About</Nav.Link> */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contactus">ContactUs</Nav.Link>

          </Nav>
         {isStoreVisible && (<Button variant="outline-warning" onClick={cartClickHandler}>
          Cart {cartCount}
        </Button>)}
        </Container>
      </Navbar>
    );
  };
export default Header;