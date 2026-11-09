import type {ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export type HTMLPageProps = {
  /** Raw HTML document contents, usually imported as a string. */
  html: string;
  /** Accessible title for the iframe. */
  title: string;
  /**
   * `true` for a standalone page that should fill the viewport below the navbar.
   * `false` (default) for an embed inside a doc or page: centred, 80% wide and
   * capped in height.
   */
  fullViewport?: boolean;
  /** Extra class for the outer wrapper. */
  className?: string;
};

export default function HTMLPage({
  html,
  title,
  fullViewport = false,
  className,
}: HTMLPageProps): ReactNode {
  return (
    <div
      data-html-page={fullViewport ? 'full' : 'embed'}
      className={clsx(
        styles.wrapper,
        fullViewport ? styles.fullViewport : styles.embedded,
        className,
      )}>
      <iframe
        className={styles.frame}
        srcDoc={html}
        title={title}
        loading={fullViewport ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
