import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UilPlus } from '@iconscout/react-unicons'
import { useEffect, useContext } from 'react';
import UserComponent from '../components/UserComponent';
import AuthContext from '../context/AuthProvider';
import axios from '../API/Axios';
import { useNavigate } from "react-router-dom";

const LOGIN_URL = '/api/signin';


const Sign_In = () => {

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.accessToken != undefined) {
        console.log("Logged in, going to my account");
        navigate("/signIn");
    }
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await axios.post(LOGIN_URL,JSON.stringify({username, password}),
      {
        headers: {
          'Content-Type':'application/json'},
          'Access-Control-Allow-Origin': '*',
      });
      const accessToken = response?.data?.accessToken;
      const tickers = response?.data?.tickers;
      setAuth({ username, password, tickers, accessToken });
      navigate("/dashboard")
    } catch (err) {
      if (!err?.response) {
        alert('No Server Response');
        console.log(err);
      } else if (err.response?.status === 400) {
        alert('Missing Username or Password');
      } else if (err.response?.status === 401) {
        alert('Email or password is incorrect');
      } else {
        alert('Login Failed');
      }
    }
  }

  return (

    <div className="App">
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
            <div className="">
            <Link to="/signUp" id="signInLink">Don't have an account? Sign up!<br></br></Link>
            <Link to="/forgottenPassword" id="signInLink">Forgotten your password?</Link>
            </div>
            {/* <a href="Sign_Up.js" id="signInLink">Don't have an account? Sign up!</a> */}
            <Button variant="primary" type="submit">
              Sign In
              
            </Button>
            
          </div>

        </Form>
      </Container>
    </div>
  );
}

export default Sign_In;
