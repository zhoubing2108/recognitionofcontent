import React from 'react';
import ReactDOM from 'react-dom';
import style from './testsecond.scss';
import {
	Card,
	Table,
	Button,
	List,
	message
} from 'antd';
import {
	Link
} from 'react-router-dom';
import history from '../../public/history'
import avatar from '../../assets/红色.png';
import ContractAudit from '../contractaudit/contractaudit';
import MessageCorrect from '../messagecorrect/messagecorrect';
import {
	observer,
	inject
} from 'mobx-react'
const success = () => {
	message.success('This is a message of success', 2)
		.then(() => {
			return (history.goBack(), console.log('完成跳转？万一是修改完成后需要指定跳转呢?'));
		})

};
const myData = [{
	'myname': '铁塔合同秘测么吴锐我去我任煤矿没空看卡门卡门看呼呼呼呼',
	'mynumber': 1,
	'myunit': '商务部',
	'myprice': 3030,
	'mycode': 2018 - 9 - 20,

}]
@inject('contractauditstore')
@observer
class TestSecond extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'myname': '铁塔合同秘测么吴锐我去我任煤矿没空看卡门卡门看呼呼呼呼',
			'mynumber': 1,
			'myunit': '商务部',
			'myprice': 3030,
			'mycode': 2018 - 9 - 20,
		}
		this.handlehandup = this.handlehandup.bind(this);
	}
	componentWillUnmount() {

	}
	componentDidMount() {
		const testdata = this.props.contractauditstore;
		console.log('testdata', testdata)
		console.log(this.props.history.location.pathname);
		let pathString = this.props.history.location.pathname;
		let id = pathString.slice(pathString.indexOf(':') + 1);
		console.log(id);
		// let id = this.props.history.state.key;
		// console.log('接收的id:', id);
	}
	componentWillReceiveProps(nextProps) {
		() => {
			return (nextProps.history.push('/contractaudit'));
		};
		console.log('youyunxingma?');

		this.setState({

		});

	}
	showPng() {
		var flag = true, //状态true为正常的状态,false为放大的状态
			imgH, //图片的高度
			imgW, //图片的宽度
			img = document.getElementsByTagName('img')[0]; //图片元素

		imgH = img.height; //获取图片的高度
		imgW = img.width; //获取图片的宽度
		if (flag) {
			//图片为正常状态,设置图片宽高为现在宽高的2倍
			flag = false; //把状态设为放大状态
			img.height = imgH * 2;
			img.width = imgW * 2;
		} else {
			//图片为放大状态,设置图片宽高为现在宽高的二分之一
			flag = true; //把状态设为正常状态
			img.height = imgH / 2;
			img.width = imgW / 2;
		}
		console.log('运行到这里了吗')
	}

	handlehandup(e) {
		e.default;
		success();
		console.log('shangchuan');
	}
	render() {
		const testdatalist = this.props.contractauditstore.contractauditdataList.list;
		console.log(testdatalist);
		let pathString = this.props.history.location.pathname;
		let id = pathString.slice(pathString.indexOf(':') + 1);
		const theRight = testdatalist[id - 1];
		console.log('theRight', theRight)
		return (
			<div>
				
					<div style={{ background: '#ECECEC', padding: '30px' }}>
					    <Card bordered={false} style={{ width: '100%',fontSize:'25px'}}>
					      <div style={{width:'50%',float:'left'}}>
					      	<div style={{marginLeft:'0%',float:'left',position:'absoult',fontWeight:'900'}}>合同信息</div>
			<List className={style.xlSize}>
					      	<List.Item className={style.xlSize}>合同名称 :<span style={{paddingLeft:'50px',fontSize:'16px',lineHeight:'40px'}}>{this.state.myname}</span></List.Item>
					      	<List.Item className={style.xlSize}>合同编号 :<span style={{paddingLeft:'50px'}}>{this.state.mynumber}</span></List.Item>
					      	<List.Item className={style.xlSize}>合同单位 :<span style={{paddingLeft:'50px'}}>{this.state.myunit}</span></List.Item>
					      	<List.Item className={style.xlSize}>合同金额 :<span style={{paddingLeft:'50px'}}>{this.state.myprice}</span></List.Item>
					      	<List.Item className={style.xlSize}>基站编码 :<span style={{paddingLeft:'50px'}}>{this.state.mycode}</span></List.Item>
					      </List>
					      	<Button size="large" type="primary" style={{marginLeft:'0%'}}><Link to='/messagecorrect'>修改</Link></Button>
					      	<Button onClick={this.handlehandup} size="large" style={{marginLeft:'10%',background:'green'}}>确认上传</Button>
					      </div>
					      <div style={{width:'50%',float:'right'}}>
					      	<div style={{margin:'10px',display:'block',border:'2px solid black'}}>
					      	<Card 
					      		hoverable 
					      		style={{ width:'100%' }}
    							cover={<img alt="example" src={avatar} />}
    							onClick={this.showPng}
  							>

  							</Card>
  							</div>
					      </div>
					    </Card>
					</div>
				
			</div>
		);
	}

}
export default TestSecond;