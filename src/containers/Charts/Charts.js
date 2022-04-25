import ApiProvider from '../../Api/ApiProvider';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ErrorModal from '../../components/ErrorModal/ErrorModal';
import Chart from '../../components/Chart/Chart';
import DailyActivity from '../../containers/DailyActivity/DailyActivity';
import Welcome from '../../components/Welcome/Welcome';

// Put assets here


class Charts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            welcomeData: null,
            goalScoreData: [],
            goalScorePercentage: 0,
            macroTrackerData: [],
        }

        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider.getMainData(this.state.id)
        .then((response) => {
            this.setState({
                welcomeData: response.firstName,
                goalScoreData: [
                    { name: "completed", value: response.userScore, fillColor: "#e60000" },
                    { name: "not-completed", value: 1 - response.userScore, fillColor: "transparent" },
                ],
                goalScorePercentage : response.userScore * 100,
                macroTrackerData: response.macroTracker,
                errorModal: false,
            });
        })
        .catch((error) => {
            this.setState({
                errorModal : true,
                message : error.message,
            })
        })
    }

    render() {
        return this.state.errorModal ? 
        (
            <ErrorModal message={this.state.message} />
        )
        : (
            <section className="charts">
                <Welcome welcomeData={this.state.welcomeData} />
                <DailyActivity id={this.state.id}/>
            </section>
        )
    }
}

export default Charts;