<script>
	export let to;
	export let curr;
</script>

<li>
	<a
		href={to}
		class={`inline-block decoration-blue-400 decoration-2 underline-offset-4 text-center \
           before:block before:content-[attr(title)] before:font-bold before:h-0 before:overflow-hidden before:invisible \
           ${curr === to ? 'font-bold underline' : 'hover:underline'}`}
	>
		<slot />
	</a>
</li>
