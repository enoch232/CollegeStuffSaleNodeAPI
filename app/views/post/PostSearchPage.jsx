import React from 'react'
import PostInSearch from './PostInSearch.jsx'
export default class PostSearchPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    console.log("fetching the list of posts")
    return fetch("http://localhost:3000/api/posts",{
        method: "GET",
        headers: {
          "Authorization":"bearer"+localStorage.getItem("collegestuffsale-webtoken"),
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
    })
    .then((response)=>{
      return response.json()
    })
    .then((responseJson)=>{
      console.log(responseJson)
      if (responseJson.posts){
        this.setState({
          posts: responseJson.posts
        })
      }
    })
  }
  render(){
    return(
      <div>
        {/* /.header */}
        <div className="search-row-wrapper">
          <div className="container ">
            <form action="#" method="GET">
              <div className="col-sm-3">
                <input className="form-control keyword" type="text" placeholder="e.g. Mobile Sale" />
              </div>
              <div className="col-sm-3">
                <select className="form-control selecter" name="category" id="search-category">
                  <option value="Automobiles"> Automobiles</option>
                  <option value="Entertainment"> Entertainment</option>
                  <option value="Home"> Home</option>
                  <option value="Jobs"> Jobs</option>
                  <option value="Other"> Other</option>
                          --&gt;
                </select>
              </div>
              <div className="col-sm-3">
                <select className="form-control selecter" name="location" id="id-location">
                  <option selected="selected" value>All Locations</option>
                  <option value="AZ">Arizona</option>
                </select>
              </div>
              <div className="col-sm-3">
                <button className="btn btn-block btn-primary"><i className="fa fa-search" /></button>
              </div>
            </form>
          </div>
        </div>
      {/* /.search-row */}
        <div className="main-container">
          <div className="container">
            <div className="row">
            {/* this (.mobile-filter-sidebar) part will be position fixed in mobile version */}
              <div className="col-sm-3 page-sidebar mobile-filter-sidebar">
                <aside>
                  <div className="inner-box">
                    <div className="categories-list  list-filter">
                      <h5 className="list-title">
                        <strong>
                          <a href="#">
                            All Categories
                          </a>
                        </strong>
                      </h5>
                      <ul className=" list-unstyled">
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">Electronics</span>
                            {/*<span class="count">&nbsp;8626</span>*/}
                          </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">Automobiles </span>
                          </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">Home </span>
                            {/*<span class="count">&nbsp;742</span>*/}
                          </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">Roomates </span>
                            {/*<span class="count">&nbsp;8525</span>*/}
                          </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">Textbooks </span>
                            {/*<span class="count">&nbsp;357</span>*/}
                          </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">Learning </span>
                            {/*<span class="count">&nbsp;3576</span>*/}
                          </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">Jobs </span>
                          </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">
                              Cars &amp; Vehicles
                            </span>
                            {/*<span class="count">&nbsp;801</span>*/}
                          </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">
                            <span className="title">Beauty</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*/.locations-list*/}
                    <div className="locations-list  list-filter">
                      <h5 className="list-title">
                        <strong>
                          <a href="#">
                            Price range
                          </a>
                        </strong>
                      </h5>
                      <form role="form" className="form-inline ">
                        <div className="form-group col-sm-4 no-padding">
                          <input type="text" placeholder="$ 2000 " id="minPrice" className="form-control" />
                        </div>
                        <div className="form-group col-sm-1 no-padding text-center hidden-xs"> -
                        </div>
                        <div className="form-group col-sm-4 no-padding">
                          <input type="text" placeholder="$ 3000 " id="maxPrice" className="form-control" />
                        </div>
                        <div className="form-group col-sm-3 no-padding">
                          <button className="btn btn-default pull-right btn-block-xs" type="submit">GO</button>
                        </div>
                      </form>
                      <div style={{clear: 'both'}}></div>
                    </div>
                    {/*/.list-filter*/}
                    <div className="locations-list  list-filter">
                      <h5 className="list-title">
                        <strong>
                          <a href="#">Condition</a>
                        </strong>
                      </h5>
                      <ul className="browse-list list-unstyled long-list">
                        <li>
                          <a href="sub-category-sub-location.html">New </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">Excellent </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">Great </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">Acceptable </a>
                        </li>
                        <li>
                          <a href="sub-category-sub-location.html">Bad </a>
                        </li>
                      </ul>
                    </div>
                          {/*/.list-filter*/}
                    <div style={{clear: 'both'}}>
                    </div>
                  </div>
                    {/*/.categories-list*/}
                </aside>
              </div>
                {/*/.page-side-bar*/}
              <div className="col-sm-9 page-content col-thin-left">
                <div className="category-list">
                  <div className="tab-box ">
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs add-tabs" id="ajaxTabs" role="tablist">
                      <li className="active"><a href="ajax/1.html" data-url="ajax/1.html" role="tab" data-toggle="tab">All Ads </a></li>
                    </ul>
                    <div className="tab-filter">
                      <select className="selectpicker" data-style="btn-select" data-width="auto">
                        <option>
                          Sort by
                        </option>
                        <option>
                          Price: Low to High
                        </option>
                        <option>
                          Price: High to Low
                        </option>
                      </select>
                    </div>
                  </div>
                  {/*/.tab-box*/}
                  <div className="listing-filter">
                    <div className="pull-left col-xs-6">
                      <div className="breadcrumb-list">
                        <a href="#" className="current"><span>All ads</span></a> in New York <a href="#selectRegion" id="dropdownMenu1" data-toggle="modal"><span className="caret" /></a>
                      </div>
                    </div>
                    <div className="pull-right col-xs-6 text-right listing-view-action">
                      <span className="list-view active">
                        <i className="  icon-th" />
                      </span>
                      <span className="compact-view">
                        <i className=" icon-th-list  " />
                      </span>
                      <span className="grid-view ">
                        <i className=" icon-th-large " />
                      </span>
                    </div>
                    <div style={{clear: 'both'}}>
                    </div>
                  </div>
                  {/*/.listing-filter*/}
                  {/* Mobile Filter bar*/}
                  <div className="mobile-filter-bar col-lg-12  ">
                    <ul className="list-unstyled list-inline no-margin no-padding">
                      <li className="filter-toggle">
                        <a className>
                          <i className="  icon-th-list" />
                          Filters
                        </a>
                      </li>
                      <li>
                        <div className="dropdown">
                          <a data-toggle="dropdown" className="dropdown-toggle"><i className="caret " /> Sort by </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href rel="nofollow">Relevance</a>
                            </li>
                            <li>
                              <a href rel="nofollow">Date</a>
                            </li>
                            <li>
                              <a href rel="nofollow">Company</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-overly-mask">
                  </div>
                  {/* Mobile Filter bar End*/}
                  <div className="adds-wrapper">
                    <div className="tab-content">

                      <div className="tab-pane active" id="allAds">
                        {this.state.posts.map((post)=>{
                          return <PostInSearch post = {post}/>
                        })}
                      </div>

                    </div>
                  </div>
                      {/*/.adds-wrapper*/}
                </div>
                <div className="pagination-bar text-center">
                  <ul className="pagination">
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#"> ...</a>
                    </li>
                    <li>
                      <a className="pagination-btn" href="#">
                        Next »
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*/.page-content*/}
            </div>
          </div>
        </div>
        {/* /.main-container */}
        {/* /.wrapper */}
          {/* Modal Change City */}
        <div className="modal fade" id="selectRegion" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">×</span>
                  <span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title" id="exampleModalLabel"><i className=" icon-map" /> Select your region</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-12">
                    <p>
                      Popular cities in <strong>New York</strong>
                    </p>
                    <div style={{clear: 'both'}}>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <select className="form-control selecter  " id="region-state" name="region-state">
                        <option value>All States/Provinces</option>
                        <option value="Arizona">Arizona</option>
                      </select>
                    </div>
                    <div style={{clear: 'both'}}>
                    </div>
                    <hr className="hr-thin" />
                  </div>
                  <div className="col-md-4">
                    <ul className="list-link list-unstyled">
                      <li>
                        <a href="#" title="East Meadow">
                          East Meadow
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-link list-unstyled">
                      <li>
                        <a href="#" title="Garden City">
                          Garden City
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-link list-unstyled">
                      <li>
                        <a href="#" title="Oceanside">Oceanside</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
