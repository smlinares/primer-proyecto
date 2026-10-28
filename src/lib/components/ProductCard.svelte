<script>
    import Icon from "@iconify/svelte";

    // Receive the individual props passed from the parent component
    let { image, productName, maker, price, description, id } = $props();
</script>

<a href={"/tienda/" + id} class="block w-full h-full group">
    <div id="card" class="flex flex-col h-full bg-[#0b0f19] rounded-lg overflow-hidden border border-gray-800 transition hover:border-gray-600">
        <!-- Image Container -->
        <div id="cardImage" class="w-full h-60 flex-shrink-0 overflow-hidden bg-gray-900">
            <img src={image} alt={productName} class="block w-full h-full object-cover transition duration-300 group-hover:scale-105"/>
        </div>
    
        <!-- Content Container -->
        <div id="cardContent" class="p-6 text-white flex flex-col flex-1 justify-between">
            <div class="flex flex-col gap-1 justify-start">
                <!-- Product Name -->
                <span class="text-lg font-bold tracking-wide">{productName}</span>
                
                <!-- Maker -->
                <span class="text-xs text-gray-400 uppercase tracking-wider">{maker}</span>
                
                <!-- Price -->
                <span class="text-emerald-400 font-semibold text-base mt-1">{price}</span>
                
                <!-- Full Description -->
                <p class="text-sm text-gray-300 mt-3">{description}</p>
            </div>
        </div>
    </div>
</a>