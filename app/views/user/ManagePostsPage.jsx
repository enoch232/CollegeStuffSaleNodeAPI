import React from 'react'
export default class ManagePostsPage extends React.Component{
  render() {
    return (
      <div>
        {/* include pace script for automatic web page progress bar  */}
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
                          <h5 className="collapse-title no-border"> My Classified <a className="pull-right" data-toggle="collapse" href="#MyClassified"><i className="fa fa-angle-down" /></a></h5>
                          <div id="MyClassified" className="panel-collapse collapse in">
                            <ul className="acc-list">
                              <li><a href="/account"><i className="icon-home" /> Personal Home </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* /.collapse-box  */}
                        <div className="collapse-box">
                          <h5 className="collapse-title"> My Ads <a className="pull-right" data-toggle="collapse" href="#MyAds"><i className="fa fa-angle-down" /></a>
                          </h5>
                          <div id="MyAds" className="panel-collapse collapse in">
                            <ul className="acc-list">
                              <li className="active"><a href="#"><i className="icon-docs" /> My
                                  ads <span className="badge">42</span> </a></li>
                              <li><a href="/account-favourites"><i className="icon-heart" />
                                  Favourites<span className="badge">42</span> </a></li>
                              <li><a href="/account-saved-search"><i className="icon-star-circled" />
                                  Saved search <span className="badge">42</span> </a></li>
                              <li><a href="/account-archives"><i className="icon-folder-close" />
                                  Archives<span className="badge">42</span></a></li>
                              <li><a href="/account-pending-approval-posts"><i className="icon-hourglass" /> Pending approval <span className="badge">42</span></a></li>
                            </ul>
                          </div>
                        </div>
                        {/* /.collapse-box  */}
                        <div className="collapse-box">
                          <h5 className="collapse-title"> Terminate Account <a className="pull-right" data-toggle="collapse" href="#TerminateAccount"><i className="fa fa-angle-down" /></a></h5>
                          <div id="TerminateAccount" className="panel-collapse collapse in">
                            <ul className="acc-list">
                              <li><a href="/account-close"><i className="icon-cancel-circled " /> Close
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
                    <h2 className="title-2"><i className="icon-docs" /> My Ads </h2>
                    <div className="table-responsive">
                      <div className="table-action">
                        <label htmlFor="checkAll">
                          <input type="checkbox" onclick="checkAll(this)" id="checkAll" />
                          Select: All | <a href="#" className="btn btn-xs btn-danger">Delete <i className="glyphicon glyphicon-remove " /></a> </label>
                        <div className="table-search pull-right col-xs-7">
                          <div className="form-group">
                            <label className="col-xs-5 control-label text-right">Search <br />
                              <a title="clear filter" className="clear-filter" href="#clear">[clear]</a>
                            </label>
                            <div className="col-xs-7 searchpan">
                              <input type="text" className="form-control" id="filter" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <table id="addManageTable" className="table table-striped table-bordered add-manage-table table demo" data-filter="#filter" data-filter-text-only="true">
                        <thead>
                          <tr>
                            <th data-type="numeric" data-sort-initial="true" />
                            <th> Photo</th>
                            <th data-sort-ignore="true"> Adds Details</th>
                            <th data-type="numeric"> Price</th>
                            <th> Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{width: '2%'}} className="add-img-selector">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </div>
                            </td>
                            <td style={{width: '14%'}} className="add-img-td"><a href="ads-details.html"><img className="thumbnail  img-responsive" src="assets/img/item/FreeGreatPicture.com-46407-nexus-4-starts-at-199.jpg" alt="img" /></a></td>
                            <td style={{width: '58%'}} className="ads-details-td">
                              <div>
                                <p><strong> <a href="ads-details.html" title="Brend New Nexus 4">Brand New
                                      Nexus 4</a> </strong></p>
                                <p><strong> Posted On </strong>:
                                  02-Oct-2014, 04:38 PM </p>
                                <p><strong>Visitors </strong>: 221 <strong>Located In:</strong> New York
                                </p>
                              </div>
                            </td>
                            <td style={{width: '16%'}} className="price-td">
                              <div><strong> $199</strong></div>
                            </td>
                            <td style={{width: '10%'}} className="action-td">
                              <div>
                                <p><a className="btn btn-primary btn-xs"> <i className="fa fa-edit" /> Edit </a>
                                </p>
                                <p><a className="btn btn-info btn-xs"> <i className="fa fa-mail-forward" /> Share
                                  </a></p>
                                <p><a className="btn btn-danger btn-xs"> <i className=" fa fa-trash" /> Delete
                                  </a></p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{width: '2%'}} className="add-img-selector">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </div>
                            </td>
                            <td style={{width: '14%'}} className="add-img-td"><a href="ads-details.html"><img className="thumbnail  img-responsive" src="assets/img/item/tp/Image00020.jpg" alt="img" /></a></td>
                            <td style={{width: '58%'}} className="ads-details-td">
                              <div>
                                <p><strong> <a href="ads-details.html" title="I pod 16 gb">I pod 16 gb </a>
                                  </strong></p>
                                <p><strong> Posted On </strong>:
                                  02-Oct-2014, 04:38 PM </p>
                                <p><strong>Visitors </strong>: 680 <strong>Located In:</strong> New York
                                </p>
                              </div>
                            </td>
                            <td style={{width: '16%'}} className="price-td">
                              <div><strong> $90</strong></div>
                            </td>
                            <td style={{width: '10%'}} className="action-td">
                              <div>
                                <p><a className="btn btn-primary btn-xs"> <i className="fa fa-edit" /> Edit </a>
                                </p>
                                <p><a className="btn btn-info btn-xs"> <i className="fa fa-mail-forward" /> Share
                                  </a></p>
                                <p><a className="btn btn-danger btn-xs"> <i className=" fa fa-trash" /> Delete
                                  </a></p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{width: '2%'}} className="add-img-selector">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </div>
                            </td>
                            <td style={{width: '14%'}} className="add-img-td"><a href="ads-details.html"><img className="thumbnail  img-responsive" src="assets/img/item/tp/Image00014.jpg" alt="img" /></a></td>
                            <td style={{width: '58%'}} className="ads-details-td">
                              <div>
                                <p><strong> <a href="ads-details.html" title="SAMSUNG GALAXY S CORE Duos ">SAMSUNG
                                      GALAXY S CORE Duos </a> </strong></p>
                                <p><strong> Posted On </strong>:
                                  02-Oct-2014, 04:38 PM </p>
                                <p><strong>Visitors </strong>: 221 <strong>Located In:</strong> New York
                                </p>
                              </div>
                            </td>
                            <td style={{width: '16%'}} className="price-td">
                              <div><strong> $150</strong></div>
                            </td>
                            <td style={{width: '10%'}} className="action-td">
                              <div>
                                <p><a className="btn btn-primary btn-xs"> <i className="fa fa-edit" /> Edit </a>
                                </p>
                                <p><a className="btn btn-info btn-xs"> <i className="fa fa-mail-forward" /> Share
                                  </a></p>
                                <p><a className="btn btn-danger btn-xs"> <i className=" fa fa-trash" /> Delete
                                  </a></p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{width: '2%'}} className="add-img-selector">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </div>
                            </td>
                            <td style={{width: '14%'}} className="add-img-td"><a href="ads-details.html"><img className="thumbnail  img-responsive" src="assets/img/item/tp/Image00002.jpg" alt="img" /></a></td>
                            <td style={{width: '58%'}} className="ads-details-td">
                              <div>
                                <p><strong> <a href="ads-details.html" title="HTC one x 32 GB intact Seal box For sale">HTC one x 32
                                      GB intact Seal box For sale</a> </strong></p>
                                <p><strong> Posted On </strong>:
                                  02-Sept-2014, 09:00 PM </p>
                                <p><strong>Visitors </strong>: 896 <strong>Located In:</strong> New York
                                </p>
                              </div>
                            </td>
                            <td style={{width: '16%'}} className="price-td">
                              <div><strong> $210</strong></div>
                            </td>
                            <td style={{width: '10%'}} className="action-td">
                              <div>
                                <p><a className="btn btn-primary btn-xs"> <i className="fa fa-edit" /> Edit </a>
                                </p>
                                <p><a className="btn btn-info btn-xs"> <i className="fa fa-mail-forward" /> Share
                                  </a></p>
                                <p><a className="btn btn-danger btn-xs"> <i className=" fa fa-trash" /> Delete
                                  </a></p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{width: '2%'}} className="add-img-selector">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </div>
                            </td>
                            <td style={{width: '14%'}} className="add-img-td"><a href="ads-details.html"><img className="thumbnail  img-responsive" src="assets/img/item/tp/Image00011.jpg" alt="img" /></a></td>
                            <td style={{width: '58%'}} className="ads-details-td">
                              <div>
                                <p><strong> <a href="ads-details.html" title="Sony Xperia TX ">Sony Xperia
                                      TX </a> </strong></p>
                                <p><strong> Posted On </strong>:
                                  02-Oct-2014, 04:38 PM </p>
                                <p><strong>Visitors </strong>: 221 <strong>Located In:</strong> New York
                                </p>
                              </div>
                            </td>
                            <td style={{width: '16%'}} className="price-td">
                              <div><strong> $260</strong></div>
                            </td>
                            <td style={{width: '10%'}} className="action-td">
                              <div>
                                <p><a className="btn btn-primary btn-xs"> <i className="fa fa-edit" /> Edit </a>
                                </p>
                                <p><a className="btn btn-info btn-xs"> <i className="fa fa-mail-forward" /> Share
                                  </a></p>
                                <p><a className="btn btn-danger btn-xs"> <i className=" fa fa-trash" /> Delete
                                  </a></p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
          {/*/.footer*/}
        </div>
        {/* /.wrapper */}
        {/* Le javascript
================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* include checkRadio plugin //Custom check & Radio  */}
        {/* include carousel slider plugin  */}
        {/* include equal height plugin  */}
        {/* include jquery list shorting plugin plugin  */}
        {/* include footable   */}
        {/* include custom script for ads table [select all checkbox]  */}
        {/* include jquery.fs plugin for custom scroller and selecter  */}
        {/* include custom script for site  */}
      </div>
    )
  }
}
