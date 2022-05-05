import './Tracker.css'
import React, {Component} from 'react';

class Tracker extends Component {
    render() {
        return (
            <div className="macroTracker">
                <div className={'macroTrackerContainerImg' + this.props.name} >
                    <img className={'macroTrackerImg' + this.props.name} src={this.props.icon} alt=""/>
                </div>
                <div className="macroTrackerTxt">
                    <p className="macroTrackerQuantity">{this.props.data} {this.props.unitOfMeasure}</p>
                    <p className="macroTrackerType">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default Tracker;