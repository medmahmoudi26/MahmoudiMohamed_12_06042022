import React, {Component} from 'react';
import ChartBar from '../../components/Charts/ChartBar';
import ApiProvider from '../../Api/ApiProvider';
import './DailyActivity.css'

class DailyActivity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dailyActivityData : [],
            mininumYaxisKg : 0,
            maximumYaxisKg : 0,
            minimumYaxisKcal : 0,
            maximumYaxisKcal : 0,
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider.getUserDailyActivityData(this.props.id)
        .then((response) => {
            this.setState({
                dailyActivityData: response.data,
                mininumYaxisKg: response.minimumYaxisKg,
                maximumYaxisKg: response.maximumYaxisKg,
                minimumYaxisKcal: response.minimumYaxisKcal,
                maximumYaxisKcal: response.maximumYaxisKcal,
            });
        });
    }

    render() {
        return (
            <section className='barChart'>
                {this.getHeaderBarChart()}
                <ChartBar 
                dailyActivityData = {this.state.dailyActivityData}
                minimumYaxisKcal  = {this.state.minimumYaxisKcal}
                maximumYaxisKcal  = {this.state.maximumYaxisKcal}
                minimumYaxisKg    = {this.state.mininumYaxisKg}
                maximumYaxisKg    = {this.state.maximumYaxisKg}
                />
            </section>
        )
    }

    getHeaderBarChart = () => {
        return (
            <header className="barChartHeader">
                <h2>Activité quotidienne</h2>
                <div className="barChartLegend">
                    <div className="header-elt">
                        <i className="fas fa-circle black"></i>
                        <span >Poids (kg)</span>
                    </div>
                    <div className="header-elt">
                        <i className="fas fa-circle red"></i>
                        <span>Calories brûlées (kCal)</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default DailyActivity;