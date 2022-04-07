import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import { Nav, Navbar, Form, Button, Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
// import theNavbar from "./theNavbar";
import Navbar from "./Components/theNavbar";
import Footer from "./Components/theFooter";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/Sign_In";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import News from "./Pages/News";
import NotFound from "./Pages/NotFound";

function App() {
  return (

  
      <div className="App">
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
      </div>

     

    



  );
}

export default App;
