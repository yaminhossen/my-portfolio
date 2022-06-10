import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Web Developer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' as={Link} to="home">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="about">About Me</Nav.Link>
                            <Nav.Link href="#deets"><a className='text-decoration-none text-primary' target='blank' href="https://drive.google.com/file/d/1nAPUpqdYsfgoV30K6OHY6X6N77YW22Vp/view?usp=sharing">Download Resumi</a></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;