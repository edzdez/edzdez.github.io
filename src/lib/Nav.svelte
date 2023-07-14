<script>
	import { page } from '$app/stores';

	let path;

	function getPath(currentPath) {
		path = currentPath;
	}

	$: getPath($page.url.pathname);

	import NavbarLink from '$lib/NavLink.svelte';
</script>

<nav class="flex items-center h-20">
	<div
		class="flex md:flex-row flex-col md:justify-between gap-y-4 container lg:max-w-4xl md:max-w-lg w-3/4 m-auto relative"
	>
		<a
			class={`md:inline text-2xl font-bold md:mt-0 mt-8 md:text-left text-center hidden
			${path === '/' ? 'md:invisible' : ''}`}
			href="/"
		>
			Ethan Zhang
		</a>
		<div class="inline">
			<ul class="flex gap-x-8 md:absolute md:bottom-0 md:right-0">
				<NavbarLink to="/" curr={path}>Home</NavbarLink>
				<NavbarLink to="/blog" curr={path}>Blog</NavbarLink>
				<NavbarLink to="/projects" curr={path}>Projects</NavbarLink>
				<NavbarLink to="/dots" curr={path}>Dots</NavbarLink>
			</ul>
		</div>
	</div>
</nav>
