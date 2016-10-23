import React from 'react'
import {browserHistory} from 'react-router'
export default class IndexPage extends React.Component{
  constructor(props){
    super(props)

  }
  _pressFind(){
    browserHistory.push('/search')
  }
  render() {
    return (
      <div>
        {/* include pace script for automatic web page progress bar  */}
        <div id="wrapper">
          {/* /.header */}
          <div className="intro" style={{backgroundImage: 'url(assets/img/bg3.jpg)'}}>
            <div className="dtable hw100">
              <div className="dtable-cell hw100">
                <div className="container text-center">
                  <h1 className="intro-title animated fadeInDown">The Online Marketplace for College Experience. </h1>
                  <p className="sub animateme fittext3 animated fadeIn"> Buy, Sell Your College Essentials Today! </p>
                  <div className="row search-row animated fadeInUp">
                    <div className="col-lg-4 col-sm-4 search-col relative locationicon">
                      <i className="icon-location-2 icon-append" />
                      <input type="text" name="country" id="autocomplete-ajax" className="form-control locinput input-rel searchtag-input has-icon" placeholder="University/School..."/>
                    </div>
                    <div className="col-lg-4 col-sm-4 search-col relative"><i className="icon-docs icon-append" />
                      <input type="text" name="ads" className="form-control has-icon" placeholder="I'm looking for a ..." />
                    </div>
                    <div className="col-lg-4 col-sm-4 search-col">
                      <button className="btn btn-primary btn-search btn-block" onClick = {this._pressFind.bind(this)}><i className="icon-search" /><strong>Find</strong></button>
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
                <div className="row row-featured row-featured-category">
          		  	<div className="col-lg-12  box-title no-border">
          	        <div className="inner"><h2><span>Browse by</span> Category <a href="/search" className="sell-your-item"> View more <i className="icon-th-list"></i> </a></h2>
          	        </div>
          	      </div>

          	      <div className="col-md-3 col-md-4 col-sm-4 col-xs-6 f-category">
                    <a href="/search"><img src="/assets/img/category/cellphones.png" className="img-responsive" alt="img"/>
                      <h6> Cellphones</h6>
                    </a>
          	      </div>

          	      <div className="col-md-3 col-md-4 col-sm-4 col-xs-6 f-category">
                    <a href="/search"><img src="/assets/img/category/laptops.png" className="img-responsive" alt="img"/>
                    	<h6>Electronics </h6>
                    </a>
          	      </div>

          	      <div className="col-md-3 col-md-4 col-sm-4 col-xs-6 f-category">
                    <a href="/search">
                    	<img src="/assets/img/category/textbooks.jpg" className="img-responsive" alt="img"/>
                      <h6> Textbooks </h6>
                    </a>
          	      </div>

          	      <div className="col-md-3 col-md-4 col-sm-4 col-xs-6 f-category">
          	        <a href="/search"><img src="/assets/img/category/home .png" className="img-responsive" alt="img"/>
          	        	<h6> Home </h6>
          	        </a>
          	      </div>
                </div>
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
                          <h5><span>2</span></h5>
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
                          <h5><span>4</span></h5>
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
                          <h5><span>1</span></h5>
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
                          <h5><span>No</span></h5>
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
          {/* /.footer */}
        </div>
      </div>
    )
  }
}
