import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Login from './pages/Login';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Admin from './pages/Admin';
import Authenticator from './components/Auth';

class App extends Component {

    state = {
        user: null,
        //This should be user?
        chartBx: ''
    };

    handleUser = (user) => {
        this.setState({ user });
    }

    render() {
        const passedProps = {
            user: this.state.user,
            handleUser: this.handleUser,
        }

        return (
            <Router>
                <Switch>
                    <Authenticator>
                        {
                            this.state.user ? (
                                <React.Fragment>
                                    <Route exact path="/teacher" render={() => <Teacher {...passedProps} />} />
                                    <Route exact path="/student" component={Student} />
                                    <Route exact path="/admin" component={Admin} />
                                </React.Fragment>
                            ) : (<Route render={() => <Login {...passedProps} />} />)
                        }
                    </Authenticator>
                </Switch>
            </Router>
        );
    }
}

export default App;
