import {
	observable,
	computed,
	action
} from 'mobx';
class ManagementStore {
	@observable managementList = [];
	@computed get unfinishedLen() {
		return this.managementList.filter((todo) => !todo.finished).length;
	}
	@action.bound createTodo(title) {
		this.managementList.unshift(new TodoModel(title));
	}

	// 删除
	@action.bound removeTodo(todo) {
		this.managementList.remove(todo); // mobx 提供的快速删除
	}
	@action.bound set(data) {
		return this.managementList = data;

	}
	@action get() {

	}

}
const contractStore = new ManagementStore();
export default contractStore;