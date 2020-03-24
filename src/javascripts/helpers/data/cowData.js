import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json`)
    //If we get the info from where we need it. The (.then) activates.
    //we name and assign the parameter of (.then)'s value at the same time. 
    .then((response) => {
      //we assign the info that comes back from the server into a variable
      const demCows = response.data;
      //we create a empty array
      const cows = [];
      //We grab the object keys of response(server object data)
      Object.keys(demCows).forEach((cowId) => {
        demCows[cowId].id = cowId;
        cows.push(demCows[cowId]);
      });
      resolve(cows);
    })
    .catch((err) => reject(err));
});

export default {
  getCows,
};
