import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, Button, Container } from 'react-bootstrap';


function App() {
  return (

    <div className="App">

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
        {/* </div> */}
      </Navbar>

      <Container className="mt-5 pt-5">
        <h1 id="formHeader" className="d-flex justify-content-center">Create An Account</h1>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control type="password" placeholder="Repeat Password"/>
          </Form.Group>
          <div className="d-flex justify-content-between align-items-center" >
            <a href="Sign_In.js" id="signInLink">Already have an account? Sign in!</a>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          </div>
          
        </Form>
      </Container>
    </div>


  );
}

export default App;
