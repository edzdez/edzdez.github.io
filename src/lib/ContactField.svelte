<script>
	export let name;
</script>

<div>
	{name}:
	<span class="font-mono text-blue-400">
		<slot />
	</span>
</div>
