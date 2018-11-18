import {
	observable,
	action,
	computed
} from 'mobx';
class ContractAuditStore {
	@observable contractauditdataList = [];
	@action.bound set(data) {
		return this.contractauditdataList = data;
	}

}
const contractauditstore = new ContractAuditStore();
export default contractauditstore;