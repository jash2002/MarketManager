import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import { Nav, Navbar, Form, Button, Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
// import theNavbar from "./theNavbar";
import Navbar from "./components/theNavbar";
import Footer from "./components/theFooter";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Sign_In";
import Home from "./pages/Home";
import Help from "./pages/Help";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">

    {/* <div className="App"> */}
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signIn" element={<SignIn />}></Route>
        <Route exact path="/signUp" element={<SignUp />}></Route>
        <Route exact path="/help" element={<Help />}></Route>
        <Route exact path="/news" element={<News />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;

