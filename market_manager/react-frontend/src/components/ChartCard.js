import React, { Component } from "react";
import {Card, Nav, Button} from 'react-bootstrap';
import CandleStickChart from '../components/CandleStickChart';

class ChartCard extends Component {

    constructor(props) {
        super(props)
        var d = new Date()
        d.setDate(d.getDate()-1);
        this.state = ({
            APIparams: 'symbol='+this.props.ticker+'&start_date='+this.toAPIdateString(d)+'&interval=5min',
            ticker: props.ticker
        })
        this.handleSelect = this.handleSelect.bind(this)
    }

    toAPIdateString(d) {
        var dateString = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
        return dateString;
    }

    handleSelect(key) {
        console.log('handling select')
        var d = new Date()
        var currentParams = 'symbol='+this.state.ticker
        var newAPIparams = ''
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
    }

    render() {
        return (
            <div>
                <Card width='100%'>
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
                        <CandleStickChart ticker={this.state.ticker} APIparams={this.state.APIparams} height={450} width='100%'/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ChartCard