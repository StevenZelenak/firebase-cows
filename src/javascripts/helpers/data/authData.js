import firebase from 'firebase/app';
import 'firebase/auth';

import pasture from '../../components/pasture/pasture';
import farmHouse from '../../components/farmhouse/farmhouse';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmhouseDiv = $('#farmhouse');
const singleFarmerDiv = $('#single-farmer');
const logOutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      logOutButton.removeClass('hide');
      farmhouseDiv.removeClass('hide');
      singleFarmerDiv.removeClass('hide');
      pasture.buildCows();
      farmHouse.buildFarmers();
    } else {
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      logOutButton.addClass('hide');
      farmhouseDiv.addClass('hide');
      singleFarmerDiv.addClass('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
