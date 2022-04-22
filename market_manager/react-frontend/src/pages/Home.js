import React, { Component, useEffect } from "react";
import ChartCard from '../components/ChartCard';
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { useNavigate } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h1 className="welcome">Welcome to MarketManager</h1>
            <h3 className="welcome-body">The simplest way to track your investments.</h3>
            <div className="start-button">
                <Button as={Link} to="./signIn" variant="primary" size="lg">Get Started</Button>
            </div>
        </div>
    );
}

export default Home;