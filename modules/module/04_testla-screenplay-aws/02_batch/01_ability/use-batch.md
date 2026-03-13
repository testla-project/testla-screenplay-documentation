# UseBatch

The `UseBatch` class is part of a testing library built on top of AWS Batch, implementing the Screenplay pattern. 

import AbilityExtendCore from '../../../../_ability-extend-core.mdx';

<AbilityExtendCore />

## Methods

### getClient

*Introduced in: 1.0.0*

```typescript
public getClient(): BatchClient
```

- **Description:** Get the batch client associated with this instance.
- **Returns:** `BatchClient` - The AWS batch client.

Usage:

```typescript
// inside an actions performAs method
const batchClient = UseBatch.as(actor, this.abilityAlias).getClient();
// now you can use the client
```

### using

```typescript
public static using(settings: AwsSettings): UseBatch
```

- **Description:** Initialize the `UseBatch` ability by passing an `AwsSettings` object.
- **Parameters:**
  - `settings` - The AWS Settings.
- **Returns:** `UseBatch` - The initialized `UseBatch` object.

Usage:

```typescript
actor.can(UseBatch.using(settings))
```

### as

```typescript
public static as(actor: Actor, alias?: string): UseBatch
```

- **Description:** Use this ability as an actor.
- **Parameters:**
  - `actor` - The actor object.
  - `alias` - (Optional) The alias for the ability
- **Returns:** `UseBatch` - The ability to use batch as the actor, optionally with an alias name.
