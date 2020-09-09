import { writable } from 'svelte/store';

const initialValue = {
  main: {
    temp: '',
  },
};

export const weather = writable(initialValue);
export const loading = writable(false);

export const getWeather = async (latitude, longitude) => {
  loading.set(true);
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${__myapp.env.OPEN_WEATHER_MAP_ID}&units=metric`, {
    "method": "GET",
  });
  const json = await response.json();

  weather.set(json);
  loading.set(false);
}
