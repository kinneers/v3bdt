import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Login from './pages/Login';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Admin from './pages/Admin';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/teacher" component={Teacher} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/admin" component={Admin} />
                    <Route component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default App;
