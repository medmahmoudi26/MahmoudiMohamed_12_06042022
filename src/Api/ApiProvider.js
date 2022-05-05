import axios from 'axios';
import ApiFormatter from './ApiFormatter';

class ApiProvider {
    constructor() {
        this.baseUrl = "http://localhost:3000";
    }
    
    // fetch user main information from api
    async getMainData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}`;

        await axios.get(url)
        .then((response) => {
            data = ApiFormatter.getMainDataFormat(response);
        })

        return data;
    }

    // fetch user daily activity
    async getUserDailyActivityData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/activity`;

        await axios.get(url)
        .then((response) => {
            data = ApiFormatter.getDailyActivityDataFormat(response);
        })

        return data;
    }

    // fetch user average session data
    async getUserAverageSessionData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/average-sessions`;

        await axios.get(url)
        .then((response) => {
            data = ApiFormatter.getUserAverageDataFormat(response);
        })

        return data;
    }

    // fetch user performance data
    async getUserPerformanceData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/performance`;

        await axios.get(url)
        .then((response) => {
            data = ApiFormatter.getPerformanceAverageDataFormat(response);
        })

        return data;
    }
}

export default ApiProvider

