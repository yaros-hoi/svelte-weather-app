<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
	import { location, getLocation } from './../store/location.js';

	onMount(async ()=> {
        mapboxgl.accessToken = MAP_TOKEN;

		try {
            await getLocation();
            const coords = [$location.longitude, $location.latitude];
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: coords,
                zoom: 16,
            });
          const marker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
		} catch (error) {
			throw new Error(error);
		}
	});
</script>

<div id="map"></div>

<style>
	#map {
		width: 100%;
		height: calc(100vh - 280px);
	}
</style>
