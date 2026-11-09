import fs from 'node:fs';
import path from 'node:path';
import type {Plugin} from '@docusaurus/types';

const HTML_DIR = path.join(process.cwd(), 'src', 'html_pages');

/** `dopamine_walkthrough.html` → `dopamine-walkthrough` */
export function slugifyHtmlFile(file: string): string {
  return file.replace(/\.html$/i, '').replace(/_/g, '-');
}

function htmlArtifactSlugs(): string[] {
  if (!fs.existsSync(HTML_DIR)) {
    return [];
  }

  return fs
    .readdirSync(HTML_DIR)
    .filter((file) => file.toLowerCase().endsWith('.html'))
    .map(slugifyHtmlFile)
    .sort();
}

/**
 * HTML artifacts in `src/html_pages` are imported as raw strings and rendered by
 * `HTMLPage`. Docusaurus has no file-based dynamic routing, so this plugin adds
 * one concrete route per artifact (which keeps static prerendering intact) using
 * the shared `src/pages/html/[slug].tsx` page component.
 */
export default function htmlPagesPlugin(): Plugin {
  return {
    name: 'html-pages-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.html$/i,
              type: 'asset/source',
            },
          ],
        },
      };
    },
    contentLoaded({actions}) {
      for (const slug of htmlArtifactSlugs()) {
        actions.addRoute({
          path: `/html/${slug}`,
          component: '@site/src/pages/html/[slug].tsx',
          exact: true,
        });
      }
    },
  };
}
