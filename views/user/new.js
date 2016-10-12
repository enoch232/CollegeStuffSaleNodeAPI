class SignUpForm extends React.Component{
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

  _registerUser(){
    return fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Accept':"application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user:{
            name: (this.state.firstName + " "+ this.state.lastName),
            email: this.state.email,
            bio: this.state.bio,
            phone_number: this.state.phoneNumber,
            gender: !this.state.gender ? "male" : "female",
            hideNumber: this.state.hideNumber,
            password: this.state.password,
            password_confirmation: this.state.passwordConfirmation
          }
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson)=>{
      if (responseJson.access_token){
        window.location = "./account-home.html"
      }else{
        console.log(responseJson)
      }
    })
    .catch((error) => {
      console.error(error)
    })


  }
  render(){
    return (

      <form className="form-horizontal">
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
                  I have read and agree to the <a href="terms-conditions.html">Terms
                    &amp; Conditions</a> </label>
              </div>
              <div style={{clear: 'both'}} />
              <a disabled={!this.state.readTermsConditions} className="btn btn-primary" onClick = {this._registerUser.bind(this)}>Register</a></div>
          </div>
        </fieldset>
      </form>
    )
  }
}
ReactDOM.render(
  <SignUpForm />,
  document.getElementById('sign-up-form')

)
