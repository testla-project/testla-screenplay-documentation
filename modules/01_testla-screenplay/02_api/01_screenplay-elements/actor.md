# Actor

The `Actor` class represents the executing entity in the Screenplay Pattern. It holds abilities and is able to execute tasks and actions as well as asking questions.

## Methods

### named

*Introduced in: 0.1.0*

```typescript
public static named(name: string): Actor
```

- **Description:** Creates an Actor object with a given name. The Name is relevant for logging the screenplay activities.
- **Parameters:**
  - `name` - The name of the actor.
- **Returns:** `Actor` - Returns an actor object.

Usage:

```typescript
const Alice = Actor.named('Alice');
```

### can

*Introduced in: 0.1.0*

```typescript
public can(...abilities: IAbility[]): this
```

- **Description:** Adds an ability to the actor.
- **Parameters:**
  - `abilities` - A single Ability or a comma separated list of Abilities
- **Returns:** `this` - Returns the current actor.


Usage:

```typescript
Alice.can(UseMyAbility);
// or
Alice.can(UseMyAbility1, UseMyAbility2);
```

### with

```typescript
public with(key: string, value: any): this
```

- **Description:** Adds an attribute to the actor.
- **Parameters:**
  - `key` - The key for the attribute.
  - `value` - The value for the attribute.
- **Returns:** `this` - Returns the current action.

Usage:

```typescript
Alice
  .with('username', 'my username')
  .with('password', 'my password');
```

### states

```typescript
public states(key: string): any
```

- **Description:** Returns the value for an attribute the actor has or undefined if a non existing attribute requested.
- **Parameters:**
  - `key` - The key for the attribute.
- **Returns:** `any` - The value of the attribute.

Usage:

```typescript
Alice
  .with('username', 'my username')
  .with('password', 'my password');
```

### attemptsTo

*Introduced in: 0.1.0*

```typescript
public async attemptsTo(...activities: (ITask | IAction)[]): Promise<any>
```

- **Description:** Executes single Actions or Tasks or a collection of either of them.
- **Parameters:**
  - `activities` - a comma separated list of Actions or Tasks.
- **Returns:** `Promise<any>` - The value of the last Action or Task from the collection.

Usage:

```typescript
await Alice.attemptsTo(
  Do.something(),
  Execute.task(),
);
```

### asks

*Introduced in: 0.1.0*

```typescript
public async asks<T>(...questions: (IQuestion<T> & ILogable)[]): Promise<T>
```

- **Description:** Executes single Question or a collection of Questions.
- **Parameters:**
  - `questions` - a comma separated list of Questions.
- **Returns:** `Promise<any>` - The value of the last Question from the collection.

Usage:

```typescript
await Alice.asks(
  Question.toResolve.true(),
  AnotherQuestion.notToResolve.true(),
);
```

### withAbilityTo

*Introduced in: 0.1.0*

```typescript
public withAbilityTo(ability: IAbility, alias?: string): IAbility
```

- **Description:** This functions is used in the internal flow. It is not meant to be used in test code.
- **Parameters:**
  - `ability` - The ability object.
  - `alias` - Optional alias for the ability under which it is registered with the actor
- **Returns:** `IAbility` - The corresponding Ability looked up i nthe ability map of the actor.

Usage:

```typescript
const ability = Alice.withAbilityTo(UseMyAbility);
```
