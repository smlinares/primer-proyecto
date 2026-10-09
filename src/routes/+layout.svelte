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

  <div id="header-container">

    <div id="logo">
      <a href="/">Netizen</a>
    </div>

    <div id="nav-links">
      <!--Enlaces de navegación-->
      <a href="#Historia">
      <Icon icon="mdi-light:home" width={32}/>
    </a>
      <a href="#Funcionamiento">Funcionamiento</a>
      <a href="#Cultura">Cultura</a>
    </div>
    <!--Botón Reproductor-->
    <button id="music-button">Música</button>

    <div id="store-links">

      <a href="/Tienda">Tienda</a>
      <button id="cart-button">Carrito</button>

    </div>

  </div>

</header>

{@render children()}

<footer>

  <div id="left-side">
    <p>© Netizen EST. 1998, hecho por @smlinares</p>
  </div>

  <div id="right-side">
    <a href="https://www.github.com/smlinares" target="_blank">GitHub</a>
  </div>

</footer>
