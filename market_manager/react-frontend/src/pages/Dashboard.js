import React, { Component, useState } from "react";
import { Dropdown, Form } from 'react-bootstrap';
import ChartGrid from "../components/ChartGrid";
import { UilPlus } from '@iconscout/react-unicons';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import Popup from '../components/Popup';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const { auth } = useContext(AuthContext);
    const tickers = auth.tickers.split(',');

    const handleSubmit = (e) => {
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
                <Form onSubmit={handleSubmit}>
                    <h3>Add a new asset</h3>
                    <Form.Select class="form-select" aria-label="Default select example">
                        <option value="us" selected>US Stocks</option>
                        <option value="fx">Forex</option>
                    </Form.Select>
                    <h5 className="pt-4">What asset would you like to track</h5>
                    <Form.Control size="lg" type="text" placeholder="Enter asset here" id="ticker-name" />
                    <div className="d-flex justify-content-end pt-4">
                        <Button variant="primary" size="lg" id="add-btn" type="submit">Add</Button>
                    </div>
                </Form>
            </Popup>
        </div>
    );
}

export default Dashboard

