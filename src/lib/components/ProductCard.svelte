<script>
    import Icon from "@iconify/svelte";

    // Receive the individual props passed from the parent component
    let { image, productName, maker, price, description, id, onAddToCart } = $props();

    // @ts-ignore
    function handleAddToCart(e) {
        // Prevent event bubbling if needed
        e.stopPropagation();
        
        // Call your cart store or custom event handler here
        console.log(`Added product ${id} to cart`);
        
        if (onAddToCart) {
            onAddToCart(id);
        }
    }
</script>

<div id="card" class="flex flex-col h-full bg-[#0b0f19] rounded-lg overflow-hidden border border-gray-800 transition hover:border-gray-600">
    <!-- Clickable Product Link (Image & Details) -->
    <a href={"/tienda/" + id} class="flex flex-col flex-1 group cursor-pointer">
        <!-- Image Container -->
        <div id="cardImage" class="w-full h-60 flex-shrink-0 overflow-hidden bg-gray-900">
            <img src={image} alt={productName} class="block w-full h-full object-cover transition duration-300 group-hover:scale-105"/>
        </div>
    
        <!-- Content Container -->
        <div id="cardContent" class="p-6 text-white flex flex-col flex-1 justify-between">
            <div class="flex flex-col gap-1 justify-start">
                <!-- Product Name -->
                <span class="text-lg font-bold tracking-wide group-hover:text-emerald-400 transition-colors">{productName}</span>
                
                <!-- Maker -->
                <span class="text-xs text-gray-400 uppercase tracking-wider">{maker}</span>
                
                <!-- Price -->
                <span class="text-emerald-400 font-semibold text-base mt-1">{price}</span>
                
                <!-- Full Description -->
                <p class="text-sm text-gray-300 mt-3">{description}</p>
            </div>
        </div>
    </a>

    <!-- Add to Cart Action Area -->
    <div class="px-6 pb-6 pt-0">
        <button 
            onclick={handleAddToCart}
            class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
        >
            <Icon icon="lucide:shopping-cart" class="w-5 h-5" />
            Agregar al carrito
        </button>
    </div>
</div>