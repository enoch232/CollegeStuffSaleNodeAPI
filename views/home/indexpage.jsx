const React = require("react")
const Category = require("./categories.jsx")
class IndexPage extends React.Component{
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
        <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Custom styles for this template */}
        <link href="assets/css/style.css" rel="stylesheet" />
        {/* styles needed for carousel slider */}
        <link href="assets/css/owl.carousel.css" rel="stylesheet" />
        <link href="assets/css/owl.theme.css" rel="stylesheet" />

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
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li className="postadd"><a className="btn btn-block   btn-border btn-post btn-danger" href="/posts/new">Post New Item</a></li>
                  </ul>
                </div>
                {/*/.nav-collapse */}
              </div>
              {/* /.container-fluid */}
            </nav>
          </div>
          {/* /.header */}
          <div className="intro" style={{backgroundImage: 'url(assets/img/bg3.jpg)'}}>
            <div className="dtable hw100">
              <div className="dtable-cell hw100">
                <div className="container text-center">
                  <h1 className="intro-title animated fadeInDown">The Largest Online Marketplace for Your College Expereince </h1>
                  <p className="sub animateme fittext3 animated fadeIn"> Buy, Sell Your College Items Today </p>
                  <div className="row search-row animated fadeInUp">
                    <div className="col-lg-4 col-sm-4 search-col relative locationicon">
                      <i className="icon-location-2 icon-append" />
                      <input type="text" name="country" id="autocomplete-ajax" className="form-control locinput input-rel searchtag-input has-icon" placeholder="University/School..." defaultValue />
                    </div>
                    <div className="col-lg-4 col-sm-4 search-col relative"><i className="icon-docs icon-append" />
                      <input type="text" name="ads" className="form-control has-icon" placeholder="I'm looking for a ..." defaultValue />
                    </div>
                    <div className="col-lg-4 col-sm-4 search-col">
                      <button className="btn btn-primary btn-search btn-block"><i className="icon-search" /><strong>Find</strong></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.intro */}
          <div className="main-container">
            <div className="container">
              <div className="col-lg-12 content-box" id="content-box">
                {/*moved to react file */}
                <Category />
              </div>
              <div style={{clear: 'both'}} />

              <div className="col-lg-12 content-box ">
                <div className="row row-featured">
                  <div style={{clear: 'both'}} />
                  <div className=" relative  content  clearfix">
                    <div className>
                      <div className="tab-lite">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs " role="tablist">
                          <li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab"><i className="icon-location-2" /> Top Locations</a></li>
                          <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab"><i className="icon-search" /> Top Search</a>
                          </li>
                          <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab"><i className="icon-th-list" /> Top Makes</a>
                          </li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    
                  </div>
                  
                </div>
                <div className="col-sm-3 page-sidebar col-thin-left">
                  <aside>
                    
                  </aside>
                </div>
              </div>
            </div>
          </div>
          {/* /.main-container */}
          <div className="page-info hasOverly" style={{background: 'url(assets/img/bg.jpg)', backgroundSize: 'cover'}}>
            <div className="bg-overly">
              <div className="container text-center section-promo">
                <div className="row">
                  <div className="col-sm-3 col-xs-6 col-xxs-12">
                    <div className="iconbox-wrap">
                      <div className="iconbox">
                        <div className="iconbox-wrap-icon">
                          <i className="icon  icon-group" />
                        </div>
                        <div className="iconbox-wrap-content">
                          <h5><span>2200</span></h5>
                          <div className="iconbox-wrap-text">Trusted Seller</div>
                        </div>
                      </div>
                      {/* /..iconbox */}
                    </div>
                    {/*/.iconbox-wrap*/}
                  </div>
                  <div className="col-sm-3 col-xs-6 col-xxs-12">
                    <div className="iconbox-wrap">
                      <div className="iconbox">
                        <div className="iconbox-wrap-icon">
                          <i className="icon  icon-th-large-1" />
                        </div>
                        <div className="iconbox-wrap-content">
                          <h5><span>100</span></h5>
                          <div className="iconbox-wrap-text">Categories</div>
                        </div>
                      </div>
                      {/* /..iconbox */}
                    </div>
                    {/*/.iconbox-wrap*/}
                  </div>
                  <div className="col-sm-3 col-xs-6  col-xxs-12">
                    <div className="iconbox-wrap">
                      <div className="iconbox">
                        <div className="iconbox-wrap-icon">
                          <i className="icon  icon-map" />
                        </div>
                        <div className="iconbox-wrap-content">
                          <h5><span>700</span></h5>
                          <div className="iconbox-wrap-text">Location</div>
                        </div>
                      </div>
                      {/* /..iconbox */}
                    </div>
                    {/*/.iconbox-wrap*/}
                  </div>
                  <div className="col-sm-3 col-xs-6 col-xxs-12">
                    <div className="iconbox-wrap">
                      <div className="iconbox">
                        <div className="iconbox-wrap-icon">
                          <i className="icon icon-facebook" />
                        </div>
                        <div className="iconbox-wrap-content">
                          <h5><span>50,000</span></h5>
                          <div className="iconbox-wrap-text"> Facebook Fans</div>
                        </div>
                      </div>
                      {/* /..iconbox */}
                    </div>
                    {/*/.iconbox-wrap*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.page-info */}
          <div className="page-bottom-info">
            <div className="page-bottom-info-inner">
              <div className="page-bottom-info-content text-center">
                <h1>For Business Inquires and Assistance: 623-271-5349</h1>
                <a className="btn  btn-lg btn-primary-dark" href="tel:+6232715349">
                  <i className="icon-mobile" /> <span className="hide-xs color50">Call Now:</span> (623) 217-5349 </a>
              </div>
            </div>
          </div>
          <div className="footer" id="footer">
            <div className="container">
              <ul className=" pull-left navbar-link footer-nav">
                <li><a href="/"> Home </a> <a href="/aboutus"> About us </a> <a href="/terms"> Terms and
                    Conditions </a> <a href="#"> Privacy Policy </a> <a href="/contact"> Contact us </a> <a href="/faq"> FAQ </a>
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
        {/* include equal height plugin  */}
        {/* include jquery list shorting plugin plugin  */}
        {/* include jquery.fs plugin for custom scroller and selecter  */}
        {/* include custom script for site  */}
        {/* include jquery autocomplete plugin  */}
      </div>
    )
  }
}
module.exports = IndexPage