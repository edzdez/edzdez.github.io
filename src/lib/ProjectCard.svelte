<script>
	import MediaLink from '$lib/MediaLink.svelte';

	export let project;
</script>

<div class="my-4 p-4 rounded-lg bg-zinc-800">
	<h2 class="font-bold text-xl mb-2">
		<MediaLink url={project.url}>{project.name}</MediaLink>
	</h2>
	<div>{project.description}</div>
</div>
