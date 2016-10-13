const React = require("react")
const SignUpForm = require('./signupform')
class SignUpPage extends React.Component{
	render(){
		return (
	      <html>
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
	        {/* <link href="assets/css/owl.carousel.css" rel="stylesheet"> */}
	        <link href="assets/css/owl.theme.css" rel="stylesheet" />

	        <body>
		        <div id="wrapper">
		          <div className="header">
		            <nav className="navbar navbar-site navbar-default" role="navigation">
		              <div className="container">
		                <div className="navbar-header">
		                  <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
		                    <span className="sr-only">Toggle navigation</span> <span className="icon-bar" />
		                    <span className="icon-bar" /> <span className="icon-bar" />
		                  </button>
		                  <a href="/" className="navbar-brand logo logo-title">
		                    {/* Original Logo will be placed here  */}
		                    <span className="logo-icon">
		                      <i className="icon icon-search-1 ln-shadow-logo shape-0">
		                      </i>
		                    </span> College<span>StuffSale</span>
		                  </a>
		                </div>
		                <div className="navbar-collapse collapse">
		                  <ul className="nav navbar-nav navbar-right">
		                    <li><a href="/login">Login</a></li>
		                    <li><a href="/signup">Signup</a></li>
		                    <li className="postadd">
		                      <a className="btn btn-block btn-border btn-post btn-danger" href="/posts/new">Post New Item</a>
		                    </li>
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
		                <div className="col-md-8 page-content">
		                  <div className="inner-box category-content">
		                    <h2 className="title-2"><i className="icon-user-add" /> Create a free account </h2>
		                    <div className="row">
		                      <div className="col-sm-12" id="sign-up-form">
		                      	<SignUpForm />
		                      </div>
		                    </div>
		                  </div>
		                </div>
		                {/* /.page-content */}
		                <div className="col-md-4 reg-sidebar">
		                  <div className="reg-sidebar-inner text-center">
		                    <div className="promo-text-box"><i className=" icon-picture fa fa-4x icon-color-1" />
		                      <h3><strong>Post a Free Classified</strong></h3>
		                      <p> Post your free online classified ads with us. Lorem ipsum dolor sit amet, consectetur
		                        adipiscing elit. </p>
		                    </div>
		                    <div className="promo-text-box"><i className=" icon-pencil-circled fa fa-4x icon-color-2" />
		                      <h3><strong>Create and Manage Items</strong></h3>
		                      <p> Nam sit amet dui vel orci venenatis ullamcorper eget in lacus.
		                        Praesent tristique elit pharetra magna efficitur laoreet.</p>
		                    </div>
		                    <div className="promo-text-box"><i className="  icon-heart-2 fa fa-4x icon-color-3" />
		                      <h3><strong>Create your Favorite ads list.</strong></h3>
		                      <p> PostNullam quis orci ut ipsum mollis malesuada varius eget metus.
		                        Nulla aliquet dui sed quam iaculis, ut finibus massa tincidunt.</p>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              {/* /.row */}
		            </div>
		            {/* /.container */}
		          </div>
		          {/* /.main-container */}
		          <div className="footer" id="footer">
		            <div className="container">
		              <ul className=" pull-left navbar-link footer-nav">
		                <li>
		                  <a href="/">
		                    Home
		                  </a>
		                  <a href="/aboutus">
		                    About us
		                  </a>
		                  <a href="/terms">
		                    Terms and Conditions
		                  </a>
		                  <a href="/privacy">
		                    Privacy Policy
		                  </a>
		                  <a href="/contact">
		                    Contact us
		                  </a>
		                  <a href="/faq">
		                    FAQ
		                  </a>
		                </li>
		              </ul>
		              <ul className=" pull-right navbar-link footer-nav">
		                <li> © 2016 CollegeStuffSale</li>
		              </ul>
		            </div>
		          </div>
		          {/*/.footer*/}
		        </div>
	        </body>
	        {/* /.wrapper */} {/* Le javascript
	================================================== */}
	        {/* Placed at the end of the document so the pages load faster */}
	        {/* include carousel slider plugin  */}
	        {/* include equal height plugin  */}
	        {/* include jquery list shorting plugin plugin  */}
	        {/* include jquery.fs plugin for custom scroller and selecter  */}
	        {/* include custom script for site  */}
	      </html>
    	)
		
	}

}
module.exports = SignUpPage