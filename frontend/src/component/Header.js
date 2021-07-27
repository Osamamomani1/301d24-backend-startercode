import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <>
             <Navbar bg="dark" variant="dark">
               <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>  
                <Nav className="me-auto">
                <Nav.link href="/">Home</Nav.link>
                <Nav.link href="/fav">Favorite coffee</Nav.link>
                </Nav> 
                </Container>  
            </Navbar>   
            </>
        )
    }
}

export default Header
