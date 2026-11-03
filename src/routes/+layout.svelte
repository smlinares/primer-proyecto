<script lang="ts">
  import './layout.css';
  import favicon from '#lib/assets/favicon.svg';
  import type { LayoutProps } from './$types';
  import Icon from "@iconify/svelte";
  import ShoppingBag from "#lib/components/CartModal.svelte";
  import { cart } from "#lib/cartStore.ts";

  let { children }: LayoutProps = $props();

  let isCartOpen = $state(false);
  let totalItems = $derived($cart.reduce((acc, item) => acc + item.quantity, 0));
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div class="min-h-screen bg-[#070A12] text-white flex flex-col font-sans overflow-x-hidden">
  <!-- Header -->
  <header class="w-full bg-[#160D26] border-b border-slate-800 sticky top-0 z-40">
    <div class="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-3 gap-3">
      
      <!-- Logo & Mobile Quick Cart -->
      <div class="w-full sm:w-auto flex justify-between items-center">
        <div class="font-bold text-[#00FF66] text-xl sm:text-2xl tracking-wide">
          <a href="/">NETIZEN</a>
        </div> 

        <div class="flex items-center gap-3 sm:hidden font-semibold text-gray-300 text-sm">
          <a href="/tienda" class="hover:text-white">Tienda</a>
          <button 
            onclick={() => isCartOpen = true}
            class="relative flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Carrito"
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

      <!-- Navigation Links -->
      <nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-xs sm:text-sm text-gray-300">
        <a href="/#Historia" class="hover:text-cyan-400 transition-colors">Historia</a> 
        <a href="/#Funcionamiento" class="hover:text-cyan-400 transition-colors">Funcionamiento</a> 
        <a href="/#Cultura" class="hover:text-cyan-400 transition-colors">Cultura</a> 
        <a href="/musica" class="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors">
          <Icon icon="boxicons:music" width="18" height="18" />
          <span>Música</span>
        </a>
      </nav>

      <!-- Desktop Store / Cart Links -->
      <div class="hidden sm:flex items-center gap-4 font-semibold text-gray-300 text-sm">
        <a href="/tienda" class="hover:text-white transition-colors">Tienda</a>
        <button 
          onclick={() => isCartOpen = true}
          class="relative flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer p-1"
          aria-label="Carrito"
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

  <!-- Main Viewport Content -->
  <main class="flex-1 w-full">
    {@render children()}
  </main>

  <!-- Cart Modal Component -->
  <ShoppingBag isOpen={isCartOpen} onClose={() => isCartOpen = false} />

  <!-- Footer -->
  <footer class="w-full flex flex-col sm:flex-row justify-between items-center gap-3 p-4 bg-[#160D26] text-gray-300 text-xs sm:text-base border-t border-slate-800 text-center sm:text-left">
      <div>
        <p>© Netizen EST. 1998, hecho por @smlinares</p>
      </div>
      <div>
        <a href="https://www.github.com/smlinares" target="_blank" class="hover:text-cyan-400 transition-colors">GitHub</a>
      </div>
  </footer>
</div>