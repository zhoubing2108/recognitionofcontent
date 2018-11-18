import React from 'react'
import {
	Route,
	Redirect,
	Switch
} from 'react-router-dom'

import Home from '../pages/home/home'
import Contractaudit from '../pages/contractaudit/contractaudit'
import Test from '../pages/test/test'
import TestSecond from '../pages/testsecond/testsecond'
import ContractManagement from '../pages/contractmanagement/contractmanagement'
import MessageCorrect from '../pages/messagecorrect/messagecorrect'



export default () => [
	<Route exact path='/' render={() => <Redirect to='/contractaudit'/> } key ='contractauditfirst'/>,
	<Route path='/contractaudit' component={Contractaudit} key='contractaudit' />,
	<Route path='/test' component={Test} key='test' />,
	<Route path = '/testsecond' component = {TestSecond} key = 'testsecond' / >,
	<Route path='/contractmanagement' component = {ContractManagement} key = 'contractmanagement'/>,
	<Route path = '/messagecorrect' component = {MessageCorrect} key = 'messagecorrect' / >,

]