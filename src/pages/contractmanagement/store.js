// import {
// 	observable,
// 	computed,
// 	decorate,
// 	action
// } from 'mobx'
// class Store {
// 	@observable todoData = data
// 	@observable defaultVal = 'abc'
// 	@observable checked = true

// 	welcome = () => {
// 		autorun(() => {
// 			if (this.defaultVal === 'hunter') {
// 				console.log('welcome')
// 			}
// 		})
// 	}

// 	@computed get getInputLength() {
// 		return this.defaultVal.length
// 	}
// 	@computed get getListData() {
// 		if (this.checked) {
// 			return this.todoData
// 		} else {
// 			let val = []
// 			this.todoData.forEach(el => {
// 				if (el.status) {
// 					val.push(el)
// 				}
// 			})
// 			return val
// 		}
// 	}
// 	@computed get setLeftStyle() {
// 		if (this.checked) {
// 			return {
// 				background: 'rgba(150, 150, 150, 0.5)'
// 			}
// 		} else {
// 			return {

// 			}
// 		}
// 	}
// 	@computed get setRightStyle() {
// 		if (!this.checked) {
// 			return {
// 				background: 'rgba(150, 150, 150, 0.5)'
// 			}
// 		} else {
// 			return {

// 			}
// 		}
// 	}

// 	@action.bound handlerChange(event) {
// 		this.defaultVal = event.target.value
// 	}
// 	@action.bound addTodo(event) {
// 		if (event.keyCode === 13) {
// 			this.todoData.push(event.target.value)
// 			this.defaultVal = ''
// 		} else {
// 			return false
// 		}
// 	}
// 	@action.bound handerToggleLeft() {
// 		this.checked = true
// 	}
// 	@action.bound handerToggleRight() {
// 		this.checked = false
// 	}
// }
// class Store {

// 	constructor() {
// 		let start = {};
// 		let current = {};

// 	}


// }
// let store = new Store()
// export default store
// let start = {};
// let current = {};
// class Store {
// 	get elapsedTime() {
// 		return this.current - this.start + "milliseconds";
// 	}

// 	tick() {
// 		this.current = Date.now()
// 	}
// }
// decorate(Store, {
// 	start: observable,
// 	current: observable,
// 	elapsedTime: computed,
// 	tick: action
// })
// let store = new Store();
// export default store

import {
	observable,
	action
} from 'mobx'

class Store {
	@observable loading = false
	constructor() {

	}
	@action updateLoading = (boolean) => {
		this.loading = boolean
	}
}

export default Store