# Page

*Introduced in: 1.8.0*

The `Page` class is a question class in the Screenplay pattern designed for use with the `@testla/screenplay` library. This class enables actors to inquire about the state of a browser page, such as url, using the `BrowseTheWeb` ability provided by Testla.

import QuestionExtendCore from '../../../../_question-extend-core.mdx';

<QuestionExtendCore />

## Methods

### answeredBy

```typescript
public async answeredBy(actor: Actor): Promise<boolean>;
```

- **Description:** Verifies if the page is in the specified state (i.e. url).
- **Parameters:**
  - `actor` - The actor answering this question.
- **Returns:** `Promise<boolean>` - Resolves to `true` for a positive check, `false` for a negative check.

### toHave

```typescript
public static get toHave(): Page;
```

- **Description:** Creates a new instance of the `Page` class for a positive check.
- **Returns:** `Page` - Returns a new `Page` instance.

### notToHave

```typescript
public static get notToHave(): Page;
```

- **Description:** Creates a new instance of the `Page` class for a negative check.
- **Returns:** `Page` - Returns a new `Page` instance.

### url

*Introduced in: 1.8.0*

```typescript
public url(url: string | RegExp, options?: { timeout?: number }): Page;
```

- **Description:** Verifies if an element has the given text.
- **Parameters:**
  - `url` - The url.
  - `options` - (optional) Advanced page options.
- **Returns:** `Page` - Returns this `Page` instance.

import QuestionMethodsInheritedFromCore from '../../../../_question-methods-inherited-from-core.mdx';

<QuestionMethodsInheritedFromCore />