// import {
// 	combineReducers
// } from 'redux';
// const reducerAction = (state = {
// 	text: '你好，访问者',
// 	name: '访问者'
// }, action) => {
// 	switch (action.type) {
// 		case 'change':
// 			return {
// 				name: action.payload,
// 				text: '你好，' + action.payload
// 			};
// 		default:
// 			return state;
// 	}
// }

// const reducers = combineReducers({
// 	reducerAction
// })

// export default reducers;

import {
	combineReducers
} from 'redux';
import coins from './data';
import remotedata from './getRemoteData';
import * as contractmanagement from './contractmanagement';
const rootReducer = combineReducers({
	coins,
	remotedata,
	contractmanagement
});
export default rootReducer