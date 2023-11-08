<script lang="ts">
	import { type Route, currentRoute } from '$lib'
	export let props: Route
</script>

<a class={`${props.path === $currentRoute?.path ? 'text-sky-300' : 'text-white'}`} href={props.path}>{props.name}</a>