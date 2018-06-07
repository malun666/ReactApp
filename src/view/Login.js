import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        Login
        <Link to="/">回到首页</Link>
      </div>
    );
  }
}

export default Login;
