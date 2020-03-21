import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import myNavBar from './components/myNavbar/myNavBar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavBar.logoutEvent();
};

init();
