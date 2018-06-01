import {createStore, applyMiddleware} from 'redux';
// redux-thunk中间件可以让action创建函数先不返回一个action对象，而是返回一个函数，
// 函数传递两个参数(dispatch,getState) ,在函数体内进行业务逻辑的封装
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
