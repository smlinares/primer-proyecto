<script>
// @ts-nocheck

    import { products } from "#lib/products.ts";
    import ProductCard from "../../lib/components/ProductCard.svelte";
    import { cart } from "#lib/cartStore.ts";
</script>

<div id="tienda-section" class="bg-[#070A12] px-4 py-6 sm:p-8">
    <div id="tienda-content" class="grid grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
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