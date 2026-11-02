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
            overflow-x: hidden;
        }
    </style>
</svelte:head>

<header class="w-full bg-[#160D26] text-white border-b border-slate-800">
  <div id="header-container" class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-3 gap-4">
    
    <!-- Top Row on Mobile / Left on Desktop: Logo & Mobile Menu layout -->
    <div class="w-full sm:w-auto flex justify-between items-center">
      <div id="logo" class="font-bold text-[#00FF66] text-xl sm:text-2xl">
        <a href="/">NETIZEN</a>
      </div> 

      <!-- Store links on mobile (keeps them visible next to logo on tiny screens if desired) -->
      <div class="flex items-center gap-3 sm:hidden font-semibold text-gray-300 text-sm">
        <a href="/tienda" class="hover:text-white">Tienda</a>
        <button 
          onclick={() => isCartOpen = true}
          class="relative flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer p-1"
        >
          <Icon icon="boxicons:shopping-bag-alt" width="22" height="22" />
          {#if totalItems > 0}
            <span class="absolute -top-1 -right-1 bg-cyan-400 text-slate-950 text-[9px] font-bold px-1.5 py-0.2 rounded-full">
              {totalItems}
            </span>
          {/if}
        </button>
      </div>
    </div>

    <!-- Nav links container (Scrollable horizontally on mobile if needed, or wrapped) -->
    <div id="nav-links" class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium sm:font-semibold text-xs sm:text-sm text-gray-300">
      <a href="/#Historia" class="hover:text-cyan-400 transition-colors">Historia</a> 
      <a href="/#Funcionamiento" class="hover:text-cyan-400 transition-colors">Funcionamiento</a> 
      <a href="/#Cultura" class="hover:text-cyan-400 transition-colors">Cultura</a> 
      <a href="/musica" id="music-button" class="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors">
        <Icon icon="boxicons:music" width="20" height="20" />
        <span class="inline sm:hidden">Música</span>
      </a>
    </div>

    <!-- Store links container (Hidden on mobile since we moved them up top, visible on sm+ screens) -->
    <div id="store-links" class="hidden sm:flex items-center gap-4 font-semibold text-gray-300 text-sm">
      <a href="/tienda" class="hover:text-white transition-colors">Tienda</a>
      <button 
        id="cart-button" 
        onclick={() => isCartOpen = true}
        class="relative flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer p-1"
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

<main class="w-full overflow-x-hidden">
  {@render children()}
</main>

<!-- Shopping Bag Modal Component -->
<ShoppingBag isOpen={isCartOpen} onClose={() => isCartOpen = false} />

<footer class="flex flex-col sm:flex-row justify-between items-center gap-3 p-4 bg-[#160D26] text-gray-300 text-xs sm:text-base border-t border-slate-800 text-center sm:text-left">
    <div id="left-side">
      <p>© Netizen EST. 1998, hecho por @smlinares</p>
    </div>

    <div id="right-side">
      <a href="https://www.github.com/smlinares" target="_blank" class="hover:text-cyan-400 transition-colors">GitHub</a>
    </div>
</footer>