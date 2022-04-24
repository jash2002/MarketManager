import React, { Component } from "react";
import {Card, Nav, Button} from 'react-bootstrap';
import CandleStickChart from '../components/CandleStickChart';

class ChartCard extends Component {

    constructor(props) {
        super(props)
        var d = new Date()
        d.setDate(d.getDate()-1);
        this.state = ({
            APIparams: 'symbol='+this.props.ticker+'&start_date='+this.toAPIdateString(d)+'&interval=1min',
            ticker: props.ticker,
            series: [],
            type: 'time_series?',
        })
        this.handleSelect = this.handleSelect.bind(this)
        this.fetchStocksSeries(this.state.APIparams);
    }

    toAPIdateString(d) {
        var dateString = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
        return dateString;
    }

    handleSelect(key) {
        //console.log('handling select')
        var d = new Date()
        var currentParams = 'symbol='+this.state.ticker
        var newAPIparams = ''
        //console.log(key);
        switch (key) {
            case 'today':
                d.setDate(d.getDate()-1);
                newAPIparams = currentParams.concat('&start_date='+this.toAPIdateString(d)+'&interval=1min')
                break;
            case '5days':
                d.setDate(d.getDate()-5);
                newAPIparams = currentParams.concat('&start_date='+this.toAPIdateString(d)+'&interval=5min')
                break;
            case '1month':
                d.setDate(d.getDate()-28);
                newAPIparams = currentParams.concat('&start_date='+this.toAPIdateString(d)+'&interval=30min')
                break;
            default:
                break;
        }
        this.setState({
            APIparams: newAPIparams
        })
        this.fetchStocksSeries(newAPIparams);
        //console.log('State changed');
    }

    render() {
        //console.log("rendering...");
        return (
            <div style={{margin: 0}}>
                <Card style = {{width : '100%', padding:0, marginLeft:0, marginRight:0}}>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey='today' onSelect={this.handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey='today'>Today</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='5days'>5D</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='1month'>1M</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <CandleStickChart ticker={this.state.ticker} series={this.state.series} height={450} width='100%'/>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    /**
    * Fetch stock data to API and store in state.
    */
    fetchStocksSeries(APIparams) {
        /**
         * TODO: Fetch API key from backend.
         * Unsafe to really store in React files, and have it on github.
         * For now, copy from discord, and remove before commiting.
         */
        const API_KEY = '1342ec4264ea43d384a7ad5673a7d5ac'
        let API_Call = 'https://api.twelvedata.com/'+this.state.type+APIparams+'&apikey='+API_KEY;
        const that = this;
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
                    if (parsedResponse.code === "429") {
                        alert("Data limit reached. Please wait 60 secs.");
                    }
                    return;
                }
                const parsedData = parsedResponse.values
                var formattedData = []
                // Reformat data into date and floats.
                for (var currentInterval in parsedData) {
                    formattedData.push(
                        [
                            +new Date(parsedData[currentInterval].datetime),
                            parseFloat(parsedData[currentInterval].open),
                            parseFloat(parsedData[currentInterval].high),
                            parseFloat(parsedData[currentInterval].low),
                            parseFloat(parsedData[currentInterval].close)
                        ]
                    )
                }
                const newData = [{data: formattedData}]
                // Update data for graph.
                that.setState({series: newData});
            }
        )
    }
}

export default ChartCard