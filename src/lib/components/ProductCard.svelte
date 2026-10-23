<script>
    import Icon from "@iconify/svelte";

    // Receive the individual props passed from the parent component
    let { image, productName, maker, price, description, id } = $props();
</script>

<a href={"/tienda/" + id}>
    <div id="card" class="flex flex-col">
        <div id="cardImage" class="w-full h-60 overflow-hidden">
            <img src={image} alt="" class="block w-full h-full object-cover"/>
        </div>
    
        <div id="cardContent" class="text-white mt-4">
            <div class="flex flex-col gap-2">
                <span>{productName}</span>
                <span>{maker}</span>
                <span>{price}</span>
                <span>{description}</span>
            </div>
        </div>
    </div>
</a>
