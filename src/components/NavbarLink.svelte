<script lang="ts">
	import type { Route } from '$lib'
	export let props: Route
</script>

<a href={props.path}>{props.name}</a>