# Writing tests

Now we are using our custom components in a test like shown below. 

```typescript
test.describe('Use your defined task', () => {
    // The test uses the defined Actor Bob from the fixture
    test('execute task', async ({ Bob }) => {
        // Execute the task Login.toApp()
        await Bob.attemptsTo(
            Login.toApp()
        );
        // Ask for a specific element is visible to validate that the login was successful
        await Bob.asks(
            Element.toBe.visible(HomeScreen.LOGGED_IN_INDICATOR)
        );
    });
});
```

It is also possible to use multiple tasks in one `attemptsTo`.

```typescript
test.describe('Use your defined task', () => {
    // The test uses the defined Actor Bob from the fixture
    test('execute task', async ({ Bob }) => {
        // Execute the task Login.toApp() and some others
        await Bob.attemptsTo(
            Login.toApp(), 
            TheSecondTask.doSomething(),
            TheThirdTask.doSomething(),
        );
    });
});
```

Here we use our custom question. 

```typescript
test.describe('Use your defined question', () => {
    // The test uses the defined Actor Bob from the fixture
    test('execute task and then the question', async ({ Bob }) => {
        // Execute the task Login.toApp() and some others
        await Bob.attemptsTo(
            Login.toApp(), 
            TheSecondTask.doSomething(),
            TheThirdTask.doSomething(),
        );

        // Use our custom question
        await Bob.asks(
            Entity.has.attributeValue(entityObj, this.attribute, this.value)
        );
    });
});
```

It would also be possible to ask multiple questions in a sigle asks block, similar to the tasks in an attemptsTo block.
