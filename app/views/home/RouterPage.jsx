import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Router, Route, Link, browserHistory, Navigation } from 'react-router'
import SignUpPage from './SignUpPage.jsx'
import IndexPage from './IndexPage.jsx'
import SignInPage from './SignInPage.jsx'
import AccountPage from '../user/AccountPage.jsx'
import NewPostPage from '../post/NewPostPage.jsx'
import AboutUsPage from './AboutUsPage.jsx'
import FAQPage from './FAQPage.jsx'
import ManagePostsPage from '../user/ManagePostsPage.jsx'
//refactor so that all goes in the '/' and refactor the header and footer, so that it doesnt load up first"
export default class RouterPage extends React.Component{
  constructor(props){
    super(props)
  }
  _checkJWT(cb){
    return fetch('http://localhost:3000/api/checkjwt', {
      method: 'POST',
      headers: {
        'Accept':"application/json",
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+ localStorage.getItem("collegestuffsale-webtoken")
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson)=>{
      console.log("success was "+responseJson.success)
      cb(responseJson.success)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  _authenticate(nextState, replace){
    this._checkJWT((result)=>{
      console.log("finished: " + result)
      if (result){
        console.log("successfully Signed In")
      }else{
        console.log("Failed")
        browserHistory.replace('/signin')
      }
    })
  }
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/signup" component={SignUpPage}></Route>
        <Route path="/signin" component={SignInPage}></Route>
        <Route path="/account" component={AccountPage} onEnter={this._authenticate.bind(this)}></Route>
        <Route path="/new-post" component={NewPostPage} onEnter={this._authenticate.bind(this)}></Route>
        <Route path="/aboutus" component={AboutUsPage}></Route>
        <Route path="/faq" component={FAQPage}></Route>
        <Route path="/manage-posts" component={ManagePostsPage}></Route>
      </Router>
    )
  }
}
