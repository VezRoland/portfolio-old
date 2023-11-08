<script lang="ts">
	import { routes } from '$lib'
	import NavbarLink from './NavbarLink.svelte'
</script>

<nav class="sticky w-full flex justify-center p-3">
	<div class="w-full flex items-center gap-10 px-10 py-5 rounded-lg border border-zinc-700 bg-zinc-800">
		{#each $routes as props}
			<NavbarLink {props} />
		{/each}
	</div>
</nav>