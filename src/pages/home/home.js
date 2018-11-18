import React from 'react';
import ReactDOM from 'react-dom';
import style from './home.scss';
import {
	Layout
} from 'antd';
import {
	Row,
	Col
} from 'antd';
import Routers from '../../public/router';
import {
	Link
} from 'react-router-dom';
import {
	Input
} from 'antd';
import ContractAudit from '../contractaudit/contractaudit';
import ContractManagement from '../contractmanagement/contractmanagement';
import Test from '../test/test';
import TestSecond from '../testsecond/testsecond';
import avatar from '../../assets/红色.png';

const Search = Input.Search;
const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;

class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
				    <Layout>
				      <Header className={style.themeTone}>
					      	 <Row>
							      <Col span={4} style={{lineHeight:'64px',height:'64px'}}>内容智能识别机器人</Col>
							      <Col span={4} style={{lineHeight:'64px',height:'64px'}}></Col>
							      <Col span={4} style={{lineHeight:'64px',height:'64px'}}><Link to="/contractaudit">合同审核</Link></Col>
							      <Col span={4} style={{lineHeight:'64px',height:'64px'}}><Link to="/contractmanagement">合同管理</Link></Col>
							      <Col span={4} style={{lineHeight:'64px',height:'64px'}}><Search placeholder="input search text" onSearch={value => console.log(value)} enterButton/></Col>
							      <Col span={4} style={{lineHeight:'64px',height:'64px'}}><img src={avatar} style={{height:'64px',width:'64px',marginTop:'-4px',borderRadius:'50%',overflow:'hidden'}} />&nbsp;&nbsp;<Link to="/test">管理员</Link></Col>
						    </Row>
					   </Header>
					    					     
					</Layout>    
  				</div>			    			    
			</div>
		);
	}
}
export default Home;