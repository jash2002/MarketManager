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
import axios from '../API/Axios';

const UPDATE_URL = '/api/updatetickers';

const Dashboard = () => {

    //console.log("at dashboard");

    const [buttonPopup, setButtonPopup] = useState(false);
    //const [tickers, setTickers] = useState([]);
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const username = auth.username;
    const accessToken = auth.accessToken;
    var tickers = auth.tickers.split(',');
    //console.log(tickers);

    const GeneratePopUp = React.memo(() => (
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} id="the-popup">
            <Form onSubmit={handleSubmit}>
                <h3>Add a new asset</h3>
                <Form.Select class="form-select" aria-label="Default select example">
                    <option value="us" selected>US Stocks</option>
                    <option value="fx">Forex</option>
                </Form.Select>
                <h5 className="pt-4">What asset would you like to track</h5>
                <Form.Control size="lg" type="text" placeholder="Enter asset here" id="ticker-name" name="newTicker" />
                <div className="d-flex justify-content-end pt-4">
                    <Button variant="primary" size="lg" id="add-btn" type="submit">Add</Button>
                </div>
            </Form>
        </Popup>
    ));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTicker = e.target.newTicker.value;
        const API_KEY = '1342ec4264ea43d384a7ad5673a7d5ac'
        let API_Call = 'https://api.twelvedata.com/price?symbol='+newTicker+'&apikey='+API_KEY;
        //console.log(API_Call)
        fetch(API_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                var parsedResponse = JSON.parse(JSON.stringify(data))
                if (parsedResponse.status === "error") {
                    //console.log("error");
                    if (parsedResponse.code === 400) {
                        alert("Symbol not recognised or not supported.");
                    }
                    return;
                }
                else {
                    addTicker(newTicker);
                }
            }
        )
    }

    const addTicker = async (newTicker) => {
        //console.log("here");
        tickers.push(newTicker);
        const tickerString = tickers.toString();
        //console.log(tickers.toString());
        try {
            const response = await axios.post(UPDATE_URL,JSON.stringify({'accessToken':accessToken, 'tickers':tickerString}),
            {
              headers: {
                'Content-Type':'application/json'},
                'Access-Control-Allow-Origin': '*',
            });
            const message = response?.data?.message;
            alert(message);
            const tickers = tickerString
            setAuth({ username, tickers, accessToken})
            setButtonPopup(false);
            //setTickers(tickers);
            //navigate("/dashboard");
        } catch (err) {
            const message = err?.response?.data?.message;
            alert(message);
        }
    }

    return (
        <div>
            <div className="plus-btn d-flex align-items-center justify-content-center">
                <div onClick={() => setButtonPopup(true)}>
                    <UilPlus color="white" size="40" />
                </div>
            </div>
            <ChartGrid tickers ={tickers}/>
            <GeneratePopUp/>
        </div>
    );
}

export default Dashboard

