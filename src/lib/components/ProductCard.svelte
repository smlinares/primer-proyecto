<script>
    import Icon from "@iconify/svelte";
    import { cart } from "#lib/cartStore.ts";

    let { image, productName, maker, price, id } = $props();

    // @ts-ignore
    function handleAddToCart(e) {
        e.stopPropagation();
        cart.add({ id, productName, price, image });
        console.log(`Added product ${id} to cart`);
    }
</script>

<div id="card" class="flex flex-col h-full bg-[#0b0f19] rounded-lg overflow-hidden border border-gray-800 transition hover:border-gray-600">
    <a href={"/tienda/" + id} class="flex flex-col flex-1 group cursor-pointer">
        <div id="cardImage" class="w-full h-48 shrink-0 overflow-hidden bg-gray-900">
            <img src={image} alt={productName} class="block w-full h-full object-cover transition duration-300 group-hover:scale-105"/>
        </div>
    
        <div id="cardContent" class="p-4 text-white flex flex-col flex-1 justify-between">
            <div class="flex flex-col gap-1 justify-start">
                <span class="text-[11px] text-gray-400 uppercase tracking-wider">{maker}</span>
                <span class="text-base font-bold tracking-wide group-hover:text-emerald-400 transition-colors">{productName}</span>
                <span class="text-emerald-400 font-semibold text-sm mt-1">{price}</span>
            </div>
        </div>
    </a>

    <div class="px-4 pb-4 pt-0">
        <button 
            onclick={handleAddToCart}
            class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
        >
            <Icon icon="lucide:shopping-cart" class="w-4 h-4" />
            Agregar al carrito
        </button>
    </div>
</div>