import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Container className="header">
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Navbar.Brand className="shop-name" as={Link} to="/home">TECH-ZONE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto routes">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                    <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
                    <Link to="/login">
                        <button className="login-btn">Login</button>
                    </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;