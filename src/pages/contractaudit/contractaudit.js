import React from 'react';
import ReactDOM from 'react-dom';
import style from './contractaudit.scss';
import Home from '../home/home';
import {
	Row,
	Col,
	Card,
	Table,
	Button,
	Modal,
	List,
	Input,
	Form
} from 'antd';
import {
	Upload,
	Icon,
	message
} from 'antd';
import TestSecond from '../testsecond/testsecond';
import ContractManagement from '../contractmanagement/contractmanagement';
import {
	Link
} from 'react-router-dom';
import avatar from '../../assets/红色.png';
import ep from '../../public/eventproxy';
import store from '../../store';
import {
	observer,
	inject
} from 'mobx-react';
import Mock from '../../mockjs/mockjs';



const {
	Column,
	ColumnGroup
} = Table;

const data = [{
	key: '1',
	contarct_number: 'John',
	contract_name: 'Brown',
	contract_mount: 32,
}, {
	key: '2',
	contarct_number: 'Jim',
	contract_name: 'Green',
	contract_mount: 42,
}, {
	key: '3',
	contarct_number: 'Joe',
	contract_name: 'Black',
	contract_mount: 32,
}];

class UploadPhotos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			previewPhoto: '',
		};
		this.myParentRef = React.createRef();
		this.myRef = React.createRef();
		this.handleUpload = this.handleUpload.bind(this);
		// this.handleShow = this.handleShow.bind(this);
	}
	handleUpload(e) {
		e.preventDefault();
		const reader = new FileReader;
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = function(e) {
			this.setState({
				previewPhoto: e.target.result,
			});

		}.bind(this);
		const myRef = this.myRef.current;

		function AddImgClickEvent() {      
			var objs = myRef;      
			console.log(objs);
			objs.onclick = function() {
				alert("全屏查看图片");
				window.open(this.src);
			}
		}    
		AddImgClickEvent();
		console.log("这里呢？");

	}
	// handleShow(e) {

	// 	console.log("以下是打印的元素",
	// 		this.myRef.current);


	// }
	render() {
		const mygetFieldDecorator = this.props.mygetFieldDecorator;
		console.log('getFieldDecorator', this.props.mygetFieldDecorator)
		return (
			<div>
					{mygetFieldDecorator('pdffiles')(<Input type="file" onChange={this.handleUpload}/>)}
					<div ref={this.myParentRef}><img ref={this.myRef} src={this.state.previewPhoto} style={{width:'90%',height:'350px'}} alt="" /></div>
			</div>
		);
	}
}
class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fvalue: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputValue = this.handleInputValue.bind(this);

	}
	handleSubmit(e) {
		e.preventDefault();
		console.log("数据还没填写完");
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});

	}
	handleInputValue(e) {
		this.setState({
			fvalue: e.target.value
		})

	}
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
			          <Card bordered={false} style={{ width: '100%',fontSize:'25px'}}>
					      <div style={{width:'50%',float:'left'}}>
					      	<div style={{marginLeft:'0%',float:'left',position:'absoult',fontWeight:'900'}}>合同信息</div>
								<List className={style.xlSize}>
							      	<Form.Item>
							      	<List.Item className={style.xlSize}>合同名称 :<span style={{paddingLeft:'50px',fontSize:'16px',lineHeight:'40px'}}>
							      		{getFieldDecorator('name')(<Input placeholder="合同名称" />)}
							      		</span>
							      	</List.Item>
							      	</Form.Item>
							      	<Form.Item>
							      	<List.Item className={style.xlSize}>合同编号 :<span style={{paddingLeft:'50px'}}>
							      		{getFieldDecorator('number')(<Input placeholder="合同编号" />)}
							      		</span>
							      	</List.Item>
							      	</Form.Item>
							      	<Form.Item>
							      	<List.Item className={style.xlSize}>合同单位 :<span style={{paddingLeft:'50px'}}>
							      		{getFieldDecorator('unit')(<Input placeholder="合同编号" />)}
							      		</span>
							      	</List.Item>
							      	</Form.Item>
							      	<Form.Item>
							      	<List.Item className={style.xlSize}>合同金额 :<span style={{paddingLeft:'50px'}}>
							      		{getFieldDecorator('price')(<Input placeholder="合同编号" />)}
							      		</span>
							      	</List.Item>
							      	</Form.Item>
							      	<Form.Item>
							      	<List.Item className={style.xlSize}>基站编码 :<span style={{paddingLeft:'50px'}}>
							      		{getFieldDecorator('coding')(<Input placeholder="合同编号" />)}
							      		</span>
							      	</List.Item>
							      	</Form.Item>
							    </List>
							      	<Button size="large" htmlType="submit" style={{marginLeft:'10%',background:'green'}}>确认上传</Button>
					      	</div>
					      <div style={{width:'50%',float:'right'}}>
					      	<div style={{margin:'10px',display:'block',border:'2px solid black',height:'424px',alignItems:'center',lineHeight:'424px'}}>
					      		<div style={{}}>
					      		<Form.Item>
					      		<UploadPhotos mygetFieldDecorator = {this.props.form.getFieldDecorator}/>
					      		</Form.Item>
  								</div>
  							</div>
					      </div>
					    </Card>
				</Form>
			</div>
		)


	}

}
const MyLastForm = Form.create()(MyForm);



class MessagesEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			inputValue: '',
		}
		this.showModal = this.showModal.bind(this);
		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleInputValue = this.handleInputValue.bind(this);


	}

	showModal() {
		this.setState({
			visible: true,
		});
	}
	handleOk(e) {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
	handleCancel(e) {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
	handleInputValue(e) {
		e.preventDefault();
		console.log(e.target.value)
		this.setState({
			inputValue: e.target.value
		})

	}


	render() {
		const {
			autoCompleteResult
		} = this.state;
		return (
			<div>
				<Button type="primary" block onClick={this.showModal}>
			          +手动添加合同
			    </Button>
			        <Modal
			          visible={this.state.visible}
			          onCancel={this.handleCancel}
			          width="90%"
			          cancelText="取消"
			          footer={null}
			        >
			        <MyLastForm />	
			        </Modal>
			</div>
		);
	}
}

@inject('contractauditstore')
@observer
class ContractAudit extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			managementList: []
		})

	}
	componentWillMount() {
		// setTimeout(console.log(store.getState(), '拿到了？'), 1000);


	}
	componentDidMount() {
		let success = (data) => {
			console.log(data);
			let myauditdatalist = JSON.parse(data);
			console.log(myauditdatalist);
			this.setState({
				managementList: myauditdatalist
			})
			setTimeout(() => {
				this.props.contractauditstore.set(myauditdatalist)
			}, 0)



		}

		function fail() {
			console.log('错误码：', code)
		}
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
				//请求还在进行中
			}
		}
		request.open('GET', '/api/contractaudit_data', true);
		request.send();

		// const {
		// 	contractStore
		// } = this.props
		// console.log('here?');
		// setTimeout(console.log(this.props), 1000)
		// console.log(contractStore.managementList)
		// setTimeout(() => {
		// 	console.log(contractStore.managementList)

		// }, 3000)

	}
	componentDidUpdate() {
		// ep.one('res', (mydatalist) => {
		// 	console.log(mydatalist, "????");
		// });
		// console.log('here?');

	}
	componentWillUnmount() {

	}
	render() {
		// () => {
		// 	this.state.managementList.push([]);

		// }
		// const {
		// 	contractStore
		// } = this.props;
		// const {
		// 	managementList
		// } = contractStore
		// console.log('打印了？', managementList.list[0])
		// setTimeout(() => {
		// 	console.log('打', managementList.list[0].contract_mount)
		// }, 3000);
		let data = this.state.managementList;
		console.log('data?', data)
		return (
			<div>
				<div>
					<Card>
						<div>
							<Row>
							      <Col span={2} style={{lineHeight:'64px',height:'64px'}}></Col>
							      <Col span={6} style={{lineHeight:'64px',height:'64px'}}></Col>
							      <Col span={8} style={{lineHeight:'64px',height:'64px'}}></Col>
							      <Col span={4} style={{lineHeight:'64px',height:'64px'}}></Col>							      
							      <Col span={4} style={{lineHeight:'64px',height:'64px'}}><MessagesEntry /></Col>
						    </Row>
						</div> <
			Table dataSource = {
				data.list
			} pagination = {{total:200}}
			onRow = {
				(record) => {
					return {
						onClick: () => {
							return (this.props.history.push(`/testsecond/id:${record.key}`), console.log('运行到这了',record))
						},
						onMouseEnter: () => {}
					};
				}
			} >
			<Column align="center" title="合同编号" dataIndex="contract_number" key="contract_number"/> 
		  	<Column align = "center" title = "合同名字" dataIndex = "contract_name" key = "contract_name" />
			<Column align="center" title="合同金额" dataIndex="contract_mount" key="contract_mount"/> 
			</Table> 
			</Card> 
	
			</div> 
			</div>
		);
	}
}
export default ContractAudit;