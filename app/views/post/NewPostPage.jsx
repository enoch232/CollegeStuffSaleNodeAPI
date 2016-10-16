import React from 'react'
export default class NewPostPage extends React.Component{
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
                    <h2 className="title-2 uppercase"><strong> <i className="icon-docs" /> Post  Stuff
                        To Sell</strong></h2>
                    <div className="row">
                      <div className="col-sm-12">
                        <form className="form-horizontal">
                          <fieldset>
                            {/* Select Basic */}
                            <div className="form-group">
                              <label className="col-md-3 control-label">Category</label>
                              <div className="col-md-8">
                                <select name="category-group" id="category-group" className="form-control">
                                  <option value={0} selected="selected"> Select a category...</option>
                                  <option value="Automobiles"> Automobiles
                                  </option>
                                  <option value="Entertainment">Entertainment</option>
                                  <option value="Fashion">Fashion</option>
                                  <option value="Cellphones">Cellphones</option>
                                  <option value="Home"> Home</option>
                                  <option value="Jobs"> Jobs</option>
                                  <option value="Textbooks">Textbooks</option>
                                  <option value="Electronics">Electronics</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="Adtitle">Ad title</label>
                              <div className="col-md-8">
                                <input id="Adtitle" name="Adtitle" placeholder="Ad title" className="form-control input-md" required type="text" />
                                <span className="help-block">A great title needs at least 60 characters. </span>
                              </div>
                            </div>
                            {/* Textarea */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="textarea">Describe item</label>
                              <div className="col-md-8">
                                <textarea className="form-control" id="textarea" name="textarea" placeholder="Describe what makes your item unique" defaultValue={""} />
                              </div>
                            </div>
                            {/* Prepended text*/}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="Price">Price</label>
                              <div className="col-md-4">
                                <div className="input-group"><span className="input-group-addon">$</span>
                                  <input id="Price" name="Price" className="form-control" placeholder={0} required type="text" />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" />
                                    Negotiable 
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
                                <select id="item-Condition" name="item-condition" className="form-control">
                                  <option value={1}>New </option>
                                  <option value={2}>Excellent</option>
                                  <option value={3}>Great</option>
                                  <option value={4}>Acceptable</option>
                                  <option value={5}>Bad</option>
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
                            <div className="content-subheading"><i className="icon-user fa" /> <strong>Seller
                                information</strong></div>
                            {/* Text input*/}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="textinput-name">Name</label>
                              <div className="col-md-8">
                                <input id="textinput-name" name="textinput-name" placeholder="Seller Name" className="form-control input-md" required type="text" />
                              </div>
                            </div>
                            {/* Appended checkbox */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="seller-email"> Seller
                                Email</label>
                              <div className="col-md-8">
                                <input id="seller-email" name="seller-email" className="form-control" placeholder="Email" required type="text" />
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" defaultValue />
                                    <small> Hide the phone number on this ads.</small>
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="seller-Number">Phone
                                Number</label>
                              <div className="col-md-8">
                                <input id="seller-Number" name="seller-Number" placeholder="Phone Number" className="form-control input-md" required type="text" />
                              </div>
                            </div>
                            {/* Select State, add more states */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" htmlFor="seller-Location">State</label>
                              <div className="col-sm-3">
                                <select className="form-control selecter" name="state" id="id-state">
                                  <option selected="selected" value>Choose State</option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="DC">District Of Columbia</option>
                                  <option value="FL">Florida</option>
                                  <option value="GA">Georgia</option>
                                  <option value="HI">Hawaii</option>
                                  <option value="ID">Idaho</option>
                                  <option value="IL">Illinois</option>
                                  <option value="IN">Indiana</option>
                                  <option value="IA">Iowa</option>
                                  <option value="KS">Kansas</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="LA">Louisiana</option>
                                  <option value="ME">Maine</option>
                                  <option value="MD">Maryland</option>
                                  <option value="MA">Massachusetts</option>
                                  <option value="MI">Michigan</option>
                                  <option value="MN">Minnesota</option>
                                  <option value="MS">Mississippi</option>
                                  <option value="MO">Missouri</option>
                                  <option value="MT">Montana</option>
                                  <option value="NE">Nebraska</option>
                                  <option value="NV">Nevada</option>
                                  <option value="NH">New Hampshire</option>
                                  <option value="NJ">New Jersey</option>
                                  <option value="NM">New Mexico</option>
                                  <option value="NY">New York</option>
                                  <option value="NC">North Carolina</option>
                                  <option value="ND">North Dakota</option>
                                  <option value="OH">Ohio</option>
                                  <option value="OK">Oklahoma</option>
                                  <option value="OR">Oregon</option>
                                  <option value="PA">Pennsylvania</option>
                                  <option value="RI">Rhode Island</option>
                                  <option value="SC">South Carolina</option>
                                  <option value="SD">South Dakota</option>
                                  <option value="TN">Tennessee</option>
                                  <option value="TX">Texas</option>
                                  <option value="UT">Utah</option>
                                  <option value="VT">Vermont</option>
                                  <option value="VA">Virginia</option>
                                  <option value="WA">Washington</option>
                                  <option value="WV">West Virginia</option>
                                  <option value="WI">Wisconsin</option>
                                  <option value="WY">Wyoming</option>
                                  <option value="Other-Locations">Other Locations</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="col-md-3 control-label">Terms</label>
                              <div className="col-md-8">
                                <label className="checkbox-inline" htmlFor="checkboxes-0">
                                  <input name="checkboxes" id="checkboxes-0" defaultValue="Remember above contact information." type="checkbox" />
                                  Remember above contact information. </label>
                              </div>
                            </div>
                            {/* Button  */}
                            <div className="form-group">
                              <label className="col-md-3 control-label" />
                              <div className="col-md-8"><a href="posting-success.html" id="button1id" className="btn btn-success btn-lg">Submit</a></div>
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