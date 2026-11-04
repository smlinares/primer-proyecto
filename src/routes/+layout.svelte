<script lang="ts">
  import './layout.css';
  import favicon from '#lib/assets/favicon.svg';
  import type { LayoutProps } from './$types';
  import Icon from "@iconify/svelte";
  import ShoppingBag from "#lib/components/CartModal.svelte";
  import { cart } from "#lib/cartStore.ts";

  let { children }: LayoutProps = $props();

  // State to manage shopping bag modal visibility
  let isCartOpen = $state(false);

  // Calculate total items for the badge count
  let totalItems = $derived($cart.reduce((acc, item) => acc + item.quantity, 0));
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
  <div id="header-container" class="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 bg-[#160D26] px-4 py-3 text-white sm:px-5 md:flex-nowrap">
    <!-- Logo container -->
    <div id="logo" class="flex-none font-bold text-xl text-[#00FF66] sm:text-2xl md:flex-1">
      <a href="/">NETIZEN</a>
    </div> 

    <!-- Nav links container -->
    <nav id="nav-links" class="order-3 flex w-full flex-none items-center justify-around gap-2 text-xs font-semibold text-gray-300 sm:text-sm md:order-none md:w-auto md:flex-1 md:justify-center md:gap-6 md:text-base">
      <a href="/#Historia" class="inline-flex min-h-11 items-center justify-center">Historia</a>
      <a href="/#Funcionamiento" class="inline-flex min-h-11 items-center justify-center">Funcionamiento</a>
      <a href="/#Cultura" class="inline-flex min-h-11 items-center justify-center">Cultura</a>
      <!-- svelte-ignore element_implicitly_closed -->
      <a href="/musica" id="music-button" aria-label="Música" class="flex min-h-11 min-w-11 items-center justify-center text-cyan-400 transition-colors hover:text-cyan-300">
        <Icon icon="boxicons:music" width="24" height="24" />
      </a>
    </nav>

    <!-- Store links container -->
    <div id="store-links" class="flex flex-none items-center justify-end gap-3 font-semibold text-gray-300 sm:gap-4 md:flex-1">
      <a href="/tienda">Tienda</a>
      <button 
        id="cart-button" 
        onclick={() => isCartOpen = true}
        aria-label="Carrito"
        class="relative flex min-h-11 min-w-11 items-center justify-center text-gray-300 transition-colors hover:text-white"
      >
        <Icon icon="boxicons:shopping-bag-alt" width="24" height="24" />
        {#if totalItems > 0}
          <span class="absolute -top-1 -right-1 bg-cyan-400 text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {totalItems}
          </span>
        {/if}
      </button>
    </div>
  </div>
</header>

{@render children()}

<!-- Shopping Bag Modal Component -->
<ShoppingBag isOpen={isCartOpen} onClose={() => isCartOpen = false} />

<footer class="flex flex-col items-start justify-between gap-2 bg-[#160D26] p-4 text-xs text-gray-300 sm:flex-row sm:items-center sm:text-base">
    <div id="left-side" class="flex justify-start">
      <p>© Netizen EST. 1998, hecho por @smlinares</p>
    </div>

    <div id="right-side" class="flex justify-end">
      <a href="https://www.github.com/smlinares" target="_blank">GitHub</a>
    </div>
</footer>