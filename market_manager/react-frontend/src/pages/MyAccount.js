import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { Button } from 'react-bootstrap';
import { useEffect } from "react";

const MyAccount = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    var tickers = [];

    const signOut = () => {
        setAuth({});
        navigate("/");
    }

    useEffect(() => {
        if (auth.accessToken === undefined) {
            console.log("Not logged in, going to sign in");
            navigate("/signIn");
        } else {
            tickers = auth.tickers.split(',');
        }
    }, []);


    const tester = () => {
        let usersHour = new Date().getHours();
        if (usersHour >= 6 && usersHour < 12) { return "Good Morning"; }
        else if (usersHour >= 12 && usersHour < 17) { return "Good Afternoon"; }
        else if (usersHour >= 17 && usersHour < 20) { return "Good Evening"; }
        else { return "Good Night"; }
    }

    const separateTickers = () => {
        let tickersList = "";
        for(let i = 0; i < tickers.length; i++) {
            if(i == tickers.length - 1) {
                tickersList += tickers[i] + ".";
            } else {
                tickersList += tickers[i] + ", ";
            }
        }
        return tickersList
    }

    return (
        <div className="tester d-flex justify-content-center">
            <div className="card account-main">
                <div className="card-body account-body">
                    <div className="account-heading">
                        <h1 className="card-title d-flex justify-content-center">{tester()}</h1>
                        <h2 className="d-flex justify-content-center">{auth.username}</h2>
                    </div>
                    <div className="account-tickers pt-5">

                        <h3>The assets you are currently watching:</h3>
                        <div className="the-assets d-flex justify-content-center">
                            <h4>{separateTickers()}</h4>
                        </div>
                        {/* <p>Hi</p>
                        <ul>{separateTickers()}</ul> */}
                        
                    </div>
                    <div className="account-bottom d-flex justify-content-between px-2 pb-1">
                    <Button onClick={signOut} variant="danger" size="lg">Delete Account</Button>
                        <Button onClick={signOut} variant="primary" size="lg">Sign Out</Button>                        
                    </div>
                    {/* Delete account button */}


                </div>
            </div>

        </div>

    );
}



export default MyAccount;