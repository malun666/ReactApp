import {stuActionTypes} from '../actions/stuAction';

export default function stuList(state = [], action) {
  const {type, data} = action;
  switch (type) {
      // 加载数据
    case stuActionTypes.LOAD:
      return data;
    case stuActionTypes.ADD: // 添加
      return [
        ...state,
        data
      ];
    case stuActionTypes.DEL: // 删除
      let delTemp = state.slice();
      delTemp.splice(state.findIndex(stu => stu.id === data), 1);
      return delTemp;
    case stuActionTypes.EDIT: // 修改
      let editTemp = state.slice();
      let editStu = editTemp.find(item => item.id === data.id);
      Object.assign(editStu, data);
      return editTemp;
    default:
      return state;
  }
}
