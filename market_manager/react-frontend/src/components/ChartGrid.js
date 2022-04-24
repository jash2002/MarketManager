import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ChartCard from './ChartCard';
import React, { Component } from "react";

class ChartGrid extends Component {

    //  QUERY REST API TO GET USER TICKERS
    //const tickers = props.tickers;
    
    constructor(props) {
        super(props);
        this.state = ({
            tickers : props.tickers
        })
    }

    // function equals(nextProps, currProps) {
    //     if (nextProps.tickers === currProps.tickers) {
    //         return true;
    //     } else {return false;};
    // };

    // shouldComponentUpdate(nextProps )
    //     return !equals(nextProps, this.props);
    // };

    getColumnsForRow() {
        //console.log("Rendering grid");
        let items = this.state.tickers.map((newTicker) => {
            return (
                <Col style={{margin: 0}}>
                    <ChartCard ticker = {newTicker}/>
                </Col>
            );
        });
        return items;
    };

    render() {
        return (
            <div>
                <Container fluid style={{margin: 0}}>
                    <Row xs = {1} md = {2} style={{margin: 0}}>
                        {this.getColumnsForRow()}
                    </Row>
                </Container>
            </div>
        );
    };
};

export default ChartGrid;