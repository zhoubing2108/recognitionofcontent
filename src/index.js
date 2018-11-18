import React from 'react'
import ReactDOM from 'react-dom'
import App from './app';
import {
	withRouter
} from 'react-router-dom';


class Myapp extends React.Component {
	render() {
		return (
			<div>
				<App />
			</div>
		)
	}
}
export default withRouter(Myapp);