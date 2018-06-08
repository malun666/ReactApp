import React, {Component} from 'react';
import {Link, NavLink, Redirect, Switch} from 'react-router-dom';
import {routes} from '../routes/index';
import {RouteWithSubRoutes} from '../components/RouteWithSubRoutes';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="link-box">
            <NavLink activeClassName="active" to={`${this.props.match.url}/about`}>about</NavLink>
            <NavLink activeClassName="active" to={`${this.props.match.url}/main`}>main</NavLink>
            <NavLink activeClassName="active" to={`${this.props.match.url}/stu`}>stu</NavLink>
            <Link to="/Login">登录</Link>
            <hr/>
          </div>
          <Switch>
            <Redirect exact from="/home" to="/home/main"/> {this
              .state
              .routes
              .map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
