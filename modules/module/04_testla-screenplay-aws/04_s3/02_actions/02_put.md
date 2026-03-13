# Put

The `Put` class provides a convenient way to put objects into S3.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<any>;
```

- **Description:** Put an object into S3.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<any>` - The response object.

### object

*Introduced in: 1.0.0*

```typescript
public static object(data: any, stream: string, options?: StreamOptions): Put;
```

- **Description:** Create a new instance of the `Put` class with the specified data, stream and options.
- **Parameters:**
  - `putObjectCommandInput` - The PutObjectCommandInput object
- **Returns:** `Put` - A new instance of the `Put` class.

Usage:

```typescript
await actor.attemptsTo(
    Put.object(putObjectCommandInput),
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />