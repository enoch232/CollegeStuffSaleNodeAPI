import React from 'react'
export default class PostInSearch extends React.Component{
  render(){
    return(
      <div>
        {/*/.item-list*/}
        <div className="item-list">
          <div className="cornerRibbons featuredAds">
            <a href="#"> Featured Ads</a>
          </div>
          <div className="col-sm-2 no-padding photobox">
            <div className="add-image">
              <span className="photo-count"><i className="fa fa-camera" /> 2 </span> <a href="ads-details.html"><img className="thumbnail no-margin" src="images/item/tp/Image00008.jpg" alt="img" /></a>
            </div>
          </div>
          {/*/.photobox*/}
          <div className="col-sm-7 add-desc-box">
            <div className="add-details">
              <h5 className="add-title">
                <a href="ads-details.html">
                  {this.props.post.title}
                </a>
              </h5>
              <span className="info-row"> <span className="add-type business-ads tooltipHere" data-toggle="tooltip" data-placement="right" title="Business Ads">B </span> <span className="date"><i className=" icon-clock"> </i> Today 1:21 pm </span> - <span className="category">Electronics </span>- <span className="item-location"><i className="fa fa-map-marker" /> London </span> </span>
            </div>
          </div>
          {/*/.add-desc-box*/}
          <div className="col-sm-3 text-right  price-box">
            <h2 className="item-price">{this.props.post.price}</h2>
            <a className="btn btn-danger  btn-sm make-favorite"> <i className="fa fa-certificate" /> <span>Featured Ads</span> </a> <a className="btn btn-default  btn-sm make-favorite"> <i className="fa fa-heart" /> <span>Save</span> </a>
          </div>
          {/*/.add-desc-box*/}
        </div>
      </div>
    )
  }
}
