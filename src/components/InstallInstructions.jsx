
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function InstallInstructions({ pkg }) {
  return (
    <div>
      <h2>Installation</h2>
      <p>To install it, use the following command based on your package manager:</p>
      <Tabs>
        <TabItem value="npm" label="npm" default>
          <CodeBlock language="bash">{`npm install @testla/${pkg}`}</CodeBlock>
        </TabItem>
        <TabItem value="yarn" label="Yarn">
          <CodeBlock language="bash">{`yarn add @testla/${pkg}`}</CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  );
}
