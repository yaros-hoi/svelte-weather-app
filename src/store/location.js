import { writable } from 'svelte/store';

export const location = writable({});

export const getLocation = async (latitude, longitude) => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  
  location.set(position.coords);
}
