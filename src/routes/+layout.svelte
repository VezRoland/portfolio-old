<script>
	import '../app.css'
	import { onNavigate } from '$app/navigation'
	import { page } from '$app/stores'
	import { routes, currentRoute } from '$lib'
	import Navbar from '../components/Navbar.svelte'
	$: $currentRoute = $routes.find(route => route.path === $page.url.pathname)

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			})
		})
	})
</script>

<svelte:head>
	<title>{$currentRoute?.name}</title>
</svelte:head>

<div class="flex flex-col">
  <Navbar/>
	<slot/>
</div>