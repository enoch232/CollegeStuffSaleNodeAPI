import React from 'react'
import ReactDOM from 'react-dom'
import jwtDecode from 'jwt-decode'
import { Redirect, Router, Route, Link, browserHistory, Navigation } from 'react-router'
import SignUpPage from './SignUpPage.jsx'
import IndexPage from './IndexPage.jsx'
import SignInPage from './SignInPage.jsx'
import AccountPage from '../user/AccountPage.jsx'
import NewPostPage from '../post/NewPostPage.jsx'
import PostSearchPage from '../post/PostSearchPage.jsx'
import AboutUsPage from './AboutUsPage.jsx'
import FAQPage from './FAQPage.jsx'
import ManagePostsPage from '../user/ManagePostsPage.jsx'
import PostDetailPage from '../post/PostDetailPage.jsx'
//refactor so that all goes in the '/' and refactor the header and footer, so that it doesnt load up first"
export default class RouterPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: "",
      afterSignInPath: "/account"
    }
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
        console.log(jwtDecode(localStorage.getItem("collegestuffsale-webtoken")).user_id)
        this.setState({currentUser: jwtDecode(localStorage.getItem("collegestuffsale-webtoken")).user_id})
        this.setState({afterSignInPath: nextState.location.pathname})
      }else{
        console.log("Failed")
        this.setState({afterSignInPath: nextState.location.pathname})
        browserHistory.push('/signin')
      }
    })
  }
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/signup" component={SignUpPage}></Route>
        <Route path="/signin" component={()=>(<SignInPage nextPath = {this.state.afterSignInPath} />)}></Route>
        <Route path="/account" component={AccountPage} onEnter={this._authenticate.bind(this)}></Route>
        <Route path="/new-post" component={()=>(<NewPostPage user = {this.state.currentUser}/>)} onEnter={this._authenticate.bind(this)}></Route>
        <Route path="/aboutus" component={AboutUsPage}></Route>
        <Route path="/faq" component={FAQPage}></Route>
        <Route path="/manage-posts" component={ManagePostsPage}></Route>
        <Route path="/search" component={PostSearchPage}></Route>
        <Route path="/post" component={PostDetailPage}></Route>
      </Router>
    )
  }
}
