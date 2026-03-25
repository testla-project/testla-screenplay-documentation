# Fill

The `Fill` class is an action class in the Screenplay pattern designed for use with the `@testla/screenplay` library. This class enables actors to find an element specified by a selector and fill it with a specified input using the `BrowseTheWeb` ability provided by Testla.

import FrameEnabledActionExtend from './_frame-enabled-action-extend.mdx';

<FrameEnabledActionExtend />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<void>;
```

- **Description:** Finds the specified selector and fills it with the specified input using the `BrowseTheWeb` ability. This action checks, focuses the element, fills it, and triggers an `input` event after filling.
- **Parameters:**
  - `actor` - The actor performing this action.
- **Returns:** `Promise<void>` - Returns a promise that resolves after filling the specified element.

### in

```typescript
public static in(selector: Selector, input: string, options?: SelectorOptions & Maskable): Fill;
```

- **Description:** Creates a new instance of the `Fill` class specifically for filling the specified element with the specified input.
- **Parameters:**
  - `selector` - The selector of the element to be filled.
  - `input` - The input string to fill the element with.
  - `options` (optional) - Advanced selector lookup and masking options.
- **Returns:** `Fill` - Returns a new `Fill` instance.

:::info
As of 1.7.0 input values can be masked in the logs via the option `{ maskInLogs: true }` which is suggested for handling passwords or other classified information in tests.
:::

import FrameEnabledActionMethodsInherited from './_frame-enabled-action-methods-inherited.mdx';

<FrameEnabledActionMethodsInherited />