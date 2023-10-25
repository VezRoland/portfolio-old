<script>
	import '../app.css'
	import { page } from '$app/stores'
	import { routes, currentRoute } from '$lib'
	import Navbar from '../components/Navbar.svelte'

	$currentRoute = $routes.find(route => route.path === $page.route.id)
</script>

<Navbar/>
<slot/>