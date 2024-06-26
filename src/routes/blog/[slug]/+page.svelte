<script>
	import { browser } from '$app/environment';

	export let data;
</script>

<svelte:head>
	<link href="/prism.css" rel="stylesheet" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.css"
		integrity="sha384-pRsDYiLLocCzWnUN/YEr9TBTTaZOUi5x8adKfqi6Qt44lDaFkoP++x1j2ohSMtdf"
		crossorigin="anonymous"
	/>
	<title>{data.metadata.title}</title>
</svelte:head>

{#if browser}
	<script src="/prism.js"></script>
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.js"
		integrity="sha384-tMzugJpfLv7v0f+KXzNMqNCC6sVzLMM3sCnZDgzy0lcO/0h3sAkEBg/URFcV0JpE"
		crossorigin="anonymous"
	></script>
{/if}

<h1 class="text-4xl font-bold mt-8">{data.metadata.title}</h1>
<p class="text-lg mt-2">
	By: {data.metadata.author}, {data.metadata.date}
</p>
<hr class="border-zinc-800 md:max-w-full mt-6" />
<article
	class="prose md:prose-md prose-zinc dark:prose-invert m-auto lg:max-w-4xl md:max-w-lg mt-6"
>
	{@html data.content}
</article>
