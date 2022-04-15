import React from "react";
import Chart from "react-apexcharts";
/**
 * Component to query API and produce Candlestick Chart.
 * @component
 * @extends React.Component
 */
class CandleStickChart extends React.Component {
    /**
     * Set up new blank Candlestick chart.
     */
    constructor(props) {
        super(props);
        this.fetchStock = this.fetchStock.bind(this);
        this.state = {
            options: {
                chart: {
                    type: 'candlestick',
                    height: 350
                  },
                title: {
                    text: props.ticker,
                    align: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    tooltip: {
                      enabled: true
                    }
                },
                noData: {
                    text: "loading..."
                }
            },
            series: [],
            type: 'time_series?',
            APIparams: props.APIparams,
            height: props.height,
            width: props.width
        };
        this.fetchStock(this.state.APIparams)
    }

    /**
     * Fetch stock data to API and store in state.
     */
    fetchStock(APIparams) {
        /**
         * TODO: Fetch API key from backend.
         * Unsafe to really store in React files, and have it on github.
         * For now, copy from discord, and remove before commiting.
         */
        const API_KEY = ''
        let API_Call = 'https://api.twelvedata.com/'+this.state.type+APIparams+'&apikey='+API_KEY;
        const that = this;
        console.log(API_Call)
        fetch(API_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                var parsedData = JSON.parse(JSON.stringify(data.values))
                console.log(parsedData)
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
                console.log(formattedData)
                const newData = [{data: formattedData}]
                // Update data for graph.
                that.setState({series: newData});
            }
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.APIparams !== prevProps.APIparams) {
            this.fetchStock(this.props.APIparams)
        }
    }

    render(){
        return (
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="candlestick"
              height={this.state.height}
              width={this.state.width}
            />
        );
    }
}
export default CandleStickChart;