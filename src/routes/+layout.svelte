<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
  import Icon from "@iconify/svelte";

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>

  <div id="header-container" class="flex justify-between items-center px-5 py-3 bg-[#160D26] text-white">

    <div id="logo" class="flex justify-start flex-1 font-bold text-[#00FF66]">
      <a href="/">NETIZEN</a>
    </div>

    <div id="nav-links" class="flex items-center justify-center gap-6 flex-1 font-semibold text-gray-300">
      <!--Enlaces de navegación-->
      <a href="#Historia">Historia</a>
      <a href="#Funcionamiento">Funcionamiento</a>
      <a href="#Cultura">Cultura</a>

      <!--Botón Reproductor-->
      <button id="music-button">
        <Icon icon="mdi-light:music" width={32}/>
      </button>
    </div>

    <div id="store-links" class="flex justify-end items-center gap-4 flex-1 font-semibold text-gray-300">
      <a href="/Tienda">Tienda</a>

      <button id="cart-button">
        <Icon icon="mdi-light:cart" width={32}/>
      </button>
    </div>

  </div>

</header>

{@render children()}

<footer class="flex justify-between items-center p-4 bg-[#160D26] text-gray-300">
    <div id="left-side" class="flex justify-start">
      <p>© Netizen EST. 1998, hecho por @smlinares</p>
    </div>

    <div id="right-side" class="flex justify-end">
      <a href="https://www.github.com/smlinares" target="_blank">GitHub</a>
    </div>
  </footer>
