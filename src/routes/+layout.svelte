<script>
	import '../app.css'
	import { page } from '$app/stores'
	import { routes, currentRoute } from '$lib'
	import Navbar from '../components/Navbar.svelte'
	$: $currentRoute = $routes.find(route => route.path === $page.url.pathname)
</script>

<svelte:head>
	<title>{$currentRoute?.name}</title>
</svelte:head>

<div class="flex flex-col">
	<slot/>
</div>