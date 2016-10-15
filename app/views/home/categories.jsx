const React = require("react")
class Category extends React.Component {
  constructor(props){
  	super(props)
  	this.state = {
  		name: "Enoch Ko"
  	}
  }
  render() {
    return (
    	<div className="row row-featured row-featured-category">
		  	<div className="col-lg-12  box-title no-border">
	        <div className="inner"><h2><span>Browse by</span>
	          Category <a href="category.html" className="sell-your-item"> View more <i className="icon-th-list"></i> </a></h2>
	        </div>
	      </div>

	      <div className="col-md-3 col-md-4 col-sm-4 col-xs-6 ">
          <a href="category.html"><img src="/assets/img/category/textbookcarry.jpg" className="img-responsive" alt="img"/>
            <h6> Cellphones</h6>
          </a>
	      </div>

	      <div className="col-md-3 col-md-4 col-sm-4 col-xs-6 ">
          <a href="category.html"><img src="/assets/img/category/textbookcarry.jpg" className="img-responsive" alt="img"/>
          	<h6>Electronics </h6>
          </a>
	      </div>

	      <div className="col-md-3 col-md-4 col-sm-4 col-xs-6 ">
          <a href="category.html">
          	<img src="/assets/img/category/textbookcarry.jpg" className="img-responsive" alt="img"/>
            <h6> Textbooks </h6>
          </a>
	      </div>

	      <div className="col-md-3 col-md-4 col-sm-4 col-xs-6 ">
	        <a href="category.html"><img src="/assets/img/category/textbookcarry.jpg" className="img-responsive" alt="img"/>
	        	<h6> Home </h6>
	        </a>
	      </div>

	     
      </div>
    )
  }
}
module.exports = Category
