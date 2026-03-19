# Task

The `Task` class is the container for a list of other Tasks and/or Actions. It is used to build sequences which are used at multiple places in the test code.

An example for it is a Login Task which is a sequence of fill Actions for form fields and pressing a button to trigger the login.

## Methods

### performAs

```typescript
abstract performAs(actor: Actor): Promise<any>;
```

- **Description:** Abstract method to override with custom implementation. This method holds the actual action execution code.
- **Parameters:**
  - `actor` - The actor performing this action.
- **Returns:** `Promise<any>` - Returns a promise based on the execution details.

### orSkipOnFail

*Introduced in: 0.5.0*

```typescript
public get orSkipOnFail(): this;
```

- **Description:** Allows to skip a task on fail.
- **Returns:** `this` - Returns the current task.


Usage:

```typescript
// Would skip the step on error without breaking the execution
await actor.attemptsTo(
    Execute.task().orSkipOnFail,
);
```

### getCanSkipOnFail

*Introduced in: 0.5.0*

```typescript
public getCanSkipOnFail(): boolean;
```

- **Description:** This functions is used in the internal flow. It is not meant to be used in test code.
- **Returns:** `boolean` - Returns the orSkipOnFail state

## Methods inherited from UsingAlias

### withAbilityAlias

*Introduced in: 0.3.0*

```typescript
public withAbilityAlias(alias: string): this;
```

- **Description:** Defines the ability alias to be used during execution.
- **Parameters:**
  - `alias` - The alias.
- **Returns:** `this` - Returns the current action.

Usage:

```typescript
await actor.attemptsTo(
    Execute.task().withAbilityAlias('myAlias'),
);
```

import LoggingMethods from './_methods-inherited-from-using-logging.mdx'

<LoggingMethods />