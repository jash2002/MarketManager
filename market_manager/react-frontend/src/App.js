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
<<<<<<< HEAD:js/market_manager/src/App.js
import Navbar from "./Components/theNavbar";
import Footer from "./Components/theFooter";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/Sign_In";
import Home from "./Pages/Home";
import News from "./Pages/News";
import NotFound from "./Pages/NotFound";
import ForgotPassword from "./Pages/ForgottenPassword";
import EmailSent from "./Pages/EmailSent";
=======
import Navbar from "./components/theNavbar";
import Footer from "./components/theFooter";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Sign_In";
import Home from "./pages/Home";
import Help from "./pages/Help";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
>>>>>>> d792c401b8914f8bd4c055bc8d63eeb78c45023c:market_manager/react-frontend/src/App.js

function App() {
  return (
    <div className="App">

    {/* <div className="App"> */}
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signIn" element={<SignIn />}></Route>
        <Route exact path="/signUp" element={<SignUp />}></Route>
        <Route exact path="/forgottenPassword" element={<ForgotPassword />}></Route>
        <Route exact path="/emailSent" element={<EmailSent />}></Route>      
        <Route exact path="/news" element={<News />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;

