import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import {connect} from 'react-redux';

import {HashRouter, Link} from 'react-router-dom';
import {RouteWithSubRoutes} from './components/RouteWithSubRoutes';
import {routes} from './routes/index';
import {editAppTitle} from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 19,
      name: '33',
      routes: routes
    };
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="container">
            <h2 className="title is-1" onClick={this.props.onTitleClick}>{this.props.title}</h2>
            <div className="link">
              <Link to="/about">about</Link>
              <Link to="/main">main</Link>
              <Link to="/stu">stu</Link>
              <hr/>
            </div>
            {this
              .state
              .routes
              .map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
          </div>
        </HashRouter>

        <List kname="aicoder.com"></List>

      </div>
    );
  }
}

// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return {title: state.title}
}

// 映射方法到UI组件
function mapDispatchToProps(dispatch) {
  return {
    onTitleClick: () => {
      dispatch(editAppTitle(Date.now()));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;