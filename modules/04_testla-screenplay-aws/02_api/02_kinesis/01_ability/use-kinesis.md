# UseKinesis

The `UseKinesis` class is part of a testing library built on top of AWS Kinesis, implementing the Screenplay pattern.

import AbilityExtendCore from '../../../../_ability-extend-core.mdx';

<AbilityExtendCore />

## Methods

### getClient

*Introduced in: 1.0.0*

```typescript
public getClient(): KinesisClient
```

- **Description:** Get the kinesis client associated with this instance.
- **Returns:** `KinesisClient` - The AWS kinesis client.

Usage:

```typescript
// inside an actions performAs method
const kinesisClient = UseKinesis.as(actor, this.abilityAlias).getClient();
// now you can use the client
```

### using

```typescript
public static using(settings: AwsSettings): UseKinesis
```

- **Description:** Initialize the `UseKinesis` ability by passing an `AwsSettings` object.
- **Parameters:**
  - `settings` - The AWS Settings.
- **Returns:** `UseKinesis` - The initialized `UseKinesis` object.

Usage:

```typescript
actor.can(UseKinesis.using(settings))
```

### as

```typescript
public static as(actor: Actor, alias?: string): UseKinesis
```

- **Description:** Use this ability as an actor.
- **Parameters:**
  - `actor` - The actor object.
  - `alias` - (Optional) The alias for the ability
- **Returns:** `UseKinesis` - The ability to use Kinesis as the actor, optionally with an alias name.

import AbilityMethodsInheritedFromCore from '../../../../_ability-methods-inherited-from-core.mdx';

<AbilityMethodsInheritedFromCore />