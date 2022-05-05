import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import { Component } from "react";

class ChartRadar extends Component {
    render () {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={this.props.performanceAverageData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis 
                        dataKey="subject" 
                        stroke="white"
                        tickLine={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 500,
                        }} 
                        />
                    <Radar dataKey="value" 
                        fill="#ff0101"
                        fillOpacity={0.7}
                        stroke="transparent" 
                    />
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}

export default ChartRadar;