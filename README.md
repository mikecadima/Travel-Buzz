Travel_Buzz

Overview:
Travel-Buzz is a platform for people to blog about their travels and any tips or comments that users will find helpful on their own trips. It allows for notification of users created and when they post on the application. 

The Team:
Mike Cadima: https://github.com/mikecadima
Primary team role: Team Lead, in charge of Front-End markup and styling, concepting and Javascript/React Function writer, oversaw deployment and integration of Firebase/Firestore.

Contributions: Oversaw creation of Landing Page of project application. Utilized Landing page to create User profile or login. Once a user signs up for the application then they would be routed to main page. Oversaw create post page and ability to have notifications to update which user either joined the app or created a post. Oversaw database storage through Firebase/Firestore using authentication, collection of data from user and deployment. 

What I used:
Languages:
Materialize CSS
CSS
JAVASCRIPT
React
Redux
JSX

Other:
Firebase
Firestore
Google Calendar

MVP (Minimum Viable Product):
Initial design and layout
Authentication of user and routes to main page
Creation of posts
Notifications of new user and posts
Modern look of webpages
Logout functionality

Stretch Goals Future
Allow for image upload
Assign profile picture or avatar
Ability for realtime geolocation

Challenges & Solutions:
Challenge: Integrating of sign-in fuctionilty to link to user account database.
Solution: Made the Submit button route to main page and used funtion to check for user authentication.
Challenge: Verifying that website is resonsive both on desktop and handheld device.
Solution: Reading documentation, trial and error. The website is viewable across any medium: computer, tablet or smart phone.
Challenge: Creating new post with user account intergation.
Solution: Reading documentation, experimenting with code and making sure all syntaxes are up to date with the current editions of the current year.

Code Snippets:
This is the sign-up feature of my code using react.
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
//decaring state and the fields that will be utilized by Firebase
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  //fuctions to handle the changes and submission of information from user
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      //JSX for input form
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}
// function that you would use to provide the store data to your component
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
//something that you will use to provide the action creators as props to your component.
const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

Demo
