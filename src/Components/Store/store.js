import {React, useContext} from "react";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import classes from "./store.module.css";
import { Link } from "react-router-dom";
import CartContext from "../StoreContext/cart-context";


   

const Store = (props) => {
    const cartCtx = useContext(CartContext);

    const clickHandler = (event) => {
      event.preventDefault();
      const eleIdx = event.target.parentElement.parentElement.id;
  
      if (cartCtx.items.length > 0) {
        let copy = [...cartCtx.items];
        copy = copy.filter((element) => element.id === eleIdx);
        if (copy.length > 0) {
          cartCtx.quantityChange(copy[0].id);
        } else {
          const ele = { id: eleIdx, ...props.productsArr[eleIdx], quantity: 1 };
          cartCtx.addCartItem({ ...ele });
        }
      } else {
        const ele = { id: eleIdx, ...props.productsArr[eleIdx], quantity: 1 };
        cartCtx.addCartItem({ ...ele });
      }
    };
    const p = "/store";
  return (
    <div style={{ textAlign: "center", paddingTop: "1rem" }}>
      <h3 style={{ paddingTop: "" }}>Album</h3>
  <Container className={classes.card}>
    <Row xs={1} md={2} className="g-8">

      {props.productsArr.map((item, idx)=>(
        <Col key={idx}>
           <Card 
           id={idx} 
           style={{ width: "20rem", backgroundColor: "#e4f2f2" }} 
           className="mt-3"
           >
            <Link to={p + item.title}>
            <Card.Title
              style={{ textAlign: "center", paddingTop: "0.5rem" }}
            >
              {item.title}
            </Card.Title>
            <Card.Img
              variant="top"
              src={item.imageUrl[0]}
              className={classes.img}
            />
            </Link>
            <Card.Body className={classes.body}>
              <Card.Text>${item.price}</Card.Text>
              <Button variant="info" onClick={clickHandler}>
                    Add to cart
                  </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</div>
);
};

export default Store;