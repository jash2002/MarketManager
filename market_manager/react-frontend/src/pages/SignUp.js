// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from '../API/Axios';
import { useNavigate } from "react-router-dom";


const LOGIN_URL = '/api/signup';

const SignUp = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.email.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;
        if (!(password == password2)) {
            alert("Passwords do not match");
            return;
        }
        const tickers = "AAPL,IBM";
        try {
            const response = await axios.post(LOGIN_URL,JSON.stringify({username, email, password, tickers}),
            {
              headers: {
                'Content-Type':'application/json'},
                'Access-Control-Allow-Origin': '*',
            });
            const message = response?.data?.message;
            alert(message);
            navigate("/signIn");
        } catch (err) {
            const message = err?.response?.data?.message;
            alert(message);
        }
    }

    return (
        <Container className="mt-5 pt-5 sign-up-page">
            <h1 id="formHeader" className="d-flex justify-content-center">Create An Account</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control name="password2" type="password" placeholder="Repeat Password" />
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