<script lang="ts">
    import Icon from "@iconify/svelte";

    // Define props using Svelte 5 runes
    let { isOpen = false, onClose } = $props();
</script>

{#if isOpen}
    <!-- Backdrop -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
        class="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
        onclick={onClose}
    ></div>

    <!-- Modal Drawer (Slide-over from right or center popup) -->
    <div class="fixed right-0 top-0 h-full w-full max-w-md bg-[#0B0F19] border-l border-slate-800 text-white z-50 shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
            <div class="flex items-center gap-2.5 text-cyan-400 font-bold text-lg">
                <Icon icon="bx:shopping-bag" width="22" />
                <span>Carrito de Compras</span>
                <span class="text-xs font-mono text-slate-400">(0)</span>
            </div>
            <button 
                onclick={onClose}
                class="text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-slate-800"
            >
                <Icon icon="lucide:x" width="20" />
            </button>
        </div>

        <!-- Body (Empty State) -->
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
            <button 
                onclick={onClose}
                class="mt-4 px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
            >
                Explorar Tienda
            </button>
        </div>

    </div>
{/if}