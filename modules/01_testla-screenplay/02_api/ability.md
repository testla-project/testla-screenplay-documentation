# Ability

The `Ability` class is the base or using actions, tasks or questions. Every custom Ability must extend this class.

## Methods

### as

*Introduced in: 0.1.0*

```typescript
public static as(actor: Actor, alias?: string): IAbility;
```

- **Description:** Uses this ability as an actor.
- **Parameters:**
  - `actor` - The actor using this ability.
  - `alias` - (Optional) The alias for the ability
- **Returns:** `Ability` - The ability to use.

:::info
This method most likely must be overwritten in custom Abilities so that it returns the correct Ability type.
:::

### withAlias

*Introduced in: 0.3.0*

```typescript
public withAlias(alias: string): this;
```

- **Description:** Defines the ability's alias.
- **Parameters:**
  - `alias` - The alias.
- **Returns:** `Ability` - Returns the current ability.

Usage:

```javascript
Actor.can(Ability.withAlias('aliased'));
```
