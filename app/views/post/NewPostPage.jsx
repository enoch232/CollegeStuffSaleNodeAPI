import React from 'react'
import {browserHistory} from 'react-router'
export default class NewPostPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      postTitle: "",
      postPrice: 0,
      postOBO: false,
      postCategory: "none",
      postDescription: "",
      postCondition: "great",
      postState: "az",
      postSchool: "asu",
      postTag: "",
      postTerms: false,
      user: "12345ab"
    }
  }
  _handleSubmit(){
    console.log("posting..")
    return fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      headers: {
        'Accept':"application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
	      postTitle: this.state.postTitle,
	      postPrice: this.state.postPrice,
	      postDescription: this.state.postDescription,
	      postOBO: this.state.postOBO,
	      postCategory: !this.state.postCategory,
	      postCondition: this.state.postCondition,
	      postState: this.state.postState,
	      postSchool: this.state.postSchool,
        userID: this.props.user
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson)=>{
      console.log(responseJson)
      if (responseJson.post){
        browserHistory.push("/")

      }else{
        console.log("error")
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
          {/* /.header */}
          <div className="main-container">
            <div className="container">
              <div className="row">
                <div className="col-md-9 page-content">
                  <div className="inner-box category-content">
                    <h2 className="title-2 uppercase"><strong> <i className="icon-docs" /> Post Stuff To Sell</strong></h2>
                    <div className="row">
                      <div className="col-sm-12">
                        <form className="form-horizontal">
                          <fieldset>
                            {/* Select Basic */}
                            <div className="form-group">
                              <label className="col-md-3 control-label">Category</label>
                              <div className="col-md-8">
                                <select name="category-group" id="category-group" className="form-control" value = {this.state.postCategory} onChange = {()=> this.setState({postCategory: event.target.value })}>
                                  <option value="none"> Select a category...</option>
                                  <option value="automobiles">Automobiles</option>
                                  <option value="entertainment">Entertainment</option>
                                  <option value="fashion">Fashion</option>
                                  <option value="cellphones">Cellphones</option>
                                  <option value="home">Home</option>
                                  <option value="textbooks">Textbooks</option>
                                  <option value="electronics">Electronics</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="Adtitle">Ad title</label>
                              <div className="col-md-8">
                                <input id="Adtitle" name="Adtitle" placeholder="Ad title" className="form-control input-md" required type="text" value = {this.state.postTitle} onChange = {(event)=> this.setState({postTitle: event.target.value.substr(0,100)})} />
                                <span className="help-block">A great title needs at least 60 characters. </span>
                              </div>
                            </div>
                            {/* Textarea */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="textarea">Describe item</label>
                              <div className="col-md-8">
                                <textarea className="form-control" id="textarea" name="textarea" placeholder="Describe what makes your item unique" value = {this.state.postDescription} onChange = {(event)=> this.setState({postDescription: event.target.value.substr(0,500)})}/>
                              </div>
                            </div>
                            {/* Prepended text*/}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="Price">Price</label>
                              <div className="col-md-4">
                                <div className="input-group"><span className="input-group-addon">$</span>
                                  <input id="Price" name="Price" className="form-control" required type="text" value = {this.state.postPrice} onChange = {(event)=>this.setState({postPrice: event.target.value.substr(0,8)})}/>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" value = {this.state.postOBO} onChange = {(event)=> this.setState({postOBO: event.target.value})} />
                                    Or Best Offer
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* condition */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="item-condition">
                                Condition
                              </label>
                              <div className="col-md-8">
                                <select id="item-Condition" name="item-condition" className="form-control" value = {this.state.postCondition} onChange = {(event)=>this.setState({postCondition: event.target.value})}>
                                  <option value="new">New </option>
                                  <option value="excellent">Excellent</option>
                                  <option value="great">Great</option>
                                  <option value="acceptable">Acceptable</option>
                                  <option value="bad">Bad</option>
                                </select>
                              </div>
                            </div>
                            {/* photo */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="textarea"> Picture </label>
                              <div className="col-md-8">
                                <div className="mb10">
                                  <input id="input-upload-img1" type="file" className="file" data-preview-file-type="text" />
                                </div>
                                <div className="mb10">
                                  <input id="input-upload-img2" type="file" className="file" data-preview-file-type="text" />
                                </div>
                                <div className="mb10">
                                  <input id="input-upload-img3" type="file" className="file" data-preview-file-type="text" />
                                </div>
                                {/*
                                                <div class="mb10">
                                                    <input id="input-upload-img4" type="file" class="file"
                                                           data-preview-file-type="text">
                                                </div>
                                                <div class="mb10">
                                                    <input id="input-upload-img5" type="file" class="file"
                                                           data-preview-file-type="text">
                                                </div>
                                                */}
                                <p className="help-block">Add up to 3 photos. Premium members will be able to add 3 or more photos.</p>
                              </div>
                            </div>
                            <div className="content-subheading"><i className="icon-map fa" /> <strong>Location </strong></div>
                            {/* Select State, add more states */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="seller-Location">State</label>
                              <div className="col-sm-3">
                                <select className="form-control selecter" name="state" id="id-state" value = {this.state.postState} onChange = {(event)=> this.setState({postState: event.target.value})}>
                                  <option value="az">Arizona</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="seller-Location">School</label>
                              <div className="col-sm-3">
                                <select className="form-control selecter" name="state" id="id-state" value = {this.state.postSchool} onChange = {(event)=>this.setState({postSchool: event.target.value})}>
                                  <option value = "other">Other...</option>
                                  <option value = "asu">ASU</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="col-md-3 control-label">Terms</label>
                              <div className="col-md-8">
                                <label className="checkbox-inline" htmlFor="checkboxes-0">
                                  <input name="checkboxes" id="checkboxes-0" type="checkbox" value = {this.state.postTerms} onChange = {(event)=> this.setState({postTerms: event.target.value})}/>
                                  I agree with terms and privacy. </label>
                              </div>
                            </div>
                            {/* Button  */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" />
                              <div className="col-md-8"><a id="button1id" className="btn btn-success btn-lg" disabled = {!this.state.postTerms} onClick = {this.state.postTerms ? this._handleSubmit.bind(this) : ""} >Submit</a></div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.page-content */}
                <div className="col-md-3 reg-sidebar">
                  <div className="reg-sidebar-inner text-center">
                    <div className="promo-text-box"><i className=" icon-picture fa fa-4x icon-color-1" />
                      <h3><strong>Post an item to sell</strong></h3>
                      <p> Post your item with us to sell. Search for items you want to buy. </p>
                    </div>
                    <div className="panel sidebar-panel">
                      <div className="panel-heading uppercase">
                        <small><strong>How to sell quickly?</strong></small>
                      </div>
                      <div className="panel-content">
                        <div className="panel-body text-left">
                          <ul className="list-check">
                            <li> Use a brief title and description of the item</li>
                            <li> Make sure you post in the correct category</li>
                            <li> Add nice photos to your ad</li>
                            <li> Put a reasonable price</li>
                            <li> Check the item before publish</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.reg-sidebar*/}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.main-container */}
        </div>
        {/* /.wrapper */}
        {/* Le javascript
================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* include jquery file upload plugin  */}
        {/* include carousel slider plugin  */}
        {/* include equal height plugin  */}
        {/* include jquery list shorting plugin plugin  */}
        {/* include jquery.fs plugin for custom scroller and selecter  */}
        {/* include custom script for site  */}
      </div>
    )
  }
}
