import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmer = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmers.json`)
    .then((response) => {
      const demFarmers = response.data;
      const farmers = [];
      Object.keys(demFarmers).forEach((farmerId) => {
        demFarmers[farmerId].id = farmerId;
        farmers.push(demFarmers[farmerId]);
      });
      resolve(farmers);
    })
    .catch((err) => reject(err));
});


export default {
  getFarmer,
};