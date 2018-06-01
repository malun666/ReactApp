import {combineReducers} from "redux"
// import {List, fromJS} from "immutable";
import stuList from './stuList';

//首页得文字
export function title(state = 'aicoder全栈实习', action) {
  if (action.type === 'EDIT_APP_TITLE') {
    return action.data;
  } else {
    return state;
  }
}

const rootReducer = combineReducers({title, stuList});

export default rootReducer;