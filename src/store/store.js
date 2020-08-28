
import { createStore} from "redux";
import index from './reducer/index.js';
// import {createLogger} from 'redux-logger'
// 使用日志打印方法， collapsed让action折叠，看着舒服。
//  createLogger({collapsed: true});
let store = createStore(index);
export default store;