import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import SignUpPage from './signuppage.jsx'
import IndexPage from './indexpage.jsx'
class RouterPage extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/signup" component={SignUpPage}></Route>
      </Router>
    )
  }
}
module.exports = RouterPage
