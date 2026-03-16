# Download

*Introduced in: 1.5.0*

The `Download` class is an action class in the Screenplay pattern designed for use with the `@testla/screenplay` library. This class allows actors to download a file specified by a selector using the `BrowseTheWeb` ability provided by Testla.

import FrameEnabledActionExtend from './_frame-enabled-action-extend.mdx';

<FrameEnabledActionExtend />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<boolean>;
```

- **Description:** Finds the specified selector and clicks on it using the `BrowseTheWeb` ability and waits for download complete.
- **Parameters:**
  - `actor` - The actor performing this action.
- **Returns:** `Promise<boolean>` - Returns a promise of true after the download is complete.

### file

```typescript
public static file(selector: Selector, options?: SelectorOptions & { filepath?: string; filename?: string }): Download;
```

- **Description:** Creates a new instance of the `Download` class specifically for downloading a file behind a link element.
- **Parameters:**
  - `selector` - The Selector.
  - `options` (optional) - Advanced selector lookup options and filepath and filename configuration.
- **Returns:** `Downlaod` - Returns a new `Download` instance.

import FrameEnabledActionMethodsInherited from './_frame-enabled-action-methods-inherited.mdx';

<FrameEnabledActionMethodsInherited />