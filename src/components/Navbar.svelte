<script lang="ts">
	import { routes } from '$lib'
	import NavbarLink from './NavbarLink.svelte'
  import Icon from '@iconify/svelte'

  let open = false
</script>

<nav class="z-20 sticky top-0 w-full flex justify-between items-center px-12 py-6 text-lg text-white bg-zinc-900/75 backdrop-blur-lg">
  <a class="z-10 font-bold" href="/">Roland</a>
  <button class="z-10 md:hidden" on:click={() => open = !open}>
    <Icon class="text-3xl" icon={`material-symbols:${open ? 'close-rounded' : 'menu-rounded'}`} />
  </button>
  <div class={`md:flex md:flex-row gap-12 py-20 md:py-0 ${open ? 'absolute md:static left-0 top-0 w-full md:w-max h-screen md:h-max flex flex-col bg-zinc-900 md:bg-transparent' : 'hidden'}`}>
    {#each $routes as props}
      <NavbarLink {props} />
    {/each}
  </div>
</nav>