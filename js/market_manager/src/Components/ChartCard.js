import React, { Component } from "react";
import {Card, Nav, Button} from 'react-bootstrap';
import CandleStickChart from '../Components/CandleStickChart';

class ChartCard extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            APIparams: 'symbol='+props.ticker+'&date=today&interval=5min',
            ticker: props.ticker
        })
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(key) {
        var currentParams = 'symbol='+this.state.ticker
        var newAPIparams = ''
        switch (key) {
            case 'today':
                newAPIparams = currentParams.concat('&date=today&interval=5min')
                break;
            case '5days':
                newAPIparams = currentParams.concat('&interval=1h&outputsize=120')
                break;
            case '1month':
                newAPIparams = currentParams.concat('&interval=4h&outputsize=168')
                break;
            default:
                break;
        }
        this.setState({
            APIparams: newAPIparams
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first" onSelect={this.handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey='today' href="#first">Today</Nav.Link>
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
                        <CandleStickChart ticker='AAPL' APIparams={this.state.APIparams} height={450} width='100%'/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ChartCard