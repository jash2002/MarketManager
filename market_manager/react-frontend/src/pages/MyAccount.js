import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import {Button} from 'react-bootstrap';
import { useEffect } from "react";

const MyAccount = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const signOut = () => {
        setAuth({});
        navigate("/");
    }

    useEffect(() => {
        if (auth.accessToken == undefined) {
            console.log("Not logged in, going to sign in");
            navigate("/signIn");
        }
    },[]);

    return (
        <div>
            <h1>{auth.username}</h1>
            <Button onClick={signOut} variant="primary" size="lg">Sign Out</Button>
        </div>
        
    );
}



export default MyAccount;