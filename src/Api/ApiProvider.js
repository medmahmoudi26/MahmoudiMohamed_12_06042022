import axios from 'axios';

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
            data = response; // maybe format this
        })

        return data;
    }

    // fetch user daily activity
    async getUserDailyActivityData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/activity`;

        await axios.get(url)
        .then((response) => {
            data = response; // maybe format this
        })

        return data;
    }

    // fetch user average session data
    async getUserAverageSessionData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/average-session`;

        await axios.get(url)
        .then((response) => {
            data = response; // maybe format this
        })

        return data;
    }

    // fetch user performance data
    async getUserDailyActivityData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/performance`;

        await axios.get(url)
        .then((response) => {
            data = response; // maybe format this
        })

        return data;
    }
}

export default ApiProvider

