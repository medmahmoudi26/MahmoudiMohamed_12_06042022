import './App.css';
import { BrowserRouter as Router, Navigate, Routes, Route, useParams } from 'react-router-dom';
import Dashboard from '../containers/Dashboard/Dashboard';
import {Component, lazy} from 'react';
import {routes} from '../routes/routes';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    const component = (component) => {
      return lazy(() => import(`../components/${component}/${component}`))
    }

    return (
      <Router>
          <Routes>
      <Route path="/" element={<Navigate to="/dashboard/12" />} />
      <Route path="/dashboard/:id" element={<Child/>} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
          
          </Routes>
        </Router>
    );
  } 
}

const Child = (props) => {
  let { id } = useParams();
  <Dashboard id={id}/>
}

export default App;
