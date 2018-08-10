import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './view/Home';
import Login from './view/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route path="/Home" component={Home} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
} // 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的 props的属性名。 function

export default App;
