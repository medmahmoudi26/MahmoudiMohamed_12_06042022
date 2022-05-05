import React, {Component} from 'react';
import './CustomTooltipDailyActivities.css'

class CustomTooltipDailyActivity extends Component {
    render() {
        const { payload, active } = this.props;

        if (active && payload) {
            return (
                <div className="tooltipContainer">
                    <p className="tooltipLine black">
                        {`${payload[0].value} kg`}
                    </p>
                    <p className="tooltipLine red">
                        {`${payload[1].value} kCal`}
                    </p>
                </div>
            );
        }
        return null;
    }
}

export default CustomTooltipDailyActivity;