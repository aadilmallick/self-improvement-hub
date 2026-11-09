import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {htmlArtifacts} from '@site/src/html_pages';

import styles from './index.module.css';

export default function HtmlIndex(): ReactNode {
  const artifacts = Object.entries(htmlArtifacts);

  return (
    <Layout
      title="HTML pages"
      description="Interactive HTML artifacts from the hub: standalone pages that can also be embedded inside a note.">
      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.kicker}>Interactive</span>
            <Heading as="h1" className={styles.title}>
              HTML pages
            </Heading>
            <p className={styles.subtitle}>
              Standalone interactive artifacts. Each one opens full screen at its
              own URL, and can be embedded inside a note with the{' '}
              <code>HTMLPage</code> component.
            </p>
          </header>

          <div className={styles.grid}>
            {artifacts.map(([slug, artifact]) => (
              <Link className={styles.card} key={slug} to={`/html/${slug}`}>
                <span className={styles.slug}>/html/{slug}</span>
                <Heading as="h2" className={styles.cardTitle}>
                  {artifact.title}
                </Heading>
                <p className={styles.cardBody}>{artifact.description}</p>
                <span className={styles.cardLink}>Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
