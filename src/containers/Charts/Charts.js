import ApiProvider from '../../Api/ApiProvider';
import React, {Component} from 'react';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import DailyActivity from '../../containers/DailyActivity/DailyActivity';
import Welcome from '../../components/Welcome/Welcome';

// Icons
import calories from '../../assets/macroTracker/calories.png';
import protein from '../../assets/macroTracker/protein.png';
import carbohydrates from '../../assets/macroTracker/carbohydrates.png';
import lipids from '../../assets/macroTracker/lipids.png';

// Charts
import Tracker from '../../components/Tracker/Tracker';
import PerformanceAverage from '../PerformanceAverage/PerformanceAverage';
import SessionsAverage from '../SessionAverage/SessionAverage';
import GoalScore from '../GoalScore/GoalScore';

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
                {this.getCharts()}
                {this.getTrackerSection()}
            </section>
        )
    }

    getCharts = () => {
        return (
            <section className="chartsHorizontal">
                <SessionsAverage id={this.state.id} />
                <PerformanceAverage id={this.state.id} />
                <GoalScore 
                    goalScoreData={this.state.goalScoreData} 
                    goalScorePercentage={this.state.goalScorePercentage} 
                />
            </section>
        )
    }

    getTrackerSection = () => {
        return (
            <section className="chartsVertical">
                {/* CALORIES */}
                <Tracker 
                    data={this.state.macroTrackerData.calorieCount / 1000} // devide by 1000 for a propoer format
                    icon={calories} 
                    unitOfMeasure="kCal" 
                    name="Calories"
                />
                {/* PROTEIN */}
                <Tracker 
                    data={this.state.macroTrackerData.proteinCount}
                    icon={protein} 
                    unitOfMeasure="g" 
                    name="Protéines"
                /> 
                {/* CARBOHYDRATES */}
                <Tracker 
                    data={this.state.macroTrackerData.carbohydrateCount}
                    icon={carbohydrates} 
                    unitOfMeasure="g" 
                    name="Glucides"
                />
                {/* LIPIDS */}
                <Tracker 
                    data={this.state.macroTrackerData.lipidCount}
                    icon={lipids} 
                    unitOfMeasure="g" 
                    name="Lipides"
                />
            </section>
        )
    }
}

export default Charts;