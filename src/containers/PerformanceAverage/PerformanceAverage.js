import ApiProvider from "../../Api/ApiProvider";
import {Component} from 'react';
import ChartRadar from '../../components/Charts/ChartRadar'
import './PerformanceAverage.css';

class PerformanceAverage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.id,
            performanceAverageData : [],
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider.getUserPerformanceData(this.state.id)
        .then((response) => {
            this.setState({
                performanceAverageData: response,
            });
        });
    }

    render () {
        return (
            <article className="performanceRadarChart">
                <ChartRadar performanceAverageData={this.state.performanceAverageData} />
            </article>
        )
    }
}

export default PerformanceAverage;