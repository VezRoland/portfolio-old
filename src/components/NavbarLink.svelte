<script lang="ts">
	import { type Route, currentRoute } from '$lib'
	export let props: Route
</script>

<a class={`p-6 md:p-0 text-center ${props.path === $currentRoute?.path ? 'text-indigo-400' : 'text-white'}`} href={props.path}>{props.name}</a>