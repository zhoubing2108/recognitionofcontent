import React from 'react';
import ReactDOM from 'react-dom';
// import {
// 	createStore
// } from 'redux';
// import store from '../../store';
import style from './contractmanagement.scss';
import {
	Layout
} from 'antd';
import {
	Row,
	Col
} from 'antd';
import {
	Button
} from 'antd';
import {
	Card
} from 'antd';

import {
	Table,
	Divider,
	Tag
} from 'antd';
import {
	DatePicker
} from 'antd';
import moment from 'moment';
import {
	Radio,
	Icon,
	Pagination
} from 'antd';
import Mock from '../../mockjs/mockjs';
import ContractAudit from '../contractaudit/contractaudit';
// import {
// 	combineReducers
// } from 'redux';
// import rootReducer from './reducer';
// import thirddata from './thirddata';
// import ep from '../../public/eventproxy';
import {
	observer,
	inject
} from 'mobx-react';
import Store from './store';
import {
	observable,
	autorun,
	action,
	computed,
	decorate
} from 'mobx';
// import {
// 	observer
// } from 'mobx-react';
// const value = observable.box(0);
// const number = observable.box(100);
// autorun(() => {
// 	console.log(value.get());
// });
// value.set(1);
// value.set(2);
// number.set(101);
// class Timer {
// 	start = Date.now();
// 	current = Date.now();

// 	get elapsedTime() {
// 		return this.current - this.start + "milliseconds";
// 	}

// 	tick() {
// 		this.current = Date.now()
// 	}
// }
// decorate(Timer, {
// 	start: observable,
// 	current: observable,
// 	elapsedTime: computed,
// 	tick: action
// })


var appState = observable({
	timer: 0
});
var mobxData = observable({
	mobx_Data: ''
});
const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;
const {
	MonthPicker,
	RangePicker
} = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const {
	Column,
	ColumnGroup
} = Table;

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
};

const data = [{
	key: '1',
	contract_number: 'John',
	contract_name: 'Brown',
	contract_mount: 32,
	address: 'New York No. 1 Lake Park',
	attachments: ['cool', 'teacher'],
}, {
	key: '2',
	contract_number: 'Jim',
	contract_name: 'Green',
	contract_mount: 42,
	address: 'London No. 1 Lake Park',
	attachments: ['cool', 'teacher'],
}, {
	key: '3',
	contract_number: 'Joe',
	contract_name: 'Black',
	contract_mount: 32,
	address: 'Sidney No. 1 Lake Park',
	attachments: ['cool', 'teacher'],
}];

// class Store {
// 	// 被观察者
// 	@observable todos = [{
// 		title: "完成 Mobx 翻译",
// 		done: false,
// 	}];
// }

// function testable(target) {
// 	target.isTestable = true;
// }

// @testable
// class MyTestableClass {}

// console.log(MyTestableClass.isTestable);
// class Store {
// 	@observable todos = [{
// 		title: "todo标题",
// 		done: false,
// 	}, {
// 		title: "已经完成 todo 的标题",
// 		done: true,
// 	}];

// 	@action changeTodoTitle({
// 		index,
// 		title
// 	}) {
// 		this.todos[index].title = title
// 	}

// 	@computed get unfinishedTodos() {
// 		return this.todos.filter((todo) => todo.done)
// 	}
// }
function Person(name, age) {
	this.name = name;
	this.age = age;
}
const person = observable.box(new Person('lily', 26));
autorun(() => {
	console.log(`name: ${person.get().name}, age: ${person.get().age}`);
});



@observer
class TimerView extends React.Component {
	render() {
		return (<button onClick={this.onReset.bind(this)}>  
        Seconds passed: {this.props.appState.timer}</button>);
	}
	onReset() {
		this.props.appState.resetTimer();
	}
}


appState.resetTimer = action(function reset() {
	appState.timer = 0;
});

setInterval(action(function tick() {
	appState.timer += 1;
}), 1000);


const store = new Store();
@observer
class TodoBox extends React.Component {

	render() {
		console.log('render');
		console.log(this.props.store.updateLoading);
		return (
			<div>
		<span>999</span>
       
      </div>
		)
	}
}

class MyPagination extends React.Component {
	onChange(pageNumber) {
		console.log('Page: ', pageNumber);
	}
	render() {
		return (
			<div>
				<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
			</div>
		)
	}
}

class HandleButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 'large',
		}
	}
	componentDidMount() {

	}

	render() {
		const size = this.state.size;
		return (
			<div>				        
				<div style={{lineHeight:'64px',whiteSpace:'nowrap'}}>
					<span className={style.spacing}><Button type="primary" size={size}>确定</Button></span>
					<span className={style.spacing}><Button size={size}>全选</Button></span>
					<span className={style.spacing}><Button type="danger" size={size}>删除</Button></span>
				</div>			        
			</div>
		);
	}
}

