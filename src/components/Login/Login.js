import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import google from '../../icon/google.png';
import Header from '../Header/Header';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const {displayName, email} = result.user;
            const newUserInfo = {name: displayName, email};
            setLoggedInUser(newUserInfo);
            history.replace(from);
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    
    return (
        <div>
            <Header></Header>
            <div className="login-container">
                <h3>Login</h3>
                <button className="google-login" onClick={handleGoogleSignIn}><img src={google} alt=""/>Continue with google</button>
            </div>
        </div>
    );
};

export default Login;