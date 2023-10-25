<script lang="ts">
	import { type Route, currentRoute } from '$lib'
	export let props: Route
</script>

<a class={`nav-link ${props.path === $currentRoute?.path ? 'text-blue-600' : ''}`} href={props.path}>{props.name}</a>