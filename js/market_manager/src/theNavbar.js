import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";


const theNavbar = () => {
    return (
        // <h1>Hi</h1>
        
            
            <Navbar bg="mmColour" fixed="top" variant="light" expand="sm" collapseOnSelect
                className="px-2">
                <Navbar.Brand id="navBrand" className="px-2">MarketManager</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav variant="dark">
                        <Nav.Link href="#">Home</Nav.Link>
                        <NavLink to="#">My Account</NavLink>
                        <Nav.Link href="#">Help</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
        </Navbar>
       
    );
}

export default theNavbar;