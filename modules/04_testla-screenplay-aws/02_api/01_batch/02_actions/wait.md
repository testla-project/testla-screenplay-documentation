# Wait

The `Wait` class provides a convenient way to wait for a batch job to finish.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<boolean>;
```

- **Description:** Wait for batch job to finish.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<boolean>` - The response.

### forJobFinished

*Introduced in: 1.0.0*

```typescript
public static forJobFinished(jobId, options): Wait;
```

- **Description:** Create a new instance of the `Wait` class with the specified job id and optional options. The default timeout is 30000 (30sec).
- **Parameters:**
  - `jobId` - The job id.
  - `options` - The job status check options (optional)
- **Returns:** `Wait` - A new instance of the `Wait` class.

Usage:

```typescript
await actor.attemptsTo(
    Wait.forJobFinished('myJobId', { timeout: 30000, delayBetweenRetries: 500 }),
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />