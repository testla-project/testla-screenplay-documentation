import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function TerminalDemo() {
  const src = useBaseUrl('terminal-demo.html');
  return (
    <iframe
      src={src}
      style={{ width: '100%', height: 350, border: 'none', borderRadius: 8 }}
    />
  );
}

function ReportScreenshot() {
  const src = useBaseUrl('testla-report.png');
  return (
    <img
      src={src}
      alt="Testla Report"
      style={{ width: '100%', display: 'block', borderRadius: 8 }}
    />
  );
}

type FeatureItem = {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; to: string };
  visual: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    eyebrow: 'Setup in seconds',
    title: 'One command. Ready to test.',
    description: 'Get a fully configured Screenplay setup in seconds. Interactive, guided, and ready to scale.',
    cta: { label: 'Getting started', to: '/docs/getting-started' },
    visual: <TerminalDemo />,
  },
  {
    eyebrow: 'Screenplay Pattern',
    title: 'Tests that read like a story.',
    description: 'Write tests so expressive that any developer on your team instantly understands what is being tested — and why.',
    cta: { label: 'Read the docs', to: '/docs/tutorial-basics/introduction' },
    visual: (
      <div style={{ height: 350, overflow: 'hidden' }}>
        <CodeBlock language="typescript" title="login.spec.ts">
          {`test('Login to app', async ({ Bob }) => {
  // Execute the task Login.toApp() and another one
  await Bob.attemptsTo(
    Login.toApp(),
    TheSecondTask.doSomething(),
  );

  // Ask for a specific element is visible to validate the task execution was successfull
  await Bob.asks(
    Element.toBe.visible(HomeScreen.TASK_INDICATOR)
  );
});
`}
        </CodeBlock>
      </div>
    ),
  },
  {
    eyebrow: 'Analyze your results',
    title: 'Beautiful reports out of the box.',
    description: 'Get detailed HTML reports with a single config line. See exactly what passed, failed, and why.',
    cta: { label: 'Browse modules', to: '/modules/testla-screenplay-playwright/reporters#html-reporter' },
    visual: <ReportScreenshot />,
  },
];

function Feature({ eyebrow, title, description, cta, visual }: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureVisual}>{visual}</div>
      <div className={styles.featureBody}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
        <Link className={styles.cta} to={cta.to}>{cta.label} →</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
