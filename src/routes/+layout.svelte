<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>

  <div>

    <div>
    <a href="/">Netizen</a>
    </div>

    <div>
    <button>SFX</button>
    <button>CLI</button>
    <button>PWR OFF</button>
    </div>

  </div>

</header>

{@render children()}
