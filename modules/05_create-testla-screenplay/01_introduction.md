# Introduction

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A CLI tool offering a setup routine for Testla Screenplay allowing you to pick the needed packages during the install process. It creates a full project folder structure with sample Screenplay elements like Actions and Questions so that you can start writing test code right away without going through a complicated manual setup phase.

Start the installation as followes based on the package manager of your choice:

import CodeBlock from '@theme/CodeBlock';

<Tabs>
	<TabItem value="npm" label="npm" default>
		<CodeBlock language="bash">npm init @testla/screenplay</CodeBlock>
	</TabItem>
	<TabItem value="npx" label="npx">
		<CodeBlock language="bash">npx @testla/create-screenplay</CodeBlock>
	</TabItem>
	<TabItem value="yarn" label="Yarn">
		<CodeBlock language="bash">yarn create @testla/screenplay</CodeBlock>
	</TabItem>
	<TabItem value="pnpm" label="pnpm">
		<CodeBlock language="bash">pnpm create @testla/screenplay</CodeBlock>
	</TabItem>
</Tabs>

import ModuleLinks from '@site/src/components/ModuleLinks';

<ModuleLinks 
	github="create-testla-screenplay"
	npm="create-screenplay"
/>