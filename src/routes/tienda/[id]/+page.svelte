<script>
    import { products } from '#lib/products.ts';

    const { params } = $props()

    const producto = products.find(producto => producto.id.toString() == params.id)
</script>
<img src={producto?.image} alt="">
{producto?.productName}