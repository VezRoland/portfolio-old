<script lang="ts">
	import { routes } from '$lib'
	import NavbarLink from './NavbarLink.svelte'
</script>

{#each $routes as props}
	<NavbarLink {props} />
{/each}