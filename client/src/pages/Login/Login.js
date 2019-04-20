import React, { Component } from 'react';
import LoginComponent from './../../components/LoginComponent';
import Footer from './../../components/Footer';
import API from '../../utils/API';

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
    API.loginUser(this.state).then(user => console.log(user))
  };

  render() {
    const passedProps = {
      handleSubmit: this.handleSubmit,
      setValue: this.setValue,
      email: this.state.email,
      password: this.state.password,
      ...this.props
    }

    return (
        <div>
            <LoginComponent {...passedProps} />
            <Footer />
        </div>
    );
  }
}

export default Login;
