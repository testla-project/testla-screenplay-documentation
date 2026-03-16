# Sleep

The `Sleep` class is an useful action for introducing delays in test scenarios, allowing for better synchronization with the system under test. This performs the action of pausing the test execution for the specified interval.

This Action does not rely on a specific Ability.

:::info
This action is deprecated and will be removed in the future. Please use [`Pause`](/modules/module/testla-screenplay-essentials/actions/pause) from [`Testla Screenplay Essentials`](/modules/module/testla-screenplay-essentials/introduction) instead.
:::

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(): Promise<void>;
```

- **Description:** Pause the execution of further test steps for the specified interval in milliseconds.
- **Parameters:** None
- **Returns:** `Promise<void>` - A promise that resolves when the pause is complete.

### for

```typescript
public static for(ms: number): Sleep;
```

- **Description:** Create a new instance of the `Sleep` class with a specified duration.
- **Parameters:**
  - `ms` - The interval in milliseconds for which the test execution will be paused.
- **Returns:** `Sleep` - A new instance of the `Sleep` class.