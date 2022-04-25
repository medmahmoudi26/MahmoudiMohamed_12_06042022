import ApiProvider from "../../Api/ApiProvider";
import React, {Component} from 'react';

// Assets
import calories from '../../assets/macroTracker/calories.png';
import protein from '../../assets/macroTracker/protein.png';
import carbohydrates from '../../assets/macroTracker/carbohydrates.png';
import lipids from '../../assets/macroTracker/lipids.png';

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.state.id,
            welcomeData: null,
            goalScoreData: null,
            goalScorePercentage: null,
            macroTrackerData: [],
        }
        this.apiProvider = new ApiProvider();
    }
}

export default Chart;