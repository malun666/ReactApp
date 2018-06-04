import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asynceLoadStu, asyncDelStu} from '../actions/stuAction';

import {Popconfirm, message, Modal, Button} from 'antd';
import './Stu.css';
import 'antd/dist/antd.css';
class Stu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addDialogVisible: false
    };

    //#region 绑定this
    this.delCancle = this
      .delCancle
      .bind(this);

    this.showAddDialog = this
      .showAddDialog
      .bind(this);
    //#endregion
  }
  componentDidMount() {
    this
      .props
      .LoadStu();
  }

  delCancle(e) {
    message.info('取消删除！');
  }

  // #region 添加相关的事件处理函数
  handleAddSubmit(e) {}

  handleAddCancel(e) {
    this.setState((preState, props) => {
      return Object.assign({}, preState, {addDialogVisible: false});
    });
  }

  showAddDialog() {
    this.setState((preState, props) => {
      return Object.assign({}, preState, {addDialogVisible: true});
    });
  }
  //#endregion

  render() {
    return (
      <div>
        <h3 className="title is-3">学生列表</h3>
        <Button onClick={this.showAddDialog}>添加</Button>
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
                      <Popconfirm
                        title="您确认要删除当前学生信息吗？"
                        onConfirm={this
                        .props
                        .delStuById
                        .bind(this, item.id)}
                        onCancel={this.delCancle}
                        okText="确认"
                        cancelText="取消">
                        <button className="button is-small">删除</button>
                      </Popconfirm>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>

        <div className="add-dialog">
          <Modal
            title="添加学生信息"
            okText="添加"
            cancelText="取消"
            visible={this.state.addDialogVisible}
            onOk={(e) => this.handleAddSubmit(e)}
            onCancel={(e) => this.handleAddCancel(e)}></Modal>
        </div>
      </div>
    )
  }
}

message.config({top: 530, duration: 2, maxCount: 3});

// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。  177 123  112 231
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
      dispatch(asyncDelStu(id)).then((() => {
        message.success('删除成功！');
      }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stu);