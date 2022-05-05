import React, {Component, Fragment} from 'react';
import Charts from '../Charts/Charts';
import Header from '../../components/Header/Header'
import SideBar from '../../components/Bars/SideBar/SideBar'
import { useParams } from 'react-router-dom'
import './Dashboard.css'



function Dashboard() {
    
    let { id } = useParams();
    return (
        <Fragment>
            <Header />
            <main>
                <SideBar />
                <Charts id={id} />
            </main>
        </Fragment>
        );
}

export default Dashboard;