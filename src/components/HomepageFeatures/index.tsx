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
      style={{ width: '100%', height: 340, border: 'none', borderRadius: 8 }}
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
    title: 'One command. Ready to test',
    description: 'Get a fully configured Testla-Screenplay setup in seconds. Interactive, guided, and ready to scale.',
    cta: { label: 'Getting started', to: '/docs/install' },
    visual: <TerminalDemo />,
  },
  {
    eyebrow: 'Screenplay Pattern',
    title: 'Tests that read like a story',
    description: 'Write tests so expressive that any developer on your team instantly understands what is being tested — and why.',
    cta: { label: 'Check the basic tutorial', to: '/docs/category/tutorial---basics-1' },
    visual: (
      <CodeBlock language="typescript" title="login.spec.ts">
        {`const Alice = Actor.named('Alice')
  .can(BrowseTheWeb.using(browser));

await Alice.attemptsTo(
  Navigate.to('https://example.com'),
  Click.on(LoginButton),
  Enter.theValue('alice@example.com')
    .into(EmailField),
  Click.on(SubmitButton),
);

await Alice.asks(
  See.if(Text.of(WelcomeMessage))
    .is('Welcome, Alice!'),
);`}
      </CodeBlock>
    ),
  },
  {
    eyebrow: 'Analyze your results',
    title: 'HTML reports out of the box',
    description: 'Get detailed HTML reports with a single config line. See exactly what passed, failed, and why.',
    cta: { label: 'Learn more', to: '/modules/module/testla-screenplay-playwright/reporters' },
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
