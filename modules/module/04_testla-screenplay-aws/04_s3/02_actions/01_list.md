# List

The `List` class provides a convenient way to list objects from S3.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<ListObjectsV2CommandOutput>;
```

- **Description:** Lists objects from S3.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<ListObjectsV2CommandOutput>` - The response object.

### objects

*Introduced in: 1.0.0*

```typescript
public static objects(listObjectsCommandInput): List;
```

- **Description:** Create a new instance of the `List` class with the specified listObjectsCommandInput.
- **Parameters:**
  - `listObjectsCommandInput` - The ListObjectsV2CommandInput object.
- **Returns:** `List` - A new instance of the `List` class.

Usage:

```typescript
await actor.attemptsTo(
    List.objects(getObjectCommandInput),
);
```

### asText

*Introduced in: 1.0.0*

```typescript
public get asText(): List;
```

- **Description:** Turn the result into plain text array of all object keys.
- **Returns:** `List` - Returns the current action.

Usage:

```typescript
await actor.attemptsTo(
    List.objects(glistObjectsCommandInput).asText,
);
```

### asJson

*Introduced in: 1.0.0*

```typescript
public get asJson(): List;
```

- **Description:** Turn the list into a JSON object array.
- **Returns:** `List` - Returns the current action.

Usage:

```typescript
await actor.attemptsTo(
    List.objects(listObjectsCommandInput).asJson,
);
```

### withTags

*Introduced in: 1.0.0*

```typescript
public get withTags(): List;
```

- **Description:** Includes object tags in the list. (This wont have an impact on the result if asText is applied)
- **Returns:** `List` - Returns the current action.

Usage:

```typescript
await actor.attemptsTo(
    List.objects(listObjectsCommandInput).withTags,
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />