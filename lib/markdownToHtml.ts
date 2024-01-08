import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

// See https://marked.js.org/using_pro for using custom renderers

export default async function markdownToHtml(markdown: string) {
  const window = new JSDOM('').window;
  const purify = DOMPurify(window);
  // marked.use({ renderer: linkRenderer });
  const result = await purify.sanitize(marked(markdown));
  return result.toString();
}
