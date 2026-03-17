# Define your Screen

The `screen` represents elements that can be used to identify and interact with on a screen.
It is designed to make the automation of actions more convenient.
In Testla Screenplay there are 2 options to define a screen element.

Option 1: static selector via a Playwright compatible locator string.

Option 2: lazy selector via a function using the Playwrights page element to dynamically resolve locators during lookup time.

```typescript
export class LoginScreen {
    // static selector
    static EMAIL_INPUT = '#emailInput';

    // static selector
    static PASSWORD_FIELD = '#passwordField';

    // lazy selector
    static LOGIN_BUTTON: LazySelector = (page: Page) => page.getByRole('button', { name: 'Log in' });
}
```

The elements can then be called as seen in the following example:

```javascript
Actor.attemptsTo(
    Type.in(LoginScreen.EMAIL_INPUT, 'me@example.com'),
    Type.in(LoginScreen.PASSWORD_FIELD, 'abc123!'),
    Click.on(LoginScreen.LOGIN_BUTTON),
);
```

For the further reference in our learning section, we will define the PlaywrightScreen as follows.

```typescript
export class PlaywrightScreen {
    static HEADING = 'h1';
}