<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
  import Icon from "@iconify/svelte";

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
  <style>
        html {
            scroll-behavior: smooth;
        }
    </style>
</svelte:head>

<header>
  <div id="header-container" class="flex flex-1 justify-between items-center px-5 py-3 bg-[#160D26] text-white">
    <!-- Logo container (flex-1 balances with store-links) -->
    <div id="logo" class="flex flex-1 justify-start font-bold text-[#00FF66] text-2xl">
      <a href="/">NETIZEN</a>
    </div> 

    <!-- Nav links container (flex-1 and justify-center to guarantee true center alignment) -->
    <div id="nav-links" class="flex flex-1 items-center justify-center gap-6 font-semibold text-gray-300">
      <a href="/#Historia">Historia</a> 
      <a href="/#Funcionamiento">Funcionamiento</a> 
      <a href="/#Cultura">Cultura</a> 
      <button id="music-button">
        <Icon icon="boxicons:music" width="24" height="24" />
      </button>
    </div>

    <!-- Store links container (flex-1 to match the logo and balance the grid) -->
    <div id="store-links" class="flex flex-1 justify-end items-center gap-4 font-semibold text-gray-300">
      <a href="/tienda">Tienda</a>
      <button id="cart-button">
        <Icon icon="boxicons:shopping-bag-alt" width="24" height="24" />
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
