// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ForgottenPassword = () => {
    return (
        <Container className="mt-5 pt-5 sign-up-page">
            <h1 id="formHeader" className="d-flex justify-content-center">Forgotten Password</h1>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center" >
                    <Link to="/signIn" id="signInLink">Remember your password? Sign in!</Link>

                    <Link to="/emailSent">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Link>
                </div>

            </Form>
        </Container>
    );
}

export default ForgottenPassword;