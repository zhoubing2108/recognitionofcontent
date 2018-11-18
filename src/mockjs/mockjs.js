import Mock from 'mockjs';
Mock.setup({
	timeout: '200-600'
})
Mock.mock('/api/contract_messages', 'get', {
	'list|1-30': [{
		'key|+1': 1,
		'contract_number': /\d{1,10}/,
		'contract_name': /[a-z][c-y][L-R][A-Z][0-9]/,
		'contract_mount|5000-50000': 6000,
		'attachments|': '合同文档',

	}]
})
Mock.mock('/api/contractaudit_data', 'get', {
	'list|3': [{
		'key|+1': 1,
		'contract_number': /\d{1,10}/,
		'contract_name': /[a-z][c-y][L-R][A-Z][0-9]/,
		'contract_mount|5000-50000': 6000,
		'attachments|': '合同文档',
	}]
})