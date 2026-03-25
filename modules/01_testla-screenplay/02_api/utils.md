# Utils

## Logs

Utils to work with Testla Screenplay logs.

:::info
Also see our documentation for debug logs section: [Creating a custom Logger](http://localhost:3001/docs/debug-logs#creating-a-custom-logger)
:::

### checkIfLogEvent

Checks if a log line is a Testla Screenplay log event.

Usage:

```typescript
import { checkIfLogEvent } from '@testla/screenplay'

// check if log line is a valid testla strucured log
if (checkIfLogEvent(line)) {
    // custom code comes here
}
```

### parseLogEvent

Parses a log line as a Testla Screenplay log event object.

```typescript
import { parseLogEvent, LogEvent } from '@testla/screenplay'

// ensure that the line is a proper log event before - see: checkIfLogEvent
const logEvent: LogEvent = parseLogEvent(line);
```
