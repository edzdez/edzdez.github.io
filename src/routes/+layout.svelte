<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
</script>

<svelte:body class="bg-zinc-900 text-zinc-300" />

<Nav />
<div class="container lg:max-w-3xl md:max-w-lg w-3/4 m-auto">
	<slot />
</div>
<footer class="h-20" />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.zinc.900);
		color: theme(colors.zinc.300);
	}
</style>
