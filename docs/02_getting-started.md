# Getting started

In order to get started writing tests with Testla Screenplay we need to install it with all its required peer dependencies.

## Installation via Create Testla Screenplay

The easiest way to do so is to use our install routine CLI tool `Create Testla Screenplay`. It allows you to pick modules as per your convenience, installs all dependencies, configures the project and creates a full folder structure, so that you can start writing tests right away.

Start the installation as followes based on the package manager of your choice:

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

## Manual Installation

Alternatively you can install the desired Testla Screenplay modules and their peer dependencies manually.

Please find the corresponding references in our [Modules](/modules/category/testla-screenplay-modules) section.

