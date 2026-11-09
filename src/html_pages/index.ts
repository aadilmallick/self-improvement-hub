import dopamineWalkthrough from './dopamine_walkthrough.html';
import puerAeturnus from './puer-aeturnus.html';

export type HtmlArtifact = {
  /** Page title, used for <title> and the iframe's accessible name. */
  title: string;
  description: string;
  /** The full HTML document, imported as a string. */
  html: string;
};

/**
 * Every HTML artifact in this folder becomes a page at /html/<slug>.
 * The slug is the file name with underscores replaced by hyphens.
 */
export const htmlArtifacts: Record<string, HtmlArtifact> = {
  'dopamine-walkthrough': {
    title: 'Dopamine 101 — interactive masterclass',
    description:
      'Understanding motivation, habits and focus, in seven interactive slides.',
    html: dopamineWalkthrough,
  },
  'puer-aeturnus': {
    title: 'Puer Aeturnus — grow tf up',
    description:
      'Understand how to grow up',
    html: puerAeturnus,
  }
};

export const htmlArtifactSlugs = Object.keys(htmlArtifacts);
