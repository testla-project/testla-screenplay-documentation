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
In some cases it is not possible to listen to the event emitter i.e. with a setup of main and worker processes - an example for that is Playwright.
:::