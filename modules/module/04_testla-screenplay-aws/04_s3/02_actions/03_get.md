# Get

The `Get` class provides a convenient way to get objects from S3.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<any>;
```

- **Description:** Get an object from S3. If not specified otherwise returns the raw GetObjectCommandOutput.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<any>` - The response object.

### object

*Introduced in: 1.0.0*

```typescript
public static object(getObjectCommandInput): Get;
```

- **Description:** Create a new instance of the `Get` class with the specified getObjectCommandInput.
- **Parameters:**
  - `getObjectCommandInput` - The GetObjectCommandInput object.
- **Returns:** `Get` - A new instance of the `Get` class.

Usage:

```typescript
await actor.attemptsTo(
    Get.object(getObjectCommandInput),
);
```

### objectTags

*Introduced in: 1.0.0*

```typescript
public static objectTags(getObjectTaggingCommandInput): Get;
```

- **Description:** Create a new instance of the `Get` class with the specified getObjectTaggingCommandInput.
- **Parameters:**
  - `getObjectTaggingCommandInput` - The GetObjectTaggingCommandInput object.
- **Returns:** `Get` - A new instance of the `Get` class.

Usage:

```typescript
await actor.attemptsTo(
    Get.objectTags(getObjectTaggingCommandInput),
);
```

### asText

*Introduced in: 1.0.0*

```typescript
public get asText(): Get;
```

- **Description:** Turn the result into plain text.
- **Returns:** `Get` - Returns the current action.

Usage:

```typescript
await actor.attemptsTo(
    Get.object(getObjectCommandInput).asText,
);
```

### asJson

*Introduced in: 1.0.0*

```typescript
public get asJson(): Get;
```

- **Description:** Turn the result into a JSON object (by trying to parse the content).
- **Returns:** `Get` - Returns the current action.

Usage:

```typescript
await actor.attemptsTo(
    Get.object(getObjectCommandInput).asJson,
);
```

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />