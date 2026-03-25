# S3Object

The `Object` class provides a way to verify if an object exists on S3. It allows for positive and negative checks.

import QuestionExtendCore from '../../../../_question-extend-core.mdx';

<QuestionExtendCore />

## Methods

### answeredBy

```typescript
public async answeredBy(actor: Actor): Promise<boolean>;
```

- **Description:** Perform the verification based on the specified action.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<boolean>` - The verification result (true or false).

### to

*Introduced in: 1.0.0*

```typescript
static get to(): S3Object;
```

- **Description:** Create a new instance of the `S3Object` class for positive verification.
- **Returns:** `S3Object` - A new instance of the `S3Object` class.

### notTo

*Introduced in: 1.0.0*

```typescript
static get notTo(): S3Object;
```

- **Description:** Create a new instance of the `S3Object` class for negative verification.
- **Returns:** `S3Object` - A new instance of the `S3Object` class.

### exist

*Introduced in: 1.0.0*

```typescript
public exist(headObjectCommandInput: HeadObjectCommandInput): S3Object;
```

- **Description:** Set up the verification for the object to exist.
- **Parameters:**
  - `headObjectCommandInput` - The HeadObjectCommandInput definition.
- **Returns:** `S3Object` - The updated instance of the `S3Object` class.

Usage:

```typescript
// To verify that the object exists
await actor.asks(
    S3Object.to.exist(headObjectCommandInput),
);
// To verify that the object does not exist
await actor.asks(
    S3Object.notTo.exist(headObjectCommandInput),
);
```

import QuestionMethodsInheritedFromCore from '../../../../_question-methods-inherited-from-core.mdx';

<QuestionMethodsInheritedFromCore />