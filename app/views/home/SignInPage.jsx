import React from 'react'

export default class SignInPage extends React.Component{
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
                          <label htmlFor="sender-email" className="control-label">Username:</label>
                          <div className="input-icon"><i className="icon-user fa" />
                            <input id="sender-email" type="text" placeholder="Username" className="form-control email" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="user-pass" className="control-label">Password:</label>
                          <div className="input-icon"><i className="icon-lock fa" />
                            <input type="password" className="form-control" placeholder="Password" id="user-pass" />
                          </div>
                        </div>
                        <div className="form-group">
                          <a href="/account" className="btn btn-primary  btn-block">Submit</a>
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
