import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import 'antd/dist/antd.css';
import {
	HashRouter,
} from 'react-router-dom';
import Home from './home/home';



export default class App extends React.Component {
	render() {
		return (
			<div>
				<HashRouter>
					<Home />
				</HashRouter>
      		</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));