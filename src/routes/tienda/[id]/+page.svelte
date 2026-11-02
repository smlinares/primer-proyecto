<script>
// @ts-nocheck
    import { products } from '#lib/products.ts';
    import { cart } from '#lib/cartStore.ts';
    import Icon from "@iconify/svelte";

    const { params } = $props();
    const producto = products.find(producto => producto.id.toString() == params.id);

    function handleAddToCart() {
        if (producto) {
            cart.add(producto);
            console.log(`Added product ${producto.id} to cart`);
        }
    }
</script>

<div class="min-h-screen bg-[#070A12] px-8 py-12 text-white font-sans flex items-center justify-center">
    <div class="relative max-w-4xl w-full bg-[#0b0f19] border border-gray-800 rounded-2xl p-8 shadow-2xl">
        
        <!-- Close Button in Upper Right Corner -->
        <a 
            href="/tienda" 
            class="absolute top-5 right-5 p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-colors cursor-pointer"
            aria-label="Cerrar"
        >
            <Icon icon="lucide:x" class="w-5 h-5" />
        </a>

        {#if producto}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-4 md:mt-0">
                <div class="w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
                    <img src={producto.image} alt={producto.productName} class="w-full h-full object-cover">
                </div>

                <div class="flex flex-col justify-between h-full space-y-6">
                    <div class="space-y-3">
                        <span class="text-xs text-gray-400 uppercase tracking-wider font-mono">{producto.maker}</span>
                        <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{producto.productName}</h1>
                        <div class="text-2xl text-emerald-400 font-semibold">{producto.price}</div>
                        
                        <div class="pt-2 border-t border-gray-800">
                            <h3 class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Descripción</h3>
                            <p class="text-sm sm:text-base text-gray-300 leading-relaxed font-light">{producto.description}</p>
                        </div>
                    </div>

                    <div>
                        <button 
                            onclick={handleAddToCart}
                            class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg"
                        >
                            <Icon icon="lucide:shopping-cart" class="w-5 h-5" />
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        {:else}
            <div class="text-center py-12">
                <h2 class="text-xl font-bold text-gray-300">Producto no encontrado</h2>
                <a href="/tienda" class="inline-block mt-4 text-emerald-400 hover:underline text-sm font-mono">Regresar a la tienda</a>
            </div>
        {/if}
    </div>
</div>