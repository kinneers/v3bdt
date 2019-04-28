import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import LoginComponent from './../../components/LoginComponent';
import Footer from './../../components/Footer';
import API from '../../utils/API';
import './style.css';

class Login extends Component {

//   // Set component's initial state
  state = {
    email: "",
    password: ""
  };

  setValue = (type, value) => {
    this.setState({[type]: value})
  };
  handleSubmit = (e) => {
    e.preventDefault();
    API.loginUser(this.state).then(({data}) => {
      API.associateUser(this.state.email, data.accessToken && data.accessToken.jwtToken).then(({data: userData}) => {
        const user = {
          email: this.state.email,
          ...data, ...userData
        }
        this.props.handleUser(user);
        //we can write if statement here to push to teacher for authLevel 3...
        if (user.authLevel === 3) {
          this.props.history.push("/teacher");
        }
        if (user.authLevel === 1) {
          this.props.history.push("/student");
        }
        if (user.authLevel === 5) {
          this.props.history.push("/admin");
        }
      }) 
    })
  };

  render() {
    const passedProps = {
      handleSubmit: this.handleSubmit,
      setValue: this.setValue,
      email: this.state.email,
      password: this.state.password,
      ...this.props
    }
    console.log(this.props);

    return (
        <body>
            <main>
                <LoginComponent {...passedProps} />
            </main>
            <footer>
                <Footer />
            </footer>
        </body>
    );
  }
}

export default withRouter(Login);
