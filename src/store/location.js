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
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${__myapp.env.OPEN_WEEATHER_MAP_ID}&units=metric`, {
    "method": "GET",
  });
  const json = await response.json();

  weather.set(json);
  loading.set(false);
}

export const location = writable({});

export const getLocation = async (latitude, longitude) => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  
  location.set(position.coords);
}
