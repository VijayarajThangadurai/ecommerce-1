import React from "react";
import { Container,Nav, Navbar } from "react-bootstrap";
import classes from "./Footer.module.css";
const Footer =(props)=>{
return(
    <>
    <Navbar bg="primary" data-bs-theme="dark" float="bottom">
<Container>
    <Navbar.Brand href="/" style={{fontWeight:'bold'}}>The Generics</Navbar.Brand>
    <Container className={classes.footcon}>
        <Nav className="auto">
            <Nav.Link href="https://www.youtube.com/">
                <img src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png" 
                className={classes.ytimg}/>
                Youtube
            </Nav.Link>
            <Nav.Link  href="https://spotify.com/" className={classes.stycon}>
                <img
                  src="https://blog.boostcollective.ca/hs-fs/hubfs/Spotify%20Transparent%20Logo%202000x2000.png?width=600&name=Spotify%20Transparent%20Logo%202000x2000.png"
                  className={classes.styimg}
                />
                Spotify
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/">
                <img
                  className={classes.fbimg}
                  src="https://p7.hiclipart.com/preview/184/147/597/facebook-computer-icons-social-media-social-networking-service-scalable-vector-graphics-facebook-f-logo-white-background.jpg"
                />
                Facebook
              </Nav.Link>
        </Nav>
    </Container>
</Container>
    </Navbar>
    </>
)
}

export default Footer;