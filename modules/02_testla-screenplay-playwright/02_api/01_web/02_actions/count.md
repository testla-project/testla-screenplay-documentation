# Count

The `Count` class is an action class in the Screenplay pattern designed for use with the `@testla/screenplay` library. This class enables actors to count screen elements for a given selector using the `BrowseTheWeb` ability provided by Testla.

import FrameEnabledActionExtend from './_frame-enabled-action-extend.mdx';

<FrameEnabledActionExtend />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<any>;
```

- **Description:** Counts screen elements which can be found via a selector.
- **Parameters:**
  - `actor` - The actor performing this action.
- **Returns:** `Promise<number>` - Returns the count of found elements.

### elements

```typescript
public static elements(selector: Selector, options?: SelectorOptions): Count;
```

- **Description:** Creates a new instance of the `Count` class specifically for counting elements which satisfy a selector lookup.
- **Parameters:**
  - `selector` - The Selector.
  - `options` (optional) - Advanced selector lookup options.
- **Returns:** `Count` - Returns a new `Count` instance.

import FrameEnabledActionMethodsInherited from './_frame-enabled-action-methods-inherited.mdx';

<FrameEnabledActionMethodsInherited />
