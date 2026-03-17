# Get

The `Get` class provides a convenient way to perform HTTP GET requests. It allows customization of headers and the format of the response body, offering flexibility in testing scenarios.

import RequestActionExtend from './_request-action-extend.mdx';

<RequestActionExtend />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<Response>;
```

- **Description:** Send an HTTP GET request to the specified URL.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<Response>` - The response object.

### from

```typescript
public static from(url: string): Get;
```

- **Description:** Create a new instance of the `Get` class with the specified URL.
- **Parameters:**
  - `url` - The URL of the target.
- **Returns:** `Get` - A new instance of the `Get` class.

### withHeaders

```typescript
public withHeaders(headers: Headers): Get;
```

- **Description:** Add headers to the HTTP GET request.
- **Parameters:**
  - `headers` - The headers to be added.
- **Returns:** `Get` - The updated instance of the `Get` class.

### withResponseBodyFormat

```typescript
public withResponseBodyFormat(responseBodyFormat: ResponseBodyFormat): Get;
```

- **Description:** Set the format in which the response body should be returned.
- **Parameters:**
  - `responseBodyFormat` - The desired format of the response body which can be one out of `json`, `text`, `buffer` or `none`. The default is `json`.
- **Returns:** `Get` - The updated instance of the `Get` class.

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />