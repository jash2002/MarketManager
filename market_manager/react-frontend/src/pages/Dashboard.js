import React, { Component } from "react";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ChartCard ticker = 'AAPL'/>
                <ChartCard ticker = 'IBM'/>
            </div>
        );
    }
}

export default Dashboard