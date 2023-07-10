import { processMarkdown, processMetadata } from '$lib/markdown';
import type { RequestEvent } from '@sveltejs/kit';

export function GET({ params }: RequestEvent): Response {
	const { slug } = params;
	const file = `./src/posts/${slug}.md`;
	const content = processMarkdown(file);
	const metadata = processMetadata(file);
	return new Response(
		JSON.stringify({
			metadata: metadata.data.frontmatter,
			content: content.value
		})
	);
}
