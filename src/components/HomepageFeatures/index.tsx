import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Pillar = {
  title: string;
  to: string;
  icon: ReactNode;
  description: string;
  tag: string;
};

const Icon = ({children}: {children: ReactNode}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    {children}
  </svg>
);

const Pillars: Pillar[] = [
  {
    title: 'Foundations',
    to: '/docs/foundations/identity',
    tag: 'identity · habits · focus',
    description:
      'The operating principles under everything else: who you are becoming, how habits actually form, and how attention gets hijacked.',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </Icon>
    ),
  },
  {
    title: 'Systems & rituals',
    to: '/docs/systems/weekly-review',
    tag: 'reviews · deep work · goals',
    description:
      'The scaffolding that makes good days the default: a weekly review, a deep-work block, and an environment that does the nagging for you.',
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <path d="M17.5 14v7M14 17.5h7" />
      </Icon>
    ),
  },
  {
    title: 'Body & energy',
    to: '/docs/health/sleep',
    tag: 'sleep · training · fuel',
    description:
      'You cannot out-discipline a wrecked nervous system. Sleep, movement and light are the cheapest performance upgrades available.',
    icon: (
      <Icon>
        <path d="M13 2 4.5 13.5H11l-1 8.5 9-12h-6.5z" />
      </Icon>
    ),
  },
  {
    title: 'Learning & thinking',
    to: '/docs/learning/learning-how-to-learn',
    tag: 'memory · reading · notes',
    description:
      'How to make what you read stick: retrieval over re-reading, projects over courses, and a note system that earns its keep.',
    icon: (
      <Icon>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
        <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5z" />
      </Icon>
    ),
  },
  {
    title: 'Toolkit',
    to: '/docs/toolkit/templates',
    tag: 'templates · checklists',
    description:
      'Copy-paste pages: the weekly review, the experiment card, the reset protocol. No blank-page tax, no reinventing the ritual.',
    icon: (
      <Icon>
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="9" cy="7" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="8" cy="17" r="2.2" fill="currentColor" stroke="none" />
      </Icon>
    ),
  },
  {
    title: 'The essays',
    to: '/blog',
    tag: 'notes in progress',
    description:
      'Where the half-formed thinking lives: field reports, failed experiments, book notes and the occasional argument with myself.',
    icon: (
      <Icon>
        <path d="M5 4h9l5 5v11H5z" />
        <path d="M14 4v5h5M8.5 13h7M8.5 16.5h4.5" />
      </Icon>
    ),
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.kicker}>Five pillars, one loop</span>
          <Heading as="h2" className={styles.heading}>
            Everything lives somewhere useful
          </Heading>
          <p className={styles.sub}>
            Notes are grouped by the part of life they change, not by when I
            wrote them.
          </p>
        </div>
        <div className={styles.grid}>
          {Pillars.map((pillar) => (
            <Link className={styles.card} key={pillar.title} to={pillar.to}>
              <span className={styles.iconBadge}>{pillar.icon}</span>
              <Heading as="h3" className={styles.cardTitle}>
                {pillar.title}
              </Heading>
              <span className={styles.tag}>{pillar.tag}</span>
              <p className={styles.cardBody}>{pillar.description}</p>
              <span className={styles.more}>Open notes →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
