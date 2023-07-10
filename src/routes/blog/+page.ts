import type { RequestEvent } from '@sveltejs/kit';

export async function load(event: RequestEvent) {
	const response = await event.fetch('/api/posts');
	const posts = await response.json();
	return {
		posts
	};
}
