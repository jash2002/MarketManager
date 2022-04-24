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
                    text: "There is no data within the last 24hrs.\nPlease use another view."
                }
            },
            series: props.series,
            height: props.height,
            width: props.width
        };
    }

    
    componentDidUpdate(prevProps) {
        if (this.props.series !== prevProps.series) {
            //console.log("setting state")
            this.setState({series : this.props.series});
        }
    }

    render(){
        //console.log("Rendering chart...");
        //console.log(this.state.series);
        return (
            <div>
                <Chart
                options={this.state.options}
                series={this.state.series}
                type="candlestick"
                height={this.state.height}
                width={this.state.width}
                />
            </div>
        );
    }
}
export default CandleStickChart;