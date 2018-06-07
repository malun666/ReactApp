import React, {Component} from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import {routes} from '../routes/index';
import {RouteWithSubRoutes} from '../components/RouteWithSubRoutes';

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
          <div className="link">
            <Link to={`${this.props.match.url}/about`}>about</Link>
            <Link to={`${this.props.match.url}/main`}>main</Link>
            <Link to={`${this.props.match.url}/stu`}>stu</Link>
            <Link to="/Login">登录</Link>
            <hr/>
          </div>
          <switch>
            <Route
              exact
              path={this.props.match.url}
              render={() => (<Redirect to="/home/main"/>)}/> {this
              .state
              .routes
              .map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
          </switch>
        </div>
      </div>
    );
  }
}

export default Home;
