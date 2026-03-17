# Define Actor as PW Fixture

## Introduction

Playwright Test is based on the concept of test fixtures. Test fixtures are used to establish an environment for each test, giving the test everything it needs. Test fixtures are isolated between tests. With fixtures you can create actors which are then available in every test and give them abilities which they can use.

## Creating an actor with abilities

To create your actors with abilities in an own fixture, use `test.extend()` to create a new test object that will include it. 
Below we create a file called `actors.ts` and add the following snippet. 

This code sets up a Playwright test suite using the Screenplay pattern. It defines a function to create `actors`, specifies their details using environment variables, and then extends the test suite with these actors for use in tests.
It creates a new page in the provided browser context (`context.newPage()`), and then it returns an Actor with specified properties (`name`, `username`, `password`) and capabilities to `browse the web` and `use an API`.

```typescript
import { APIRequestContext, Browser, test as base } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';
import { UseAPI } from '@testla/screenplay-playwright/api';

// Function to create an user actor with both Web browsing and API capabilities
const createUser = async (browser: Browser, request: APIRequestContext, actorName: string, username: string, password: string): Promise<Actor> => {
    const page = await context.newPage();

    return Actor.named(actorName)
        .with('username', username)
        .with('password', password)
        .can(BrowseTheWeb.using(page))
        .can(UseAPI.using(request));
};

// Define the types of actors
type Actors = {
    Bob: Actor;
    Alice: Actor;
    Andy: Actor;
};

// Define test fixtures for each actor
export const test = base.extend<Actors>({
    Bob: async ({ browser, request }, use) => {
        const Bob = await createUser(browser, request, 'Bob', `${process.env.BOB_USER_NAME}`, `${process.env.BOB_USER_PASSWORD}`);
        await use(Bob);
    },
    Alice: async ({ browser, request }, use) => {
        const Alice = await createUser(browser, request, 'Alice', `${process.env.ALICE_USER_NAME}`, `${process.env.ALICE_USER_PASSWORD}`);
        await use(Alice);
    },
    Andy: async ({ browser, request }, use) => {
        const Andy = await createUser(browser, request, 'Andy', `${process.env.ANDY_USER_NAME}`, `${process.env.ANDY_USER_PASSWORD}`);
        await use(Andy);
    },
});

// Export the expect function from the Playwright test library
export { expect } from '@playwright/test';
```

### In Detail

The code above defines a function `createUser` that creates an actor with both Web browsing and API capabilities. It uses Playwright's Browser and APIRequestContext to create a new page for web browsing and adds the necessary `abilities` for interacting with the Web and API.

The test object is a test fixture that extends Playwright's base test object. It defines three actors (Bob, Alice and Andy) and provides fixtures for creating them with the `createUser` function. Each actor is associated with specific environment variables for the username and password.

The exported test object also includes the expect function from the Playwright test library.

In the provided example of using an actor in a test, the Bob actor is used to perform login actions and assertions. Multiple actors can be used in a single test, each with its own set of interactions and expectations.

## Using an actor

Just mention the `actor` in your test function argument, and test runner will take care of it. Fixtures are also available in hooks and other fixtures. If you use TypeScript, fixtures will have the right type.

Below we use the actor `Bob` as defined above.

```typescript
test.describe('Login to application', () => {
    test('can login', async ({ Bob }) => {
        await Bob.attemptsTo(Login.toApp());
        await Bob.asks(Element.toBe.visible(HomeScreen.LOGGED_IN_INDICATOR));
    });
});
```

You can also use multiple actors from above in one test

```typescript title="test"
test.describe('Login to application', () => {
    test('can login', async ({ Bob, Andy }) => {
        await Bob.attemptsTo(Login.toApp());
        await Bob.asks(Element.toBe.visible(HomeScreen.LOGGED_IN_INDICATOR));

        await Andy.attemptsTo(Login.toApp());
        await ANdy.asks(Element.toBe.visible(HomeScreen.LOGGED_IN_INDICATOR));
    });
});
```
