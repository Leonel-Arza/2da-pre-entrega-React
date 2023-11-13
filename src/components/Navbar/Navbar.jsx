import React from 'react';
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar({links}) {


    return (
        <>
        <h1 className='titulo'>Libre Mercado</h1>
            <Navbar bg="primary" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Motos">Motos</Nav.Link>
                        <Nav.Link href="#Scooters">Scooters</Nav.Link>
                        <Nav.Link href="#Bicicletas">Bicicletas</Nav.Link>
                        <Nav.Link href="#Autos">Autos</Nav.Link>
                        <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
                        <Nav.Link href="#Contacto">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;