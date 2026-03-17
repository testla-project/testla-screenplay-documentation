# Delete

The `Delete` class provides a convenient way to delete objects from S3.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<any>;
```

- **Description:** Delete an object from S3.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<any>` - The response object.

### object

*Introduced in: 1.0.0*

```typescript
public static object(deleteObjectCommandInput): Delete;
```

- **Description:** Create a new instance of the `Delete` class with the specified stream and options.
- **Parameters:**
  - `deleteObjectCommandInput` - The DeleteObjectCommandInput object
- **Returns:** `Delete` - A new instance of the `Delete` class.

Usage:

```typescript
await actor.attemptsTo(
    Delete.object(deleteObjectCommandInput),
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />