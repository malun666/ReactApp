import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Stu.css';
import {asynceLoadStu, asyncDelStu} from '../actions/stuAction';

class Stu extends Component {
  componentDidMount() {
    this
      .props
      .LoadStu();
  }

  render() {
    return (
      <div>
        <h3 className="title is-3">学生列表</h3>
        <table className="table is-fullwidth is-hoverable is-striped is-bordered">
          <thead>
            <tr>
              <th>编号</th>
              <th>姓名</th>
              <th>年龄</th>
              <th>电话</th>
              <th>地址</th>
              <th>编辑</th>
            </tr>
          </thead>
          <tbody>
            {this
              .props
              .stuList
              .map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.stu_name}</td>
                    <td>{item.stu_age}</td>
                    <td>{item.stu_phone}</td>
                    <td>{item.stu_address}</td>
                    <td>
                      <button
                        className="button is-small"
                        onClick={this
                        .props
                        .delStuById
                        .bind(this, item.id)}>删除</button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return {stuList: state.stuList}
}

// 映射方法到UI组件，也可以把dispatch映射到props里面去，使用也很方便
function mapDispatchToProps(dispatch) {
  return {
    // onTitleClick: () => {   dispatch(editAppTitle(Date.now())); }
    LoadStu: () => {
      dispatch(asynceLoadStu())
    },
    delStuById: (id) => {
      console.log(id);
      dispatch(asyncDelStu(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Stu);