import React from 'react'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

class SignInPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  _handleSubmit(){
    console.log("fetching..")
    return fetch('http://localhost:3000/api/sessions', {
      method: 'POST',
      headers: {
        'Accept':"application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson)=>{
      console.log(responseJson)
      if (responseJson.webToken){
        localStorage.setItem("collegestuffsale-webtoken", responseJson.webToken)
        this.props.router.push('/account')
      }else{
        console.log(responseJson)
      }

    })
    .catch((error) => {
      console.error(error)
    })


  }
  render() {
    return (
      <div>
        <div id="wrapper">
          <div className="main-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 login-box">
                  <div className="panel panel-default">
                    <div className="panel-intro text-center">
                      <h2 className="logo-title">
                        {/* Original Logo will be placed here  */}
                        Sign In
                      </h2>
                    </div>
                    <div className="panel-body">
                      <form role="form">
                        <div className="form-group">
                          <label htmlFor="sender-email" className="control-label">email:</label>
                          <div className="input-icon"><i className="icon-user fa" />
                            <input id="sender-email" type="text" placeholder="Username" className="form-control email" value = {this.state.email} onChange = {(event) => this.setState({email: event.target.value.substr(0,140)})} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="user-pass" className="control-label">Password:</label>
                          <div className="input-icon"><i className="icon-lock fa" />
                            <input type="password" className="form-control" placeholder="Password" id="user-pass" value = {this.state.password} onChange = {(event) => this.setState({password: event.target.value.substr(0,25)})}/>
                          </div>
                        </div>
                        <div className="form-group">
                          <a className="btn btn-primary btn-block" onClick = {this._handleSubmit.bind(this)}>Submit</a>
                        </div>
                      </form>
                    </div>
                    <div className="panel-footer">
                      <div className="checkbox pull-left">
                        <label> <input type="checkbox" defaultValue={1} name="remember" id="remember" /> Keep me logged
                          in</label>
                      </div>
                      <p className="text-center pull-right"><a href="/forgot-password"> Lost your password? </a>
                      </p>
                      <div style={{clear: 'both'}} />
                    </div>
                  </div>
                  <div className="login-box-btm text-center">
                    <p> Don't have an account? <br />
                      <a href="/signup"><strong>Sign Up !</strong> </a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.main-container */}
        </div>
      </div>
    )
  }
}
export default withRouter(SignInPage)
