# Input

The `Input` class provides a way to verify if an input is empty. It allows for positive and negative checks. This class extends the `Question<boolean>` class. Input does not rely on any specific Ability.

import QuestionExtendCore from '../../../_question-extend-core.mdx';

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

### is

*Introduced in: 1.0.0*

```typescript
static get is(): Input;
```

- **Description:** Create a new instance of the `Input` class for positive verification.
- **Returns:** `Input` - A new instance of the `Input` class.

Usage:

```typescript
await actor.asks(
    Input.is.empty(''),
);
```

### isNot

*Introduced in: 1.0.0*

```typescript
static get isNot(): Input;
```

- **Description:** Create a new instance of the `Input` class for negative verification.
- **Returns:** `Input` - A new instance of the `Input` class.

Usage:

```typescript
await actor.asks(
    Input.isNot.empty('some text'),
);
```

### empty

*Introduced in: 1.0.0*

```typescript
public empty(input: unknown): Entity;
```

- **Description:** Set up the verification for input emptiness lookup.
- **Returns:** `Input` - The updated instance of the `Input` class.

Usage:

```typescript
// To verify that the input is empty
await actor.asks(
    Input.is.empty(myArray, ''),
);
// To verify that the input is no attribute empty
await actor.asks(
    Input.isNot.empty('some text'),
);
```

import QuestionMethodsInheritedFromCore from '../../../_question-methods-inherited-from-core.mdx';

<QuestionMethodsInheritedFromCore />