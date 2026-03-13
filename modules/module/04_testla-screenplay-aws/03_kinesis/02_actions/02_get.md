# Get

The `Get` class provides a convenient way to read messages from a kinesis stream.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<any>;
```

- **Description:** Gets messages from a kinesis stream.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<any>` - The response object.

### recordsFrom

*Introduced in: 1.0.0*

```typescript
public static recordsFrom(stream: string, options?: StreamOptions): Get;
```

- **Description:** Create a new instance of the `Get` class with the specified stream and options.
- **Parameters:**
  - `stream` - stream name or arn (can be controlled via options streamIdentifier).
  - `options` (optional) - The options object to provide streamIdentifier or partitionKey
- **Returns:** `Get` - A new instance of the `Get` class.

Usage:

```typescript
await actor.attemptsTo(
    Get.recordsFrom(stream, options),
);
```

### startingAt

*Introduced in: 1.0.0*

```typescript
public startingAt(startTime: Date): Get;
```

- **Description:** Sets the start from which the records are read.
- **Parameters:**
  - `startTime` - Date object
- **Returns:** `Get` - The updated instance of the `Get` class.

Usage:

```typescript
await actor.attemptsTo(
    Get.recordsFrom(stream, options).startingAt(startTime),
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />