<script>
	import MediaLink from '$lib/MediaLink.svelte';

	export let data;
</script>

<div class="my-4 p-4 rounded-lg bg-zinc-800">
	<h2 class="font-bold text-xl">
		<MediaLink url={data.url}>{data.name}</MediaLink>
	</h2>
	{#if data.image}
		<img class="mt-2" src={data.image} alt={`image of ${data.name}`} />
	{/if}
</div>
