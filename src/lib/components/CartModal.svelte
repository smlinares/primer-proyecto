<script lang="ts">
    import Icon from "@iconify/svelte";
    import { cart } from "#lib/cartStore.ts";

    let { isOpen = false, onClose } = $props();

    let isCheckingOut = $state(false);
    let finalTotal = $state(0);
    let finalItemCount = $state(0);

    let totalItems = $derived($cart.reduce((acc, item) => acc + item.quantity, 0));

    let totalPrice = $derived($cart.reduce((acc, item) => {
        const numericPrice = parseFloat(item.price.replace('$', '')) || 0;
        return acc + (numericPrice * item.quantity);
    }, 0));

    function handleCheckout() {
        finalTotal = totalPrice;
        finalItemCount = totalItems;
        cart.clear();
        isCheckingOut = true;
    }

    function handleFinishOrder() {
        isCheckingOut = false;
        onClose();
    }

    function handleExploreStore() {
        onClose();
    }
</script>

{#if isOpen}
    <!-- Backdrop -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
        class="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
        onclick={onClose}
    ></div>

    <!-- Modal Drawer -->
    <div class="fixed right-0 top-0 h-full w-full max-w-md bg-[#0B0F19] border-l border-slate-800 text-white z-50 shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
            <div class="flex items-center gap-2.5 text-cyan-400 font-bold text-lg">
                <Icon icon="bx:shopping-bag" width="22" />
                <span>{isCheckingOut ? 'Simulación de Pago' : 'Carrito de Compras'}</span>
                {#if !isCheckingOut}
                    <span class="text-xs font-mono text-slate-400">({totalItems})</span>
                {/if}
            </div>
            <button 
                onclick={() => { isCheckingOut = false; onClose(); }}
                class="text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-slate-800"
            >
                <Icon icon="lucide:x" width="20" />
            </button>
        </div>

        {#if isCheckingOut}
            <!-- Checkout Mockup View -->
            <div class="flex-1 flex flex-col justify-between py-6 space-y-6">
                <div class="space-y-4">
                    <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                        <div class="w-12 h-12 mx-auto rounded-full bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                            <Icon icon="lucide:check" width="24" />
                        </div>
                        <h4 class="font-bold text-white text-base">¡Orden Preparada con Éxito!</h4>
                        <p class="text-xs text-slate-400 font-light">
                            Este es un entorno de prueba (mockup). Tu carrito ha sido vaciado para la simulación.
                        </p>
                    </div>

                    <div class="space-y-2">
                        <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">Resumen de la Transacción:</span>
                        <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2 text-xs font-mono">
                            <div class="flex justify-between text-slate-300">
                                <span>Artículos procesados:</span>
                                <span class="text-white font-bold">{finalItemCount} unidades</span>
                            </div>
                            <div class="flex justify-between text-slate-300">
                                <span>Método simulado:</span>
                                <span class="text-white">Pasarela Retro 1998</span>
                            </div>
                            <div class="border-t border-slate-800 pt-2 flex justify-between text-sm font-bold">
                                <span class="text-slate-200">Total Pagado:</span>
                                <span class="text-cyan-400">${finalTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space-y-2">
                    <button 
                        onclick={handleFinishOrder}
                        class="w-full py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-500/20 text-center"
                    >
                        Cerrar Simulación
                    </button>
                </div>
            </div>

        {:else if $cart.length === 0}
            <!-- Empty State -->
            <div class="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div class="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400/70 shadow-inner">
                    <Icon icon="bx:shopping-bag" width="32" />
                </div>
                <div class="space-y-1">
                    <h4 class="font-bold text-lg text-white">El carrito está vacío.</h4>
                    <p class="text-xs text-slate-400 font-light max-w-xs leading-relaxed">
                        Explora el catálogo retro y añade sets de keycaps, publicaciones o kits.
                    </p>
                </div>
                <a 
                    href="/tienda"
                    onclick={handleExploreStore}
                    class="mt-4 px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-500/20 text-center inline-block"
                >
                    Explorar Tienda
                </a>
            </div>
        {:else}
            <!-- Filled State -->
            <div class="flex-1 overflow-y-auto py-4 space-y-3">
                {#each $cart as item (item.id)}
                    <div class="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-900/60">
                        <div class="flex items-center gap-3">
                            <img src={item.image} alt={item.productName} class="w-14 h-14 object-cover rounded-lg bg-slate-950 border border-slate-800">
                            <div>
                                <h4 class="font-bold text-sm text-white line-clamp-1">{item.productName}</h4>
                                <p class="text-cyan-400 font-semibold text-xs mt-0.5">{item.price}</p>
                                <span class="text-[11px] font-mono text-slate-400">Cant: {item.quantity}</span>
                            </div>
                        </div>
                        <button 
                            onclick={() => cart.remove(item.id)}
                            class="text-slate-500 hover:text-rose-400 transition-colors cursor-pointer p-1.5 rounded-lg hover:bg-slate-800"
                        >
                            <Icon icon="lucide:trash-2" width="18" />
                        </button>
                    </div>
                {/each}
            </div>

            <!-- Footer Actions & Total -->
            <div class="pt-4 border-t border-slate-800 space-y-3">
                <div class="flex items-center justify-between px-1">
                    <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">Total a pagar:</span>
                    <span class="text-lg font-extrabold text-cyan-400">${totalPrice.toFixed(2)}</span>
                </div>

                <div class="flex gap-2">
                    <button 
                        onclick={() => cart.clear()}
                        class="w-1/3 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-mono transition-colors cursor-pointer"
                    >
                        Vaciar
                    </button>
                    <button 
                        onclick={handleCheckout}
                        class="w-2/3 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-500/20 text-center"
                    >
                        Proceder al pago
                    </button>
                </div>
            </div>
        {/if}

    </div>
{/if}