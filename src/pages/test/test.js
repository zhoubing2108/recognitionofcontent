import React from 'react';
import ReactDOM from 'react-dom';
import style from './test.scss';
class Test extends React.Component {
	render() {
		return (
			<div>
				<div className={style.testTab} >Test css</div>
			</div>
		);
	}
}
export default Test;