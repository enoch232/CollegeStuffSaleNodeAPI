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
	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
	        <a href="category.html"><img src="/assets/img/category/cars.jpg" className="img-responsive" alt="img"/>
	          <h6> Automobiles </h6>
	        </a>
	      </div>
	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html"><img src="/assets/img/category/laptops.png" className="img-responsive" alt="img"/>
          	<h6> Computers & Tablets</h6>
          </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html"><img src="/assets/img/category/cellphones.png" className="img-responsive" alt="img"/>
            <h6> Cellphones</h6>
          </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html"><img src="/assets/img/category/applewatch.png" className="img-responsive" alt="img"/>
          	<h6>Electronics </h6>
          </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html">
          	<img src="/assets/img/category/games.png" className="img-responsive" alt="img"/>
            <h6> Movies & Games </h6>
          </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html">
          	<img src="/assets/img/category/textbooks.jpg" className="img-responsive" alt="img"/>
            <h6> Textbooks </h6>
          </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
	        <a href="category.html"><img src="/assets/img/category/home .png" className="img-responsive" alt="img"/>
	        	<h6> Home </h6>
	        </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html"><img src="/assets/img/category/camera.jpg" className="img-responsive" alt="img"/>
          	<h6> Cameras </h6>
        	</a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html"><img src="/assets/img/category/makeup.jpg" className="img-responsive" alt="img"/>
            <h6> Beauty </h6>
          </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html"><img src="/assets/img/category/friends.png" className="img-responsive" alt="img"/>
              <h6> Roommates </h6>
          </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html"><img src="/assets/img/category/jobs.png" className="img-responsive" alt="img"/>
              <h6> Jobs </h6>
          </a>
	      </div>

	      <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 f-category">
          <a href="category.html"><img src="/assets/img/category/clothing.png" className="img-responsive" alt="img"/>
          	<h6> Clothing & Fashion </h6>
          </a>
	      </div>
      </div>
    )
  }
}
module.exports = Category
