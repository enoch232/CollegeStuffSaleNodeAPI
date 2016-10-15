import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import SignUpPage from './SignUpPage.jsx'
import IndexPage from './IndexPage.jsx'
import LoginPage from './LoginPage.jsx'
import AccountPage from '../user/AccountPage.jsx'
class RouterPage extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/signup" component={SignUpPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/account" component={AccountPage}></Route>
      </Router>
    )
  }
}
module.exports = RouterPage
