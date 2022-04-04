// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <Container className="mt-5 pt-5 sign-up-page">
            <h1 id="formHeader" className="d-flex justify-content-center">Create An Account</h1>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat Password" />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center" >
                    <Link to="/signIn" id="signInLink">Already have an account? Sign in!</Link>

                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </div>

            </Form>
        </Container>
    );
}

export default SignUp;