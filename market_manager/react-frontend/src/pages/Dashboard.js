import React, { Component } from "react";
import ChartGrid from "../components/ChartGrid";
import { UilPlus } from '@iconscout/react-unicons';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="plus-btn d-flex align-items-center justify-content-center">
                <UilPlus color="white" size="40"/>
                </div>
                <ChartGrid/>
            </div>
        );
    }
}

export default Dashboard