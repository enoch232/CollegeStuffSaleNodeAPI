import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import SignUpPage from './SignUpPage.jsx'
import IndexPage from './IndexPage.jsx'
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
