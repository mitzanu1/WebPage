import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {



    return (
    <>
    <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/about">About Me</Nav.Link> */}
                    <NavDropdown title="My Applications" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="mitz-ballgame.netlify.app">BallGame</NavDropdown.Item>
                        <NavDropdown.Item href="/Chess">Chess</NavDropdown.Item>
                        <NavDropdown.Item href="Something/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    </>
    )
}

export default NavBar
