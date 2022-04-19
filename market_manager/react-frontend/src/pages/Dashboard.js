import React, { Component } from "react";
import ChartGrid from "../components/ChartGrid";
import { UilPlus } from '@iconscout/react-unicons';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

const Dashboard = () => {

    const { auth } = useContext(AuthContext);
    const tickers = auth.tickers.split(',');

    return (
        <div>
            <div className="plus-btn d-flex align-items-center justify-content-center">
            <UilPlus color="white" size="40"/>
            </div>
            <ChartGrid tickers={tickers}/>
        </div>
    );
}

export default Dashboard