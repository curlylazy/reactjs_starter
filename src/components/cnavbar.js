/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class CNavBar extends Component {
    render() {
        return <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/listonline">List JSON Online</Nav.Link>
                <Nav.Link href="/list">Data User</Nav.Link>
                <Nav.Link href="/add">Tambah User</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}
  
export default CNavBar;
