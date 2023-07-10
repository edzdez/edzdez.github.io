import { processMarkdown, processMetadata } from '$lib/markdown';
import fs from 'fs';

export function GET(): Response {
	const fileNames = fs
		.readdirSync('./src/posts')
		.filter((filename) => filename.endsWith('md'))
		.map((filename) => {
			const metadata = processMetadata(`./src/posts/${filename}`);
			const filename_trimmed = filename.slice(0, -3);
			return {
				filename: filename_trimmed,
				...metadata.data.frontmatter
			};
		});
	return new Response(JSON.stringify(fileNames));
}
