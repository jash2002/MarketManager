import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import { UilPlus } from '@iconscout/react-unicons'
// import { Nav, Navbar, Form, Button, Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
// import theNavbar from "./theNavbar";
import Navbar from "./components/theNavbar";
import Footer from "./components/theFooter";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Sign_In";
import Home from "./pages/Home";
import News from "./pages/News";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgottenPassword";
import EmailSent from "./pages/EmailSent";
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthProvider';
import AuthContext from './context/AuthProvider';
import {useContext, createContext} from 'react';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';


function App() {

  const { auth, setAuth } = useContext(AuthContext);

  return (
    <div className="main-container">

    {/* <div className="App"> */}
      <Navbar />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route exact path="/" element={<Home />}/>
            <Route element={<RequireAuth/>}>
              <Route exact path="dashboard" element={<Dashboard />}/>
              <Route exact path="myAccount" element={<MyAccount />}/>
            </Route>
            <Route exact path="signIn" element={<SignIn />}/>
            <Route exact path="signUp" element={<SignUp />}/>
            <Route exact path="forgottenPassword" element={<ForgotPassword />}/>
            <Route exact path="emailSent" element={<EmailSent />}/>     
            <Route exact path="news" element={<News />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
      </Routes>
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;

