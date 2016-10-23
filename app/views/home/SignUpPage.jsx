import React from 'react'
import jwtDecode from 'jwt-decode'
import {browserHistory} from 'react-router'
export default class SignUpPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      hideNumber: false,
      gender: 0, //0 is male, 1 is female
      bio: "",
      password: "",
      passwordConfirmation: "",
	  readTermsConditions: 0
    }
  }

  _handleSubmit(){
	console.log("fetching..")
    return fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Accept':"application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
	      name: (this.state.firstName + " "+ this.state.lastName),
	      email: this.state.email,
	      bio: this.state.bio,
	      phone_number: this.state.phoneNumber,
	      gender: !this.state.gender ? "male" : "female",
	      hideNumber: this.state.hideNumber,
	      password: this.state.password,
	      password_confirmation: this.state.passwordConfirmation
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson)=>{
      console.log(responseJson)
      if (responseJson.webToken){
        localStorage.setItem("collegestuffsale-webtoken", responseJson.webToken)
        let claim = jwtDecode(responseJson.webToken)
        localStorage.setItem("collegestuffsale-name", claim.name)
        localStorage.setItem("collegestuffsale-email", claim.email)
        localStorage.setItem("collegestuffsale-bio", claim.bio)
        localStorage.setItem("collegestuffsale-phoneNumber", claim.phoneNumber)

      }
      browserHistory.push("/account")
    })
    .catch((error) => {
      console.error(error)
    })


  }



	render(){
		return (
	      <div>
	        <div>
		        <div id="wrapper">
		          {/* /.header */}
		          <div className="main-container">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-8 page-content">
		                  <div className="inner-box category-content">
		                    <h2 className="title-2"><i className="icon-user-add" /> Create a free account </h2>
		                    <div className="row">
		                      <div className="col-sm-12" id="sign-up-form">
		                      	<form className="form-horizontal">
        							      <link href="assets/css/help-tip.css" rel="stylesheet" />
        							        <fieldset>
        							          {/* Text input*/}
        							          <div className="form-group required">
        							            <label className="col-md-4 control-label">
        							              First Name <sup>*</sup>
        							            </label>
        							            <div className="col-md-6">
        							              <input name placeholder="First Name" className="form-control input-md" required type="text" value = {this.state.firstName} onChange = {(event) => this.setState({firstName: event.target.value.substr(0,40)})} />
        							            </div>
        							          </div>
        							          {/* Text input*/}
        							          <div className="form-group required">
        							            <label className="col-md-4 control-label">Last Name <sup>*</sup></label>
        							            <div className="col-md-6">
        							              <input name="textinput" placeholder="Last Name" className="form-control input-md" type="text"  value = {this.state.lastName} onChange = {(event)=>{this.setState({lastName: event.target.value.substr(0,40)})}}/>
        							            </div>
        							          </div>
        							          {/* Text input*/}
        							          <div className="form-group required">
        							            <label htmlFor="inputEmail3" className="col-md-4 control-label">
        							              Email <sup>*</sup>
        							            </label>
        							            <div className="col-md-6">
        							              <input type="email" className="form-control" id="inputEmail3" placeholder="Email"  value = {this.state.email} onChange = {(event)=>{this.setState({email: event.target.value.substr(0,140)})}}/>
        							            </div>
        							          </div>
        							          {/* Text input*/}
        							          <div className="form-group required">
        							            <label className="col-md-4 control-label">Phone Number </label>
        							            <div className="col-md-6">
        							              <input name="textinput" placeholder="Phone Number" className="form-control input-md" type="text"  value = {this.state.phoneNumber} onChange = {(event)=>{this.setState({phoneNumber: event.target.value.substr(0,16)})}}/>
        							              <div className="checkbox">
        							                <label>
        							                  <input type="checkbox" checked ={this.state.hideNumber} onChange = {()=>{this.setState({hideNumber: !this.state.hideNumber})}}/>
        							                  <small> Hide the phone number on the published ads.</small>
        							                </label>
        							              </div>
        							            </div>
        							            <div className="col-md-1">
        							              <div className = "help-tip"><p>Phone number is needed to let other users contact you.</p></div>
        							            </div>
        							          </div>
        							          {/* Multiple Radios */}
        							          <div className="form-group">
        							            <label className="col-md-4 control-label">Gender</label>
        							            <div className="col-md-6">
        							              <div className="radio">
        							                <label htmlFor="Gender-0">
        							                  <input name="Gender" id="Gender-0" type="radio" checked = {!this.state.gender} onChange = {()=>{this.setState({gender: !this.state.gender})}}/>
        							                  Male
        							                </label>
        							              </div>
        							              <div className="radio">
        							                <label htmlFor="Gender-1">
        							                  <input name="Gender" id="Gender-1" type="radio" checked = {this.state.gender} onChange = {()=>{this.setState({gender: !this.state.gender})}}/>
        							                  Female
        							                </label>
        							              </div>
        							            </div>
        							          </div>
        							          {/* Textarea */}
        							          <div className="form-group">
        							            <label className="col-md-4 control-label" htmlFor="textarea">About Yourself</label>
        							            <div className="col-md-6">
        							              <textarea className="form-control" id="textarea" name="textarea" placeholder="About Yourself in 500 words" value ={this.state.bio} onChange = {(event)=>{this.setState({bio: event.target.value.substr(0,500)})}}/>
        							            </div>
        							          </div>
        							          <div className="form-group required">
        							            <label htmlFor="password-input" className="col-md-4 control-label">Password <sup>*</sup></label>
        							            <div className="col-md-6">
        							              <input type="password" className="form-control" id="password-input" placeholder="Password" value ={this.state.password} onChange = {(event)=>{this.setState({password: event.target.value.substr(0,25)})}}/>
        							            </div>
        							          </div>
        							          <div className="form-group required">
        							            <label htmlFor="password-confirmation-input" className="col-md-4 control-label">Password Confirmation <sup>*</sup></label>
        							            <div className="col-md-6">
        							              <input type="password" className="form-control" id="password-confirmation-input" placeholder="Password" value ={this.state.passwordConfirmation} onChange = {(event)=>{this.setState({passwordConfirmation: event.target.value.substr(0,25)})}}/>
        							            </div>
        							          </div>
        							          <div className="form-group">
        							            <label className="col-md-4 control-label" />
        							            <div className="col-md-8">
        							              <div className="termbox mb10">
        							                <label className="checkbox-inline" htmlFor="checkboxes-1">
        							                  <input name="checkboxes" id="checkboxes-1" checked = {this.state.readTermsConditions} type="checkbox" onChange = {()=>{this.setState({readTermsConditions: !this.state.readTermsConditions})}}/>
        							                  I have read and agreed to the <a href="/terms">Terms
        							                    &amp; Conditions</a><sup> *</sup>
        							                </label>
        							              </div>
        							              <div style={{clear: 'both'}} />
        							                <a disabled={!this.state.readTermsConditions} className="btn btn-primary" onClick = {this.state.readTermsConditions ? this._handleSubmit.bind(this) : ""}>
        							                  Register
        							                </a>
        							              </div>
        							          </div>
        							        </fieldset>
        							      </form>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		                {/* /.page-content */}
		                <div className="col-md-4 reg-sidebar">
		                  <div className="reg-sidebar-inner text-center">
		                    <div className="promo-text-box"><i className=" icon-picture fa fa-4x icon-color-1" />
		                      <h3><strong>Post a Free Classified</strong></h3>
		                      <p> Post your free online classified ads with us. Lorem ipsum dolor sit amet, consectetur
		                        adipiscing elit. </p>
		                    </div>
		                    <div className="promo-text-box"><i className=" icon-pencil-circled fa fa-4x icon-color-2" />
		                      <h3><strong>Create and Manage Items</strong></h3>
		                      <p> Nam sit amet dui vel orci venenatis ullamcorper eget in lacus.
		                        Praesent tristique elit pharetra magna efficitur laoreet.</p>
		                    </div>
		                    <div className="promo-text-box"><i className="  icon-heart-2 fa fa-4x icon-color-3" />
		                      <h3><strong>Create your Favorite ads list.</strong></h3>
		                      <p> PostNullam quis orci ut ipsum mollis malesuada varius eget metus.
		                        Nulla aliquet dui sed quam iaculis, ut finibus massa tincidunt.</p>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              {/* /.row */}
		            </div>
		            {/* /.container */}
		          </div>
		          {/* /.main-container */}
		          {/*/.footer*/}
		        </div>
	        </div>
	      </div>
    	)

	}

}
