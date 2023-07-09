<script>
	import ProjectCard from '$lib/ProjectCard.svelte';

	export let data;
</script>

<h1 class="mt-8 text-3xl font-bold">Projects</h1>
<p class="my-4">Assorted projects that I am working/have worked on:</p>
<div>
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</div>
