<script lang="ts">
  import Icon from '@iconify/svelte'
</script>

<header class="relative h-screen grid place-items-center">
  <section class="max-w-6xl flex flex-col-reverse md:flex-row gap-12 px-12">
    <div class="flex flex-col gap-6 py-12">
      <h1 class="text-[min(10vw,4.5rem)] font-bold text-white">Vezsenyi Roland</h1>
      <span class="text-[min(4vw,1.25rem)] text-zinc-500">Üdv! Vezsenyi Roland vagyok, egy elhivatott <b>full-stack</b> fejlesztő, aki nagyon kedveli a kihívásokat.</span>
      <a class="w-max" href="https://github.com/VezRoland">
        <svg class="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
      </a>
    </div>
    <img class="w-[min(25rem,50vw)] h-[min(25rem,50vw)] aspect-square m-auto rounded-lg shadow-xl bg-zinc-700" src="https://picsum.photos/600" alt="Portrait" />
  </section>

  <div class="-z-10 absolute top-0 left-0 w-full h-screen opacity-25 bg-[radial-gradient(circle,rgba(67,56,202,1)0%,rgba(10,9,18,1)100%)]"></div>
  <div class="-z-20 absolute top-0 left-0 w-full h-screen grid place-items-center overflow-clip">
    <svg class="absolute w-full h-full opacity-20">

    <pattern id="pattern-circles" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
      <circle id="pattern-circle" cx="10" cy="10" r="3" fill="#09090b"></circle>
    </pattern>
  
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </div>

  <a class="absolute right-12 bottom-12 p-3 rounded-full bg-indigo-900 animate-bounce" href="#explore">
    <Icon class="text-3xl text-white" icon="material-symbols:keyboard-double-arrow-down-rounded" />
  </a>
</header>

<main class="h-screen grid place-items-center" id="explore">
  <Icon class="text-9xl text-white" icon="arcticons:shrug" />
</main>