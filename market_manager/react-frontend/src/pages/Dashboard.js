import React, { Component, useState } from "react";
import { Dropdown, Form } from 'react-bootstrap';
import ChartGrid from "../components/ChartGrid";
import { UilPlus } from '@iconscout/react-unicons';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import Popup from '../components/Popup';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const { auth } = useContext(AuthContext);
    const tickers = auth.tickers.split(',');

    const handleClick = () => {
        console.log("lol")
    }

    return (
        <div>
            <div className="plus-btn d-flex align-items-center justify-content-center">
                <div onClick={() => setButtonPopup(true)}>
                    <UilPlus color="white" size="40" />
                </div>
            </div>
            <ChartGrid tickers={tickers} />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} id="the-popup">
                <h3>Add a new asset</h3>
                {/* https://stackoverflow.com/questions/57063568/react-select-drop-down-menu-change-default-text */}
                <select class="form-select" aria-label="Default select example">
                    <option value="us" selected>US Stocks</option>
                    <option value="fx">Forex</option>
                </select>
                <h5>What asset would you like to track</h5>
                <Form.Control size="lg" type="text" placeholder="Enter asset here" id="ticker-name" />
                <div className="d-flex justify-content-end">
                    <Button variant="primary" size="lg" id="add-btn">Add</Button>
                </div>

                {/* Dropdown for US Stock or Foreign Exchange */}
                {/* Blank text box for Stock/Forex*/}
                {/* Do not do want you want to trade */}
            </Popup>
        </div>
    );
}

export default Dashboard

