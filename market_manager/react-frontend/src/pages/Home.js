import React, { Component } from "react";
import ChartCard from '../components/ChartCard';
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
// Hella home page headers to check how footer worked (lol)
            <div>
                <h1 className="welcome">Welcome to MarketManager</h1>
                <h3 className="welcome-body">The simplest way to track your investments.</h3>
                <div className="start-button">
                    <Button as={Link} to="./signIn" variant="primary" size="lg">Get Started</Button>
                </div>
            </div>
        );
    }
}

export default Home