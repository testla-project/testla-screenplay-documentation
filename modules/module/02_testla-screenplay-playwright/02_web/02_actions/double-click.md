# DoubleClick

The `DoubleClick` class is an action class in the Screenplay pattern designed for use with the `@testla/screenplay` library. This class allows actors to double click on an element specified by a selector using the `BrowseTheWeb` ability provided by Testla.

import FrameEnabledActionExtend from './_frame-enabled-action-extend.mdx';

<FrameEnabledActionExtend />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<void>;
```

- **Description:** Finds the specified selector and double clicks on it using the `BrowseTheWeb` ability.
- **Parameters:**
  - `actor` - The actor performing this action.
- **Returns:** `Promise<void>` - Returns a promise that resolves after double clicking the element.

### on

```typescript
public static on(selector: Selector, options?: SelectorOptions & DoubleClickOptions): DoubleClick;
```

- **Description:** Creates a new instance of the `DoubleClick` class specifically for double clicking on an element specified by a selector.
- **Parameters:**
  - `selector` - The Selector.
  - `options` (optional) - An object that can include both advanced selector lookup options (e.g., Playwright locator options) and double click options.
- **Returns:** `DoubleClick` - Returns a new `DoubleClick` instance.

import FrameEnabledActionMethodsInherited from './_frame-enabled-action-methods-inherited.mdx';

<FrameEnabledActionMethodsInherited />