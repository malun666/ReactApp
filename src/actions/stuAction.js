import axios from 'axios';
export const stuActionTypes = {
  ADD: 'ADD_STU',
  DEL: 'DEL_STU',
  EDIT: 'EDIT_STU',
  LOAD: 'LOAD_STU'
};

// action creater
export function addStu(stu) {
  return {type: stuActionTypes.ADD, data: stu}
}

export function delStu(stuId) {
  return {type: stuActionTypes.DEL, data: stuId};
}

//redux-thunk  异步action
export function asyncDelStu(stuId) {
  return (dispatch, getState) => {
    return axios
      .post('http://yapi.demo.qunar.com/mock/7378/api/delstu')
      .then(res => {
        // getState
        dispatch(delStu(stuId));
      })
      .catch((res) => {
        console.log(res);
      });
  }
}

export function editStu(stu) {
  return {type: stuActionTypes.EDIT, data: stu}
}

export function loadStu(stuList) {
  return {type: stuActionTypes.LOAD, data: stuList}
}

//redux-thunk  异步action
export function asynceLoadStu() {
  return (dispatch, getState) => {
    axios
      .get('http://yapi.demo.qunar.com/mock/7378/api/stulist')
      .then(res => {
        dispatch(loadStu(res.data.stuList));
      })
  }
}

export function loadStuList() {}