class HandleTime extends React.Component {
	render() {
		return (
			<div>
				<div style={{lineHeight:'64px'}}>
					<RangePicker
				    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
				    format={dateFormat}
				/>
				</div>
				
			</div>
		);
	}
}
@observer
@inject('contractStore')
class ContractManagement extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			mydata: [],
			key: '',
			contract_number: '',
			contract_name: '',
			contract_mount: '',
			attachments: '',
			current: ''
		})

	}
	componentDidMount() {
		let success = (data) => {
			console.log(data);
			let mydatalist = JSON.parse(data)
			console.log(mydatalist);


			setTimeout(this.setState({
				mydata: mydatalist.list
			}), 1000)
			this.setState({
				mobx_Data: mydatalist
			})
			console.log(mobxData);
			// mobxData.mobx_Data = mydatalist
			// var lastStore = mobxData.mobx_Data.set({
			// 	mobx_Data: mydatalist
			// })
			// console.log(lastStore);
			mobxData.mobx_Data = mydatalist.list;
			console.log(mobxData.mobx_Data);
			person.get().name = 'wanghong';
			person.set(new Person('wanghong', 27));


			// console.log(this.props.contractStore);
			// this.state.contractStore = this.props.contractStore;
			// this.setState({
			// 	contractStore: mydatalist
			// })
			// console.log(this.state);
			// console.log('里面有新数据吗', this.state.contractStore)

			const {
				contractStore
			} = this.props;

			setTimeout(() => {
				this.props.contractStore.set(mydatalist)
			}, 1000)
			console.log('提前看', contractStore.managementList);
			setTimeout(() => {
				console.log('现在看', contractStore.managementList)
			}, 3000)


		}

		function fail(code) {
			console.log('相关报错码：', code);
		};
		let request;
		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else {
			request = new ActiveXObject('Microsoft.XMLHTTP');
		}
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status === 200) {
					return success(request.responseText);
				} else {
					return fail(request.status);
				}

			} else {
				// HTTP请求还在继续中
			}
		}
		request.open('GET', '/api/contract_messages', true);
		request.send();

	}
	componentWillUnmount() {

	}
	componentWillMount() {
		// const reducer = (state = {}, action) => {
		// 	switch (action.type) {
		// 		case '添加远程数据':
		// 			return state;
		// 		default:
		// 			return state;
		// 	}
		// };
		// store.dispatch(reducer);


		// let reducersec = setTimeout(() => {
		// 	return reducer;
		// }, 0);
		// const reducer = (state = mydatalist, action) => {
		// 	switch (action.type) {
		// 		case '添加远程数据':
		// 			return state;
		// 		default:
		// 			return state;
		// 	}
		// };

	}
	render() {
		let datasource = Array.from(this.state.mydata)
		let mycurrent = Array.from(this.state.mydata).length
		let current = this.state.current
		let mobx_Data = mobxData.mobx_Data
		const {
			contractStore
		} = this.props;
		return (
			<div>
				<Layout>
					 <Sider style={{margin:'10px 10px 10px 10px',height:'174px'}}>
								 <Card style={{ width:200}}>
								    <p>合同库?</p>
								    <p>回收站</p>
								    <p>添加合同</p>

								 </Card>
					 </Sider>
					 <Content style={{margin:'10px 10px 10px 10px'}}>
								<Card>
								<div>
									<Row>
							      		<Col span={2} style={{lineHeight:'64px',height:'64px'}}>筛选日期:</Col>
							      		<Col span={6} style={{lineHeight:'64px',height:'64px'}}><HandleTime /></Col>
							      		<Col span={8} style={{lineHeight:'64px',height:'64px'}}><HandleButton /></Col>
							      		<Col span={4} style={{lineHeight:'64px',height:'64px'}}></Col>							      
							      		<Col span={4} style={{lineHeight:'64px',height:'64px'}}><Button type="primary" block>导出excel</Button></Col>
						    		</Row>
								</div>
								<Table rowSelection={rowSelection} dataSource={datasource} pagination={{
                        total: 200,
                        defaultPageSize: 5,
                        current:current,
                        onChange: (page, pageSize) => {
                            console.log('current page: ', page)
                            this.setState({
                            	current:page
                            })
                           
                        }
                    }}>							   
								      <Column
								      	align="center"
								        title="合同编号"
								        dataIndex="contract_number"
								        key="contract_number"
								      />
								      <Column
								      	align="center"
								        title="合同名字"
								        dataIndex="contract_name"
								        key="contract_name"
								      />
								    <Column
								    	align="center"
								      title="合同金额"
								      dataIndex="contract_mount"
								      key="contract_mount"
								    />								    
								    <Column
								    	align="center"
								      title="附件"
								      dataIndex="attachments"
								      key="attachments"
								    />
								    <Column
								    	align="center"
								      title="操作"
								      key="action"
								      render={(text, record) => (
								        <span>
								          <a href="javascript:;">Invite {record.lastName}</a>
								          <Divider type="vertical" />
								          <a href="javascript:;">Delete</a>
								        </span>
								      )}
								    />
								    
								</Table>
								</Card>
					 </Content>
				</Layout>
				// <div><TodoBox store={store} /></div>
				<div><TimerView appState={appState} /></div>
			</div>
		);
	}
}
export default ContractManagement;