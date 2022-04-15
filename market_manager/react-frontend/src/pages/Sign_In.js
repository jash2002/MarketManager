// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useEffect, useContext } from 'react';

import UserComponent from '../components/UserComponent';


function Sign_In() {


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  }

  return (

    <div className="App">

      

      {/* 
      The commented code below was the original navbar, don't think we need it but keeping it there incase

      <Navbar bg="mmColour" fixed="top" variant="light" expand="sm" collapseOnSelect
        className="px-2">
        <Navbar.Brand id="navBrand" className="px-2">MarketManager</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav variant="dark">
            <Nav.Link href="#" variant="primary">Home</Nav.Link>
            <Nav.Link href="#">My Account</Nav.Link>
            <Nav.Link href="#">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}

      <Container className="mt-5 pt-5 sign-in-page">
        <h1 id="formHeader" className="d-flex justify-content-center">Sign In</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-flex justify-content-between align-items-center" >
            <Link to="/signUp" id="signInLink">Don't have an account? Sign up!</Link>
            {/* <a href="Sign_Up.js" id="signInLink">Don't have an account? Sign up!</a> */}
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </div>

        </Form>
      </Container>

      <UserComponent />
    </div>
  );
}

export default Sign_In;
