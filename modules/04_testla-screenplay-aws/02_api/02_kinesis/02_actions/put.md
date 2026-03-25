# Put

The `Put` class provides a convenient way to put messages on a kinesis stream.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<any>;
```

- **Description:** Puts message(s) on a kinesis stream.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<any>` - The response object.

### recordTo

*Introduced in: 1.0.0*

```typescript
public static recordTo(data: any, stream: string, options?: StreamOptions): Put;
```

- **Description:** Create a new instance of the `Put` class with the specified data, stream and options.
- **Parameters:**
  - `data` - the data to be sent as a message to the stream
  - `stream` - stream name or arn (can be controlled via options streamIdentifier).
  - `options` (optional) - The options object to provide streamIdentifier or partitionKey
- **Returns:** `Put` - A new instance of the `Put` class.

Usage:

```typescript
await actor.attemptsTo(
    Put.recordTo(data, stream, options),
);
```

### recordsTo

*Introduced in: 1.0.0*

```typescript
public static recordsTo(data: any[], stream: string, options?: StreamOptions): Put;
```

- **Description:** Create a new instance of the `Put` class with the specified data array, stream and options.
- **Parameters:**
  - `data` - the data array to be sent as messages to the stream
  - `stream` - stream name or arn (can be controlled via options streamIdentifier).
  - `options` (optional) - The options object to provide streamIdentifier or partitionKey
- **Returns:** `Put` - A new instance of the `Put` class.

Usage:

```typescript
await actor.attemptsTo(
    Put.recordsTo(data, stream, options),
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />