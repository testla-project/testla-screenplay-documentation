# Types

## LogEvent

```typescript
type LogEvent = {
    activityType: ActivityType;
    activityAction: string;
    activityDetails: ActivityDetail[];
    status: ExecStatus;
    actor: string;
    location?: Location;
    skipOnFailLevel: number;
    wrapLevel: number;
    time: Date;
}
```

## Location

```typescript
type Location = {
    file: string;
    line: number;
    column: number;
}
```

## ExecStatus

```typescript
type ExecStatus = EXEC_STATUS
```

## CallStackInfo

```typescript
type CallStackInfo = {
    // the called function i.e. the static function to initialize actions/tasks/questions
    caller: string;
    // an object holding key/value pairs for all input attributes
    calledWith?: CallStackCalledWith;
    // the file where the caller is located
    file?: string;
}
```

## CallStackCalledWith

```typescript
type CallStackCalledWith = { [key: string]: any };
```