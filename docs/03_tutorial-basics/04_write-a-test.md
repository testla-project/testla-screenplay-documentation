# Writing tests

Testla Screenplay tests are simple, they
- perform actions and tasks, and
- ask about the state against expectations

There is no need to wait for anything prior to performing a task.
The following example shows how to write a test;:

```typescript
test.describe('Check title', () => {
    // The test uses the defined Actor Bob from the fixture
    test('has title', async ({ Bob }) => {
        // Execute the action Navigate.to()
        await Bob.attemptsTo(Navigate.to('https://playwright.dev/'));
        // Ask for a specific element - validate title equals expected
        await Bob.asks(Element.toHave.text(PlaywrightScreen.HEADING, 'Playwright enables reliable end-to-end testing for modern web apps.'));
    });
});
```
