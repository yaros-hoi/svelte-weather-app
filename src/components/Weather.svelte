<script>
	import { onMount } from 'svelte';
	import { location, getLocation } from './../store/location.js';
	import { weather, loading, getWeather } from './../store/weather.js';

	onMount(async ()=> {
		try {
			await getLocation();
			await getWeather($location.latitude, $location.longitude);
		} catch (error) {
			throw new Error(error);
		}
	});
</script>

{#if $loading}
	<p>...loading data</p>
{:else}
	<p>The weather is {$weather.main.temp}&#8451;</p>
{/if}
