import React from 'react'
import { Route, IndexRoute } from 'react-router'
/*import App from './components/App'*/
import App from './containers/App'
import Home from './containers/Home'
import Article from './components/Article'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Dashboard from './containers/Dashboard'
import Settings from './components/Settings'
import {redirectToBack,redirectToLogin} from './utils/authService'

export default ()=> (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/article/:id" component={Article} />
		<Route path="/login" component={Login} onEnter={redirectToBack} />
    <Route path="/signup" component={Signup} onEnter={redirectToBack} />
    <Route path="/dashboard" component={Dashboard} onEnter={redirectToLogin} />
    <Route path="/dashboard/template" component={Dashboard} onEnter={redirectToLogin} />
    <Route path="/dashboard/template/add" component={Dashboard} onEnter={redirectToLogin} />
		<Route path="/settings" component={Settings} onEnter={redirectToLogin} />
	</Route>
)