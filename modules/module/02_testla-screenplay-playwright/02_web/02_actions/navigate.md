# Navigate

The `Navigate` class is an action class in the Screenplay pattern designed for use with the `@testla/screenplay` library. This class enables actors to navigate to a specified URL using the `BrowseTheWeb` ability provided by Testla.

import ActionExtendCore from '../../../../_action-extend-core.mdx';

<ActionExtendCore />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<any>;
```

- **Description:** Navigates to the specified URL.
- **Parameters:**
  - `actor` - The actor performing this action.
- **Returns:** `Promise<any>` - Returns the main resource response.

### to

```typescript
public static to(url: string): Navigate;
```

- **Description:** Creates a new instance of the `Navigate` class specifically for navigating to a certain URL.
- **Parameters:**
  - `url` - The URL which should be accessed.
- **Returns:** `Navigate` - Returns a new `Navigate` instance.

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />