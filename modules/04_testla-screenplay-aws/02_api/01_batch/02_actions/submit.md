# Submit

The `Submit` class provides a convenient way to submit a new batch job.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<SubmitJobCommandOutput>;
```

- **Description:** Submit a batch job.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<SubmitJobCommandOutput>` - The response object.

### job

*Introduced in: 1.0.0*

```typescript
public static job(submitJobCommandInput): Submit;
```

- **Description:** Create a new instance of the `Submit` class with the specified submit job command.
- **Parameters:**
  - `submitJobCommandInput` - The SubmitJobCommandInput object.
- **Returns:** `Submit` - A new instance of the `Submit` class.

Usage:

```typescript
await actor.attemptsTo(
    Submit.job(submitJobCommandInput),
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />