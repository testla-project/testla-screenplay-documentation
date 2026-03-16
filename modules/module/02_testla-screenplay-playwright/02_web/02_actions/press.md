# Press

The `Press` class is an action class in the Screenplay pattern designed for use with the `@testla/screenplay` library. This class enables actors to simulate pressing specified keys on the keyboard using the `BrowseTheWeb` ability provided by Testla.

import FrameEnabledActionExtend from './_frame-enabled-action-extend.mdx';

<FrameEnabledActionExtend />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<void>;
```

- **Description:** Simulates pressing the specified key(s) on the keyboard.
- **Parameters:**
  - `actor` - The actor performing this action.
- **Returns:** `Promise<void>` - Returns when the key(s) are pressed.

### key

```typescript
public static key(keys: string): Press;
```

- **Description:** Creates a new instance of the `Press` class specifically for pressing the specified key(s) on the keyboard.
- **Parameters:**
  - `keys` - The key(s) to press. Multiple keys can be pressed by concatenating with "+" (e.g., Shift+A).
- **Returns:** `Press` - Returns a new `Press` instance.

### sequentially

```typescript
public static sequentially(selector: Selector, input: string, options?: SelectorOptions & Maskable): Press;
```

- **Description:** Creates a new instance of the `Press` class types the given input into the element specified by the selector.
- **Parameters:**
  - `selector` - The selector of the source element.
  - `input` - The input to type into the element.
  - `options` - (optional) Advanced selector lookup and masking options.
- **Returns:** `Promise<void>` - Returns when the key(s) have been pressed.

:::info
As of 1.7.0 input values can be masked in the logs via the option `{ maskInLogs: true }` which is suggested for handling passwords or other clasified information in tests.
:::

import FrameEnabledActionMethodsInherited from './_frame-enabled-action-methods-inherited.mdx';

<FrameEnabledActionMethodsInherited />