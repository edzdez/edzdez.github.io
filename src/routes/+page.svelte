<script>
	import ContactField from '$lib/ContactField.svelte';
	import MediaLink from '$lib/MediaLink.svelte';
</script>

<svelte:head>
	<title>Ethan Zhang</title>
</svelte:head>

<div class="my-8 flex justify-between">
	<div>
		<h1 class="text-4xl font-bold">Ethan Zhang</h1>
		<div class="my-4">
			<h2 class="mb-1 text-xl font-bold">Contact Information</h2>
			<ContactField name="Email">
				<a
					class="hover:underline hover:text-blue-200"
					href="mailt&#111;&#58;e&#116;&#104;a%6Ez&#52;&#64;illinois&#46;&#37;65du"
				>
					et&#104;anz&#52;(at)illin&#111;i&#115;&#46;edu
				</a>
			</ContactField>
			<ContactField name="Discord">edzdez</ContactField>
		</div>
		<div class="my-4">
			<h2 class="mb-1 text-xl font-bold">Links</h2>
			<ul class="flex space-x-1">
				<li>
					<MediaLink url="https://github.com/edzdez">Github</MediaLink>
				</li>
				<li>
					<MediaLink url="https://www.linkedin.com/in/edzdez/">
						LinkedIn
					</MediaLink>
				</li>
			</ul>
		</div>
	</div>
	<img
		class="rounded-full hidden md:block"
		src="/panda.png"
		alt="profile icon"
	/>
	<!--	<img-->
	<!--		class="rounded-full hidden md:block lg:w-64 w-56"-->
	<!--		src="/me.jpg"-->
	<!--		alt="profile icon"-->
	<!--	/>-->
</div>
<hr class="border-zinc-600 md:max-w-full" />
<section class="my-8 flex-col space-y-4 md:text-base text-sm text-justify">
	<p>
		Hi! I'm Ethan Zhang, a second-year undergrad at the University of Illinois
		Urbana-Champaign studying mathematics and computer science. My research
		interests are primarily in in theoretical computer science and its
		applications to mathematics, with a particular emphasis on proof assistants,
		logic, and type theory. Outside of that, I enjoy fiddling around with Linux,
		functional programming, coffee, and fountain pens.
	</p>
</section>
<hr class="border-zinc-600" />
<p class="font-mono mt-8 text-zinc-500 md:text-base text-sm">
	Design based on{' '}
	<MediaLink url={'https://www.cs.cmu.edu/~kpratt/'}>
		Kevin Pratt's Website
	</MediaLink>
</p>
