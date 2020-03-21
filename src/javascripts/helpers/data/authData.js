import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const logOutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      logOutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      logOutButton.addClass('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
