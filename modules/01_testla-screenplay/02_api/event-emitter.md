# EventEmitter

## testlaScreenplayEventEmitter

Testla Screenplay offers an event emitter to listen on for log events. This allows you to build custom loggers.

Usage:

```typescript
import { testlaScreenplayEventEmitter, LogEvent } from '@tesla/screenplay';

testlaScreenplayEventEmitter.on('logEvent', (event: LogEvent) => {
    // custom implementation
});
```

:::info
Also see our documentation for debug logs section: [Creating a custom Logger](http://localhost:3001/docs/debug-logs#creating-a-custom-logger)
:::