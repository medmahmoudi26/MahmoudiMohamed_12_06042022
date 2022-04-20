import React, {Component, Fragment} from 'react';
import Charts from '../Charts/Charts';
import Header from '../../components/Header/Header'
import SideBar from '../../components/Bars/SideBar/SideBar'
import { useParams } from 'react-router-dom'




function Dashboard() {
    
    let { id } = useParams();
    return (
        <Fragment>
            <Header />
            <main>
                <SideBar />

            </main>
        </Fragment>
        );
}

export default Dashboard;