<script>
	import DotfileCard from '$lib/DotfileCard.svelte';

	export let data;
</script>

<h1 class="mt-8 text-3xl font-bold">Dotfiles</h1>
<p class="my-4">My dotfiles:</p>
<div>
	{#each data.dotfiles as dotfile}
		<DotfileCard data={dotfile} />
	{/each}
</div>
