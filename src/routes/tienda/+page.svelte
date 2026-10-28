<script>
    import { products } from "#lib/products.ts";
    import ProductCard from "../../lib/components/ProductCard.svelte";
</script>

<div id="tienda-section" class="bg-[#070A12] p-8">
    <div id="tienda-content" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {#each products as product (product.id)}
            <ProductCard 
                image={product.image}
                productName={product.productName}
                maker={product.maker}
                price={product.price}
                description={product.description}
                id={product.id}
            />
        {/each}
    </div>
</div>