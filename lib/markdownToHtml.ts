import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

export default async function markdownToHtml(markdown: string) {
  const window = new JSDOM('').window;
  const purify = DOMPurify(window);
  const result = await purify.sanitize(marked(markdown));
  return result.toString();
}
