<script lang="ts">
	import { type Route, currentRoute } from '$lib'
	export let props: Route
</script>

<div class="relative" class:active-link={props.path === $currentRoute?.path}>
	<a class={`relative p-6 md:p-0 text-center text-white hover:border-b-2`} href={props.path}>{props.name}</a>
</div>