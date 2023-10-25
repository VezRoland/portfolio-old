<script lang="ts">
	import { routes } from '$lib'
	import NavbarLink from './NavbarLink.svelte'
</script>

<nav class="sticky w-[6rem] h-screen p-3">
	<div class="h-full flex flex-col items-center gap-10 py-10 rounded-lg border border-zinc-700 bg-zinc-800">
		{#each $routes as props}
			<NavbarLink {props} />
		{/each}
	</div>
</nav>