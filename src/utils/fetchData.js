import axios from 'axios';

const getLocaltionData = async (address) => {
  const ACCESS_TOKEN = 'pk.eyJ1IjoibWFiYWRzYSIsImEiOiJjangxb3dobzQwYzNuNDhscHRvMmlremEyIn0._AXLzA5T0av5qhqN57bRxA';
  try {
    const res = axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${ACCESS_TOKEN}`);
    return res;
  } catch (error) {
    return 'Something wrong!';
  }
};

const getWeatherData = async ({ lat, long }) => {
  const API_KEY = '8c1d2449603db176448f6f08ad4d05dc';
  try {
    const res = axios.get(`https://api.darksky.net/forecast/${API_KEY}/${lat},${long}?units=si&lang=ar`);
    return res;
  } catch (error) {
    return 'Something wrong!';
  }
};

export { getLocaltionData, getWeatherData };
