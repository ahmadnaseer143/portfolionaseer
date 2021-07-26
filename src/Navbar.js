import React from 'react'
import "./navbar.css";
import {AiOutlineArrowUp} from "react-icons/ai";
import { Navbar,Container,Nav } from 'react-bootstrap';
const Navbarr = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="logo text-light">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className="border-0 shadow-none"/>
                <Navbar.Collapse id="basic-navbar-nav" className="text-primary">
                    <Nav className="mx-auto w-lg-25">
                        <Nav.Link href="#home" className="text-light nav-links">Home</Nav.Link>
                        <Nav.Link className="text-light nav-links" href="#about">Projects</Nav.Link>
                        <Nav.Link className="text-light nav-links" href="#experience">Experience</Nav.Link>
                        <Nav.Link className="text-light nav-links" href="#education">Education</Nav.Link>
                        <Nav.Link className="text-light nav-links" href="#services">Services</Nav.Link>
                        {/* <Nav.Link className="text-light nav-links" href="#testimonials">Testimonials</Nav.Link> */}
                        <Nav.Link className="text-light nav-links" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="back-to-top">
                <li><a href="#home"><AiOutlineArrowUp/></a></li>
            </div>
        </Navbar>
    )
}

export default Navbarr
{/* <nav className="nav">
            <div className="logo">LOGO</div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="back-to-top">
                <li><a href="#home"><AiOutlineArrowUp/></a></li>
            </div>
        </nav> */}