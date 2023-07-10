import type { RequestEvent } from '@sveltejs/kit';

export async function load(event: RequestEvent) {
	const { slug } = event.params;
	const response = await event.fetch(`/api/posts/${slug}`);
	return await response.json();
}
