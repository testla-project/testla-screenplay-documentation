# Action

The `Action` class is the container for small atomic low level actions to be wrapped for the Screenplay Pattern. 

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

- **Description:** Allows to skip an action on fail.
- **Returns:** `this` - Returns the current action.


Usage:

```typescript
// Would skip the step on error without breaking the execution
await actor.attemptsTo(
    Do.something().orSkipOnFail,
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
    Do.something().withAbilityAlias('myAlias'),
);
```

import LoggingMethods from './_methods-inherited-from-using-logging.mdx'

<LoggingMethods />