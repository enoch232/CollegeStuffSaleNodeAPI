import React from 'react'
export default class AccountPage extends React.Component{
  render() {
    return (
      <div>
        <div id="wrapper">
          {/* /.header */}
          <div className="main-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 page-sidebar">
                  <aside>
                    <div className="inner-box">
                      <div className="user-panel-sidebar">
                        <div className="collapse-box">
                          <h5 className="collapse-title no-border"> My Classified <a href="#MyClassified" data-toggle="collapse" className="pull-right"><i className="fa fa-angle-down" /></a></h5>
                          <div className="panel-collapse collapse in" id="MyClassified">
                            <ul className="acc-list">
                              <li><a className="active" href="account-home.html"><i className="icon-home" />
                                  Personal Home </a></li>
                            </ul>
                          </div>
                        </div>
                        {/* /.collapse-box  */}
                        <div className="collapse-box">
                          <h5 className="collapse-title"> My Ads <a href="#MyAds" data-toggle="collapse" className="pull-right"><i className="fa fa-angle-down" /></a></h5>
                          <div className="panel-collapse collapse in" id="MyAds">
                            <ul className="acc-list">
                              <li><a href="/manage-posts"><i className="icon-docs" /> My Posts <span className="badge">42</span> </a></li>
                              <li><a href="account-favourite-ads.html"><i className="icon-heart" />
                                  Favourite ads <span className="badge">42</span> </a></li>
                              <li><a href="account-saved-search.html"><i className="icon-star-circled" />
                                  Saved search <span className="badge">42</span> </a></li>
                              <li><a href="account-archived-ads.html"><i className="icon-folder-close" />
                                  Archived ads <span className="badge">42</span></a></li>
                              <li><a href="account-pending-approval-ads.html"><i className="icon-hourglass" /> Pending approval <span className="badge">42</span></a></li>
                            </ul>
                          </div>
                        </div>
                        {/* /.collapse-box  */}
                        <div className="collapse-box">
                          <h5 className="collapse-title"> Terminate Account <a href="#TerminateAccount" data-toggle="collapse" className="pull-right"><i className="fa fa-angle-down" /></a></h5>
                          <div className="panel-collapse collapse in" id="TerminateAccount">
                            <ul className="acc-list">
                              <li><a href="account-close.html"><i className="icon-cancel-circled " /> Close
                                  account </a></li>
                            </ul>
                          </div>
                        </div>
                        {/* /.collapse-box  */}
                      </div>
                    </div>
                    {/* /.inner-box  */}
                  </aside>
                </div>
                {/*/.page-sidebar*/}
                <div className="col-sm-9 page-content">
                  <div className="inner-box">
                    <div className="row">
                      <div className="col-md-5 col-xs-4 col-xxs-12">
                        <h3 className="no-padding text-center-480 useradmin"><a href><img className="userImg" src="assets/img/user.jpg" alt="user" /> Jhon Doe
                          </a></h3>
                      </div>
                      <div className="col-md-7 col-xs-8 col-xxs-12">
                        <div className="header-data text-center-xs">
                          {/* Traffic data */}
                          <div className="hdata">
                            <div className="mcol-left">
                              {/* Icon with red background */}
                              <i className="fa fa-eye ln-shadow" /></div>
                            <div className="mcol-right">
                              {/* Number of visitors */}
                              <p><a href="#">7000</a> <em>visits</em></p>
                            </div>
                            <div className="clearfix" />
                          </div>
                          {/* revenue data */}
                          <div className="hdata">
                            <div className="mcol-left">
                              {/* Icon with green background */}
                              <i className="icon-th-thumb ln-shadow" /></div>
                            <div className="mcol-right">
                              {/* Number of visitors */}
                              <p><a href="#">12</a><em>Ads</em></p>
                            </div>
                            <div className="clearfix" />
                          </div>
                          {/* revenue data */}
                          <div className="hdata">
                            <div className="mcol-left">
                              {/* Icon with blue background */}
                              <i className="fa fa-user ln-shadow" /></div>
                            <div className="mcol-right">
                              {/* Number of visitors */}
                              <p><a href="#">18</a> <em>Favorites </em></p>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-box">
                    <div className="welcome-msg">
                      <h3 className="page-sub-header2 clearfix no-padding">Hello Jhon Doe </h3>
                      <span className="page-sub-header-sub small">You last logged in at: 01-01-2014 12:40 AM [UK time (GMT + 6:00hrs)]</span>
                    </div>
                    <div id="accordion" className="panel-group">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title"><a href="#collapseB1" data-toggle="collapse"> My
                              details </a></h4>
                        </div>
                        <div className="panel-collapse collapse in" id="collapseB1">
                          <div className="panel-body">
                            <form className="form-horizontal" role="form">
                              <div className="form-group">
                                <label className="col-sm-3 control-label">First Name</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" placeholder="Jhon" />
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-3 control-label">Last name</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" placeholder="Doe" />
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-3 control-label">Email</label>
                                <div className="col-sm-9">
                                  <input type="email" className="form-control" placeholder="jhon.deo@example.com" />
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-3 control-label">Address</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" placeholder=".." />
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="Phone" className="col-sm-3 control-label">Phone</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="Phone" placeholder="880 124 9820" />
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-3 control-label">Postcode</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" placeholder={1217} />
                                </div>
                              </div>
                              <div className="form-group hide"> {/* remove it if dont need this part */}
                                <label className="col-sm-3 control-label">Facebook account map</label>
                                <div className="col-sm-9">
                                  <div className="form-control"><a className="link" href="fb.com">Jhone.doe</a> <a className> <i className="fa fa-minus-circle" /></a></div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9" />
                              </div>
                              <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                  <button type="submit" className="btn btn-default">Update</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title"><a href="#collapseB2" data-toggle="collapse"> Settings </a>
                          </h4>
                        </div>
                        <div className="panel-collapse collapse" id="collapseB2">
                          <div className="panel-body">
                            <form className="form-horizontal" role="form">
                              <div className="form-group">
                                <div className="col-sm-12">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox" />
                                      Comments are enabled on my ads </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-3 control-label">New Password</label>
                                <div className="col-sm-9">
                                  <input type="password" className="form-control" placeholder />
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-3 control-label">Confirm Password</label>
                                <div className="col-sm-9">
                                  <input type="password" className="form-control" placeholder />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                  <button type="submit" className="btn btn-default">Update</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title"><a href="#collapseB3" data-toggle="collapse">
                              Preferences </a></h4>
                        </div>
                        <div className="panel-collapse collapse" id="collapseB3">
                          <div className="panel-body">
                            <div className="form-group">
                              <div className="col-sm-12">
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" />
                                    I want to receive newsletter. </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" />
                                    I want to receive advice on buying and selling. </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/.row-box End*/}
                  </div>
                </div>
                {/*/.page-content*/}
              </div>
              {/*/.row*/}
            </div>
            {/*/.container*/}
          </div>
          {/* /.main-container */}
        </div>
      </div>
    )
  }
}
