import React, { Component } from 'react'
import firebase from 'firebase'
import { navigate } from '@reach/router'
import Button from '@material-ui/core/Button'
import './Home.css'

var config = {
  apiKey: "AIzaSyAY0oXsgoagJcAImQjxOMN-SwFQ8QxCjn0",
  authDomain: "refugee-connection.firebaseapp.com",
  projectId: "refugee-connection",
  databaseURL: "https://refugee-connection.firebaseio.com"
};
firebase.initializeApp(config)

const db = firebase.database()

var googleProvider = new firebase.auth.GoogleAuthProvider()

class Dashboard extends Component {

  loginHandler = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(result => {
        // db.ref(`/users/${result.user.uid}`).once('value')
        //   .then(snapshot => snapshot.val())
        //   .then(user => {
        //     if(user.applied) {
        //       navigate('/dashboard')
        //     } else {
        //       db.ref(`/users/${result.user.uid}`).set({
        //         userName: result.user.displayName,
        //         avatar: result.user.photoURL,
        //         applied: false
        //       })
        //       .then(() => navigate('/application'))
        //     }
        //   })
        db.ref(`/users/${result.user.uid}`).set({
          userName: result.user.displayName,
          avatar: result.user.photoURL,
        })
        .then(() => navigate('/dashboard'))
      })
    }
  render() {
		return(
			<div className='home-container'>
        <img width='50px' height='50px' alt='logo' src='https://image.flaticon.com/icons/png/512/66/66187.png' />
        <h1>Refugee Connection</h1>
        <div className='login-button'>
				<Button onClick={this.loginHandler}>Login</Button>
        </div>
			</div>
		)
  }
}

export default Dashboard