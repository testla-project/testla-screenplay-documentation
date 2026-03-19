# Question

The `Question` class represents assertions in Screenplay Pattern.

## Methods

### answeredBy

```typescript
abstract answeredBy(actor: IActor): Promise<any>
```

- **Description:** Abstract method to override with custom implementation. This method holds the actual question execution code.
- **Parameters:**
  - `actor` - The actor answering the question.
- **Returns:** `Promise<boolean>` - The verification result (true or false).

### failAsFalse

*Introduced in: 0.5.0*

In some cases you may want to ask questions to find out about the status of the system under test to make decisions on how to move on with your test. In order to not fail a test but receive information about questions being answered negative you can use `failAsFalse` on a question which then returns a boolean value instead.

```typescript
public get failAsFalse(): this;
```

- **Description:** Returns false instead of failing when exception occurrs.
- **Returns:** `Question` - Returns the current question.

Usage:

```typescript
// get evaluation result based on valid check
const evaluationResult = await actor.asks(
    MyQuestion.is.asExpected().failAsFalse,
);

// proceed based on answer from above
if (wasLoggedIn === false) {
    // some code to be executed on false case
}
```

## Methods inherited from UsingAlias

### withAbilityAlias

*Introduced in: 0.3.0*

It happens that there is the need to make use of the same ability but with different settings.
The solution Testla Screenplay offers is `Ability Aliasing`. With that multiple instances of an ability can be assigned to a user at the same time.
To use an aliased ability in a question you can use the `withAbilityAlias` method to define the alias to be used during execution.

```typescript
public withAbilityAlias(alias: string): this
```

- **Description:** Defines the ability alias to be used during execution.
- **Parameters:**
  - `alias` - The alias.
- **Returns:** `this` - Returns the current question.

Usage:

```typescript
await actor.asks(
    MyQuestion.is.asExpected().withAbilityAlias('myAlias'),
);
```

### getFailAsFalse

*Introduced in: 0.5.0*

```typescript
public getIsFailAsFalse(): boolean
```

- **Description:** This functions is used in the internal flow. It is not meant to be used in test code.
- **Returns:** `boolean` - Returns the internal fail as false state.

import LoggingMethods from './_methods-inherited-from-using-logging.mdx'

<LoggingMethods />