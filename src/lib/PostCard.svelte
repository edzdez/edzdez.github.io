<script>
	import MediaLink from '$lib/MediaLink.svelte';

	export let data;
</script>

<div class="my-4 p-4 rounded-lg bg-zinc-800">
	<h2 class="flex justify-between font-bold text-xl">
		<MediaLink url={`/blog/${data.filename}`}>{data.title}</MediaLink>
		<p>{data.date}</p>
	</h2>
	<p class="mt-2">{data.description}</p>
</div>
