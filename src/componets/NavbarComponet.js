import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoPotato from "../img/potato.png"
import "./NavbarComponet.css"

export default function NavbarComponet(){
    return(
        <div>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="contenidoLogo" href="#">
          <img className="logoPotato_var" src={logoPotato} alt="LogoPotato"/>
          <h3>Potato-Soft</h3>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
          <Navbar.Brand href="#home">Iniciar Sesion</Navbar.Brand>
          <Navbar.Brand href="#home">Registrar</Navbar.Brand>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
    
}