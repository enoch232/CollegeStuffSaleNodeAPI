var NewComponent = React.createClass({
  render: function() {
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
        {/* bxSlider CSS file */}
        <link href="assets/plugins/bxslider/jquery.bxslider.css" rel="stylesheet" />
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
                  <a href="index-v-2.html" className="navbar-brand logo logo-title">
                    {/* Original Logo will be placed here  */}
                    <span className="logo-icon"><i className="icon icon-search-1 ln-shadow-logo shape-0" /> </span>
                    College<span>StuffSale </span> </a></div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="login.html">Login</a></li>
                    <li><a href="signup.html">Signup</a></li>
                    <li className="postadd"><a className="btn btn-block   btn-border btn-post btn-danger" href="post-ads.html">Post New Stuff</a></li>
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
              <ol className="breadcrumb pull-left">
                <li><a href="#"><i className="icon-home fa" /></a></li>
                <li><a href="category.html">All Ads</a></li>
                <li><a href="sub-category-sub-location.html">Electronics</a></li>
                <li className="active">Mobile Phones</li>
              </ol>
              <div className="pull-right backtolist"><a href="sub-category-sub-location.html"> <i className="fa fa-angle-double-left" /> Back to Results</a></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-9 page-content col-thin-right">
                  <div className="inner inner-box ads-details-wrapper">
                    <h2> Xperia™ C3 Dual available
                      <small className="label label-default adlistingtype">Company ad</small>
                    </h2>
                    <span className="info-row"> <span className="date"><i className=" icon-clock"> </i> Today 1:21 pm </span> - <span className="category">Electronics </span>- <span className="item-location"><i className="fa fa-map-marker" /> New York </span> </span>
                    <div className="ads-image">
                      <h1 className="pricetag"> $25</h1>
                      <ul className="bxslider">
                        <li><img src="images/item/tp-big/Image00014.jpg" alt="img" /></li>
                        <li><img src="images/item/tp-big/Image00015.jpg" alt="img" /></li>
                        <li><img src="images/item/tp-big/Image00013.jpg" alt="img" /></li>
                      </ul>
                      <div id="bx-pager">
                        <a className="thumb-item-link" data-slide-index={0} href><img src="images/item/tp/Image00014.jpg" alt="img" /></a>
                        <a className="thumb-item-link" data-slide-index={1} href><img src="images/item/tp/Image00015.jpg" alt="img" /></a>
                        <a className="thumb-item-link" data-slide-index={2} href><img src="images/item/tp/Image00013.jpg" alt="img" /></a>
                      </div>
                    </div>
                    {/*ads-image*/}
                    <div className="Ads-Details">
                      <h5 className="list-title"><strong>Ads Detsils</strong></h5>
                      <div className="row">
                        <div className="ads-details-info col-md-8">
                          <p>Sony Xperia C3 Dual smartphone with 5.50-inch 720x1280 display powered by 1.2GHz
                            processor alongside 1GB RAM and 8-megapixel rear camera. </p>
                          <h4>Camera and video</h4>
                          <ul className="list-circle">
                            <li>5 MP Front-facing camera (720p)</li>
                            <li>Front flash LED</li>
                            <li>Wide view front camera</li>
                            <li>8 MP camera with auto focus</li>
                            <li>HD video recording 1080 p</li>
                            <li>Sony Exmor RS for mobile image sensor</li>
                            <li>HDR (High Dynamic Range) for photos and videos</li>
                            <li>Pulsed LED flash</li>
                            <li>16x digital zoom</li>
                            <li>Superior Auto – automatic scene selection</li>
                            <li>Geotagging – add location info to your photos</li>
                            <li>Object tracking – lock focus on a specific object</li>
                            <li>Red-eye reduction</li>
                            <li>Image capture, supported file format: JPEG</li>
                            <li>Image playback, supported file formats: BMP, GIF, JPEG, PNG; WebP</li>
                            <li>Video capture, supported file formats: 3GPP, MP4</li>
                            <li>Video playback, supported file formats: 3GPP, MP4, M4V, AvI, XVID, WEBM</li>
                          </ul>
                          <h4>Networks</h4>
                          <ul>
                            <li>GSM GPRS/EDGE (2G)</li>
                            <li>UMTS HSPA (3G)</li>
                            <li>LTE (4G)</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <aside className="panel panel-body panel-details">
                            <ul>
                              <li>
                                <p className=" no-margin "><strong>Price:</strong> $ 2,45</p>
                              </li>
                              <li>
                                <p className="no-margin"><strong>Type:</strong> Mobile Mobiles,For sale</p>
                              </li>
                              <li>
                                <p className="no-margin"><strong>Location:</strong> New York </p>
                              </li>
                              <li>
                                <p className=" no-margin "><strong>Condition:</strong> New</p>
                              </li>
                              <li>
                                <p className="no-margin"><strong>Brand:</strong> Sony</p>
                              </li>
                            </ul>
                          </aside>
                          <div className="ads-action">
                            <ul className="list-border">
                              <li><a href="#"> <i className=" fa fa-user" /> More ads by User </a></li>
                              <li><a href="#"> <i className=" fa fa-heart" /> Save ad </a></li>
                              <li><a href="#"> <i className="fa fa-share-alt" /> Share ad </a></li>
                              <li><a href="#reportAdvertiser" data-toggle="modal"> <i className="fa icon-info-circled-alt" /> Report abuse </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="content-footer text-left"><a className="btn  btn-default" data-toggle="modal" href="#contactAdvertiser"><i className=" icon-mail-2" /> Send a message </a> <a className="btn  btn-info"><i className=" icon-phone-1" /> 01680 531 352 </a></div>
                    </div>
                  </div>
                  {/*/.ads-details-wrapper*/}
                </div>
                {/*/.page-content*/}
                <div className="col-sm-3  page-sidebar-right">
                  <aside>
                    <div className="panel sidebar-panel panel-contact-seller">
                      <div className="panel-heading">Contact Seller</div>
                      <div className="panel-content user-info">
                        <div className="panel-body text-center">
                          <div className="seller-info">
                            <h3 className="no-margin">Richard Aki</h3>
                            <p>Location: <strong>New York</strong></p>
                            <p> Joined: <strong>12 Mar 2009</strong></p>
                          </div>
                          <div className="user-ads-action"><a href="#contactAdvertiser" data-toggle="modal" className="btn   btn-default btn-block"><i className=" icon-mail-2" /> Send a message </a> <a className="btn  btn-info btn-block"><i className=" icon-phone-1" /> 01680 531 352
                            </a></div>
                        </div>
                      </div>
                    </div>
                    <div className="panel sidebar-panel">
                      <div className="panel-heading">Safety Tips for Buyers</div>
                      <div className="panel-content">
                        <div className="panel-body text-left">
                          <ul className="list-check">
                            <li> Meet seller at a public place</li>
                            <li> Check the item before you buy</li>
                            <li> Pay only after collecting the item</li>
                          </ul>
                          <p><a className="pull-right" href="#"> Know more <i className="fa fa-angle-double-right" /> </a></p>
                        </div>
                      </div>
                    </div>
                    {/*/.categories-list*/}
                  </aside>
                </div>
                {/*/.page-side-bar*/}
              </div>
            </div>
          </div>
          {/* /.main-container */}
          <div className="footer" id="footer">
            <div className="container">
              <ul className=" pull-left navbar-link footer-nav">
                <li><a href="index-v-2.html"> Home </a> <a href="about-us.html"> About us </a> <a href="#"> Terms and
                    Conditions </a> <a href="#"> Privacy Policy </a> <a href="contact.html"> Contact us </a> <a href="faq.html"> FAQ </a>
                </li></ul>
              <ul className=" pull-right navbar-link footer-nav">
                <li> © 2016 CollegeStuffSale</li>
              </ul>
            </div>
          </div>
          {/* /.footer */}
        </div>
        {/* /.wrapper */}
        {/* Modal contactAdvertiser */}
        <div className="modal fade" id="reportAdvertiser" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                <h4 className="modal-title"><i className="fa icon-info-circled-alt" /> There's something wrong with this ads?
                </h4>
              </div>
              <div className="modal-body">
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="report-reason" className="control-label">Reason:</label>
                    <select name="report-reason" id="report-reason" className="form-control">
                      <option value>Select a reason</option>
                      <option value="soldUnavailable">Item unavailable</option>
                      <option value="fraud">Fraud</option>
                      <option value="duplicate">Duplicate</option>
                      <option value="spam">Spam</option>
                      <option value="wrongCategory">Wrong category</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-email" className="control-label">Your E-mail:</label>
                    <input type="text" name="email" maxLength={60} className="form-control" id="recipient-email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text2" className="control-label">Message <span className="text-count">(300) </span>:</label>
                    <textarea className="form-control" id="message-text2" defaultValue={""} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Send Report</button>
              </div>
            </div>
          </div>
        </div>
        {/* /.modal */}
        {/* Modal contactAdvertiser */}
        <div className="modal fade" id="contactAdvertiser" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                <h4 className="modal-title"><i className=" icon-mail-2" /> Contact advertiser </h4>
              </div>
              <div className="modal-body">
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="control-label">Name:</label>
                    <input className="form-control required" id="recipient-name" placeholder="Your name" data-placement="top" data-trigger="manual" data-content="Must be at least 3 characters long, and must only contain letters." type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sender-email" className="control-label">E-mail:</label>
                    <input id="sender-email" type="text" data-content="Must be a valid e-mail address (user@gmail.com)" data-trigger="manual" data-placement="top" placeholder="email@you.com" className="form-control email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-Phone-Number" className="control-label">Phone Number:</label>
                    <input type="text" maxLength={60} className="form-control" id="recipient-Phone-Number" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="control-label">Message <span className="text-count">(300) </span>:</label>
                    <textarea className="form-control" id="message-text" placeholder="Your message here.." data-placement="top" data-trigger="manual" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <p className="help-block pull-left text-danger hide" id="form-error">&nbsp; The form is not
                      valid. </p>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-success pull-right">Send message!</button>
              </div>
            </div>
          </div>
        </div>
        {/* /.modal */}
        {/* Le javascript
================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* include carousel slider plugin  */}
        {/* include equal height plugin  */}
        {/* include jquery list shorting plugin plugin  */}
        {/* bxSlider Javascript file */}
        {/* include form-validation plugin || add this script where you need validation   */}
        {/* include jquery.fs plugin for custom scroller and selecter  */}
        {/* include custom script for site  */}
      </div>
    );
  }
});