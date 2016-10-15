const React = require('react')
const fetch = require('fetch')
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

  _handleSubmit(){
    console.log("hello")
    // return fetch('http://localhost:3000/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Accept':"application/json",
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({
    //     user:{
    //         name: (this.state.firstName + " "+ this.state.lastName),
    //         email: this.state.email,
    //         bio: this.state.bio,
    //         phone_number: this.state.phoneNumber,
    //         gender: !this.state.gender ? "male" : "female",
    //         hideNumber: this.state.hideNumber,
    //         password: this.state.password,
    //         password_confirmation: this.state.passwordConfirmation
    //       }
    //   })
    // })
    // .then((response) => {
    //   return response.json()
    // })
    // .then((responseJson)=>{
    //   console.log(responseJson)
    // })
    // .catch((error) => {
    //   console.error(error)
    // })


  }
  render(){
    return (

      
    )
  }
}
module.exports = SignUpForm