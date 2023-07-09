<script>
	export let url;
</script>

<div class="font-mono">
	<a class="text-blue-400 hover:underline hover:text-blue-200" href={url}>
		<span class="text-zinc-300">[</span><slot /><span class="text-zinc-300"
			>]</span
		>
	</a>
</div>
