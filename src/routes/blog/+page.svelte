<script>
	import BlogCard from '$lib/PostCard.svelte';

	export let data;
</script>

<h1 class="mt-8 mb-4 text-3xl font-bold">Blog</h1>

{#each data.posts as post}
	<BlogCard data={post} />
{/each}
