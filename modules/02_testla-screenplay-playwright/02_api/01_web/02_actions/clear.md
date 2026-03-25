# Clear

The `Clear` class is an action class in the Screenplay pattern designed for use with the `@testla/screenplay` library. This class allows actors to remove cookies from the browser using the `BrowseTheWeb` ability provided by Testla.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<any>;
```

- **Description:** Clears all browser cookies using the `BrowseTheWeb` ability.
- **Parameters:**
  - `actor` - The actor performing this action.
- **Returns:** `Promise<any>` - Returns a promise that resolves after clearing cookies.

### cookies

```typescript
public static cookies(): Clear;
```

- **Description:** Creates a new instance of the `Clear` class specifically for clearing browser cookies.
- **Returns:** `Clear` - Returns a new `Clear` instance.

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />