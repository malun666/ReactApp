import React, {Component} from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.kname,
      age: '线下全栈实习！'
    }
    this.changeName = this
      .changeName
      .bind(this);
  }
  changeName() {
    this.setState((preState, props) => {
      return {
        name: preState.name + '1'
      }
    });
  }

  render() {
    return (
      <div>
        <p onClick={this.changeName}>
          {this.state.name}
          - {this.state.age}
        </p>
        <p></p>
      </div>
    );
  }
}

export default List;