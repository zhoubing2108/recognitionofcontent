// import {
// 	createStore
// } from 'redux'
// import rootReducer from './pages/contractmanagement/reducer';
// const initialState = {};
// console.log(typeof rootReducer)
// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	window.devToolsExtension ? window.devToolsExtension() : f => f
// );

// export default store
import {
	observable,
	autorun
} from 'mobx';
class RootStore {
	constructor() {
		this.userStore = new UserStore(this)
		this.todoStore = new TodoStore(this)
	}
}

class UserStore {
	constructor(rootStore) {
		this.rootStore = rootStore
	}

	getTodos(user) {
		// 通过根 store 来访问 todoStore
		return this.rootStore.todoStore.todos.filter(todo => todo.author === user)
	}
}

class TodoStore {
	@observable todos = []

	constructor(rootStore) {
		this.rootStore = rootStore
	}
}