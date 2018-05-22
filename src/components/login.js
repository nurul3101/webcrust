import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = response => {
  console.log(response);
};

export default class Login extends Component {
  render() {
    return (
      <GoogleLogin
        clientId="488168700332-2q2musfc7klnvj43t4dg7cbqivc8be35.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    );
  }
}
