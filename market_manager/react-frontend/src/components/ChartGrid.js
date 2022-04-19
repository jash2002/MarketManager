import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ChartCard from './ChartCard';

export default function ChartGrid(props) {

    //  QUERY REST API TO GET USER TICKERS
    const tickers = props.tickers;

    const getColumnsForRow =()=> {
        let items = tickers.map((newTicker) => {
            return (
                <Col style={{margin: 0}}>
                    <ChartCard ticker = {newTicker}/>
                </Col>
            );
        });
        return items;
    };

    return (
        <div>
            <Container fluid style={{margin: 0}}>
                <Row xs = {1} md = {2} style={{margin: 0}}>
                    {getColumnsForRow()}
                </Row>
            </Container>
        </div>
    );
};