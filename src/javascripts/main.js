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
  $('body').on('mouseenter', '.farmer-card', (e) => e.target.closest('.card').classList.add('bg-danger'));
  $('body').on('mouseleave', '.farmer-card', (e) => e.target.closest('.card').classList.remove('bg-danger'));
};

init();
