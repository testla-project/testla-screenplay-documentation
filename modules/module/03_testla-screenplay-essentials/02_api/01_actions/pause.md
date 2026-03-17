# Pause

The `Pause` class is an useful action for introducing delays in test scenarios, allowing for better synchronization with the system under test. This performs the action of pausing the test execution for the specified interval.

This Action does not rely on a specific Ability.

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

*Introduced in: 1.0.0*

```typescript
public static for(ms: number): Pause;
```

- **Description:** Create a new instance of the `Pause` class with a specified duration.
- **Parameters:**
  - `ms` - The interval in milliseconds for which the test execution will be paused.
- **Returns:** `Pause` - A new instance of the `Pause` class.

Usage:

```typescript
// Pause further execution for 5 seconds
await actor.attemptsTo(
    Pause.for(5000),
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />