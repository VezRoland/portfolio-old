<script lang="ts">
	import { onMount } from 'svelte';
	import { getApp } from '$lib/firebase/firebase.client'
  import { getFirestore, getDocs, collection, type DocumentData } from 'firebase/firestore'
	import Icon from '@iconify/svelte'

	const db = getFirestore(getApp())
	let projects: DocumentData[] = []

	getDocs(collection(db, '/projects')).then(coll => {
		coll.forEach(c => projects = [...projects, c.data()])
	})
</script>

<main class="h-screen grid place-items-center" id="explore">
	{#if projects.length > 0}
		<div class="max-w-6xl grid grid-cols-3 p-8">
			{#each projects as { images, name, descr, hosted, github }}
				<article class="flex flex-col shadow-lg text-white">
					<img class="h-64 object-cover rounded-t-lg" src={images[0]} alt="thumbnail">
					<div class="flex flex-col gap-4 p-4 rounded-b-lg bg-zinc-800/25 backdrop-blur-xl">
						<h2 class="text-xl font-semibold">{name}</h2>
						<p>{descr}</p>
						<div class="flex gap-2">
							<a class="flex-1 p-3 rounded-md bg-indigo-900" href={hosted}><Icon class="mx-auto text-lg text-white" icon="material-symbols:visibility-rounded" /></a>
							<a class="flex-1 p-3 rounded-md bg-indigo-900" href={github}><Icon class="mx-auto text-lg text-white" icon="material-symbols:code-blocks-rounded" /></a>
						</div>
					</div>
				</article>
			{/each}
		</div>
	{/if}

	<div class="-z-10 absolute top-0 left-0 w-full h-screen opacity-25 bg-[radial-gradient(circle,rgba(67,56,202,1)0%,rgba(10,9,18,1)100%)]"></div>
  <div class="-z-20 absolute top-0 left-0 w-full h-screen grid place-items-center overflow-clip">
    <svg class="absolute w-full h-full opacity-20">

    <pattern id="pattern-circles" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
      <circle id="pattern-circle" cx="10" cy="10" r="3" fill="#09090b"></circle>
    </pattern>
  
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </div>
</main>