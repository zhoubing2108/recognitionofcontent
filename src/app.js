import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.less';
import 'antd/dist/antd.css';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import Routers from './public/router';
import Home from './pages/home/home';
import {
	Provider
} from 'mobx-react';
import stores from './mobx/stores/index';



export default class App extends React.Component {

	render() {
		return (
			<div>
				<Provider {...stores}>
				<Router>
					<div>
						<Home />
						<Routers />
					</div>
				</Router>
				</Provider>
      		</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));