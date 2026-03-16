# Types

## Selector

```typescript
type Selector = string | Locator | LazySelector;
```

## LazySelector

```typescript
type LazySelector = (page: Page | FrameLocator) => Locator;
```

## SelectorOptions

```typescript
type SelectorOptions = {
    hasText?: string | RegExp | undefined;
    subSelector?: SubSelector;
    timeout?: number;
    state?: SelectorOptionsState;
    evaluateVisible?: boolean;
};
```

## SubSelector

```typescript
type SubSelector = [
    Selector, SelectorOptions?
];
```

## SelectorOptionsState

```typescript
type SelectorOptionsState = 'attached' | 'detached' | 'visible' | 'hidden';
```

## ClickOptions

```typescript
type ClickOptions = {
    button?: 'left'|'right'|'middle';
    clickCount?: number;
    delay?: number;
    force?: boolean;
    modifiers?: Array<'Alt'|'Control'|'Meta'|'Shift'>;
    noWaitAfter?: boolean;
    position?: {
        x: number;
        y: number;
    };
    trial?: boolean;
};
```

## DoubleClickOptions

```typescript
type DoubleClickOptions = {
    button?: 'left'|'right'|'middle';
    delay?: number;
    force?: boolean;
    modifiers?: Array<'Alt'|'Control'|'Meta'|'Shift'>;
    noWaitAfter?: boolean;
    position?: {
        x: number;
        y: number;
    };
    trial?: boolean;
};
```

## Maskable

```typescript
type Maskable = {
    maskInLogs?: boolean;
};
```