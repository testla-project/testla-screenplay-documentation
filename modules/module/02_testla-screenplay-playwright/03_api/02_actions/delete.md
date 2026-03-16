# Delete

The `Delete` class provides a convenient way to perform HTTP DELETE requests. It allows customization of headers and the format of the response body, offering flexibility in testing scenarios.

import RequestActionExtend from './_request-action-extend.mdx';

<RequestActionExtend />

## Methods

### performAs

```typescript
public async performAs(actor: Actor): Promise<Response>;
```

- **Description:** Send an HTTP DELETE request to the specified URL.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<Response>` - The response object.

### from

```typescript
public static from(url: string): Delete;
```

- **Description:** Create a new instance of the `Delete` class with the specified URL.
- **Parameters:**
  - `url` - The URL of the target.
- **Returns:** `Delete` - A new instance of the `Delete` class.

### withHeaders

```typescript
public withHeaders(headers: Headers): Delete;
```

- **Description:** Add headers to the HTTP DELETE request.
- **Parameters:**
  - `headers` - The headers to be added.
- **Returns:** `Delete` - The updated instance of the `Delete` class.

### withResponseBodyFormat

```typescript
public withResponseBodyFormat(responseBodyFormat: ResponseBodyFormat): Delete;
```

- **Description:** Set the format in which the response body should be returned.
- **Parameters:**
  - `responseBodyFormat` - The desired format of the response body which can be one out of `json`, `text`, `buffer` or `none`. The default is `json`.
- **Returns:** `Delete` - The updated instance of the `Delete` class.

import ActionMethodsInheritedFromCore from '../../../../_action-methods-inherited-from-core.mdx';

<ActionMethodsInheritedFromCore />