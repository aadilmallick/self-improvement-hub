import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HTMLPage from '@site/src/components/HTMLPage';
import {htmlArtifacts} from '@site/src/html_pages';
import type {HtmlArtifact} from '@site/src/html_pages';

function slugFromPathname(pathname: string): string {
  const withoutTrailingSlash = pathname.replace(/\/+$/, '');
  const lastSegment = withoutTrailingSlash.split('/').pop() ?? '';
  return decodeURIComponent(lastSegment);
}

export default function HtmlPageRoute(): ReactNode {
  const {pathname} = useLocation();
  const slug = slugFromPathname(pathname);
  const artifact: HtmlArtifact | undefined = htmlArtifacts[slug];

  if (!artifact) {
    return (
      <Layout title="HTML pages">
        <main className="container margin-vert--lg">
          <Heading as="h1">HTML pages</Heading>
          <p>
            No HTML artifact is registered for <code>{slug || 'this URL'}</code>.
          </p>
          {Object.keys(htmlArtifacts).length > 0 && (
            <>
              <p>Available artifacts:</p>
              <ul>
                {Object.entries(htmlArtifacts).map(([key, value]) => (
                  <li key={key}>
                    <Link to={`/html/${key}`}>{value.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </main>
      </Layout>
    );
  }

  return (
    <Layout title={artifact.title} description={artifact.description} noFooter>
      <HTMLPage html={artifact.html} title={artifact.title} fullViewport />
    </Layout>
  );
}
