import axios from 'axios';

const API_KEY = 'ff1141e0aa9793e044284531e2da7550';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'fetch_weather';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const req = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: req
  };
}
