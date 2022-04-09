import React, {Component, Fragment} from 'react';
import Charts from '../Charts/Charts';

class Dashboard extends Component {
    state = {
        id: this.props.id,
    }

    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                    <Charts id={this.state.id} />
                </main>
            </Fragment>
        )
    }
}

export default Dashboard;