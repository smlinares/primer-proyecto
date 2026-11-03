<script lang="ts">
    import { products } from '#lib/products.ts';
    import ProductCard from '../../lib/components/ProductCard.svelte';
</script>

<div class="w-full min-h-[calc(100vh-130px)] bg-[#070A12] px-4 sm:px-8 py-10 text-white font-sans">
    <div class="max-w-7xl mx-auto space-y-8">
        
        <!-- Store Header -->
        <div class="flex flex-col gap-2 border-b border-slate-800 pb-6">
            <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Catálogo de Tienda</h1>
            <p class="text-xs sm:text-sm text-slate-400 font-light">
                Explora piezas de hardware retro, keycaps y coleccionables de la era dorada de la web.
            </p>
        </div>

        <!-- Products Grid (Locks proportions securely across zoom changes) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {#each products as product (product.id)}
                <ProductCard 
                    id={product.id}
                    image={product.image}
                    productName={product.productName}
                    maker={product.maker}
                    price={product.price}
                />
            {/each}
        </div>

    </div>
</div>