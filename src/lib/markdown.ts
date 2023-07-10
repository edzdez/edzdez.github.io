import { readSync } from 'to-vfile';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkPrism from 'remark-prism';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParseFrontmatter from 'remark-parse-frontmatter';
import { remark } from 'remark';

const markdownProcessor = unified()
	.use(remarkParse)
	.use(remarkPrism)
	.use(remarkMath)
	.use(remarkRehype)
	.use(rehypeKatex)
	.use(rehypeStringify)
	.use(remarkFrontmatter);
export function processMarkdown(filename: string) {
	return markdownProcessor.processSync(readSync(filename).toString());
}

const metadataProcessor = remark()
	.use(remarkFrontmatter)
	.use(remarkParseFrontmatter);

export function processMetadata(filename: string) {
	return metadataProcessor.processSync(readSync(filename).toString());
}
