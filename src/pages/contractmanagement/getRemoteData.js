import {
	combineReducers
} from 'redux';
const reducerAction = (state = {
	text: '你好，欢迎尝试使用redux',
	name: '周bing'
}, action) => {
	switch (action.type) {
		case 'change':
			return {
				name: action.payload,
				text: '你好，' + action.payload
			};
		default:
			return state;
	}
}

const reducers_second = combineReducers({
	reducerAction
})

export default reducers_second;