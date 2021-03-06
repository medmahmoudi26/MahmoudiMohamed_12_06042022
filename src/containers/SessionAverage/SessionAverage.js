import ApiProvider from "../../Api/ApiProvider";
import ChartLine from "../../components/Charts/ChartLine";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import './SessionAverage.css';

class SessionsAverage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            userAverageData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserAverageSessionData(this.state.id)
        .then((response) => {
            this.setState({
                loading: false,
                userAverageData: response,
            });
        });
    }

    render() {
        return (
            <article className="sessionsLineChart">
                {this.getHeaderLineChart()}
                <ChartLine userAverageData = {this.state.userAverageData} />
            </article>
        )
    }

    // Build Header Line Chart 
    getHeaderLineChart = () => {
        return (
            <header>
                <h2 className="sessionsLineChartTitle">
                    Durée moyenne des
                        <br />
                    sessions
                </h2>
            </header>
        )
    }
}

SessionsAverage.propTypes = {
    id : PropTypes.string.isRequired,
}

export default SessionsAverage;
