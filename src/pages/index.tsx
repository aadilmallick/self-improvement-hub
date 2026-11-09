import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className="container">
        <span className={styles.eyebrow}>The self-improvement hub</span>
        <Heading as="h1" className={styles.heroTitle}>
          Get <span className={styles.gradient}>1% better</span>,
          <br />
          on purpose.
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--lg', styles.primaryButton)} to="/docs/intro">
            Start here
          </Link>
          <Link className={clsx('button button--lg', styles.ghostButton)} to="/blog">
            Read the essays
          </Link>
        </div>
        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dt>5</dt>
            <dd>pillars</dd>
          </div>
          <div className={styles.stat}>
            <dt>15</dt>
            <dd>living notes</dd>
          </div>
          <div className={styles.stat}>
            <dt>1</dt>
            <dd>weekly ritual</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

const loop = [
  {
    step: '01',
    title: 'Learn one idea',
    body: 'Pick a single note. Not five. Read it once, then write two sentences about how it applies to your week.',
    to: '/docs/foundations/identity',
    link: 'Foundations',
  },
  {
    step: '02',
    title: 'Run one experiment',
    body: 'Turn the idea into a two-week experiment with a metric you can actually check. Small enough that skipping it is embarrassing.',
    to: '/docs/systems/goals-and-quarters',
    link: 'Systems',
  },
  {
    step: '03',
    title: 'Review every Sunday',
    body: 'Thirty minutes: what moved, what stalled, what to cut. The review is the product. Everything else is input.',
    to: '/docs/systems/weekly-review',
    link: 'The weekly review',
  },
];

function WeeklyLoop() {
  return (
    <section className={styles.loop}>
      <div className="container">
        <div className={styles.loopHead}>
          <span className={styles.kicker}>How this works</span>
          <Heading as="h2" className={styles.loopTitle}>
            The loop beats the plan
          </Heading>
          <p className={styles.loopSub}>
            Self-improvement fails when it arrives as a heroic overhaul. It works
            when it arrives as a boring loop you repeat.
          </p>
        </div>
        <div className={styles.loopGrid}>
          {loop.map((item) => (
            <Link className={styles.loopCard} key={item.step} to={item.to}>
              <span className={styles.loopStep}>{item.step}</span>
              <Heading as="h3" className={styles.loopCardTitle}>
                {item.title}
              </Heading>
              <p className={styles.loopCardBody}>{item.body}</p>
              <span className={styles.loopLink}>{item.link} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Momentum — a self-improvement hub"
      description="Notes, systems and experiments on habits, focus, energy and learning. A personal hub for getting a little better every week.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <WeeklyLoop />
      </main>
    </Layout>
  );
}
