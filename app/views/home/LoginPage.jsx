const React = require("react")

class LoginPage extends React.Component{
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Fav and touch icons */}
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png" />
        <link rel="shortcut icon" href="assets/ico/favicon.png" />
        <title>CollegeStuffSale</title>
        {/* Bootstrap core CSS */}
        <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet" />
        {/* Custom styles for this template */}
        <link href="assets/css/style.css" rel="stylesheet" />
        {/* styles needed for carousel slider */}
        <link href="assets/css/owl.carousel.css" rel="stylesheet" />
        <link href="assets/css/owl.theme.css" rel="stylesheet" />
        {/* Just for debugging purposes. */}
        {/* HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries */}
        {/*[if lt IE 9]>


    <![endif]*/}
        {/* include pace script for automatic web page progress bar  */}
        <div id="wrapper">
          <div className="header">
            <nav className="navbar   navbar-site navbar-default" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                    <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /></button>
                  <a href="/" className="navbar-brand logo logo-title">
                    {/* Original Logo will be placed here  */}
                    <span className="logo-icon"><i className="icon icon-search-1 ln-shadow-logo shape-0" /> </span>
                    College<span>StuffSale </span> </a></div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="/#">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li className="postadd"><a className="btn btn-block   btn-border btn-post btn-danger" href="post-ads.html">Post New Item</a></li>
                  </ul>
                </div>
                {/*/.nav-collapse */}
              </div>
              {/* /.container-fluid */}
            </nav>
          </div>
          {/* /.header */}
          <div className="main-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 login-box">
                  <div className="panel panel-default">
                    <div className="panel-intro text-center">
                      <h2 className="logo-title">
                        {/* Original Logo will be placed here  */}
                        <span className="logo-icon"><i className="icon icon-search-1 ln-shadow-logo shape-0" /> </span> College<span>StuffSale </span>
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
          <div className="footer" id="footer">
            <div className="container">
              <ul className=" pull-left navbar-link footer-nav">
                <li><a href="/"> Home </a> <a href="about-us.html"> About us </a> <a href="/terms"> Terms and
                    Conditions </a> <a href="/privacy"> Privacy Policy </a> <a href="/contact"> Contact us </a> <a href="/faq"> FAQ </a>
                </li></ul>
              <ul className=" pull-right navbar-link footer-nav">
                <li> © 2016 CollegeStuffSale</li>
              </ul>
            </div>
          </div>
          {/* /.footer */}
        </div>
        {/* /.wrapper */}
        {/* Le javascript
================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* include carousel slider plugin  */}
        {/* include form-validation plugin || add this script where you need validation   */}
        {/* include equal height plugin  */}
        {/* include jquery list shorting plugin plugin  */}
        {/* include jquery.fs plugin for custom scroller and selecter  */}
        {/* include custom script for site  */}
      </div>
    )
  }
}
module.exports = LoginPage
