export default `[WEBKIT] ✗ Testing screenplay-playwright-js web module > Navigate [FAILED after 1.133s]
────────────────────────────────
2025-11-06T10:45:50.709Z  [EXEC]  ↪ TestActor attemptsTo NavigateTask.step()  (./__tests__/reporter-cases.spec.ts:52)
2025-11-06T10:45:50.709Z  [EXEC]      ↪ TestActor attemptsTo NavigateInnerTask.unknown()
2025-11-06T10:45:50.712Z  [EXEC]          ↪ TestActor attemptsTo Navigate.unknown("xyz://google.com").orSkipOnFail
2025-11-06T10:45:50.725Z  [SKIP]          ⤿ TestActor attemptsTo Navigate.unknown("xyz://google.com").orSkipOnFail
2025-11-06T10:45:50.725Z  [EXEC]          ↪ TestActor attemptsTo Navigate.unknown("https://google.com")
2025-11-06T10:45:51.734Z  [FAIL]          ✗ TestActor attemptsTo Navigate.unknown("https://google.com")
2025-11-06T10:45:51.734Z  [FAIL]      ✗ TestActor attemptsTo NavigateInnerTask.unknown()
2025-11-06T10:45:51.734Z  [FAIL]  ✗ TestActor attemptsTo NavigateTask.step()  (./__tests__/reporter-cases.spec.ts:52)

[WEBKIT] ✓ Testing screenplay-playwright-js web module > Navigate [RETRY#1] [PASSED after 1.122s]
────────────────────────────────
2025-11-06T10:45:52.450Z  [EXEC]  ↪ TestActor attemptsTo NavigateTask.step()  (./__tests__/reporter-cases.spec.ts:52)
2025-11-06T10:45:52.451Z  [EXEC]      ↪ TestActor attemptsTo NavigateInnerTask.unknown()
2025-11-06T10:45:52.452Z  [EXEC]          ↪ TestActor attemptsTo Navigate.unknown("xyz://google.com").orSkipOnFail
2025-11-06T10:45:52.460Z  [SKIP]          ⤿ TestActor attemptsTo Navigate.unknown("xyz://google.com").orSkipOnFail
2025-11-06T10:45:52.460Z  [EXEC]          ↪ TestActor attemptsTo Navigate.unknown("https://google.com")
2025-11-06T10:45:53.455Z  [DONE]          ✓ TestActor attemptsTo Navigate.unknown("https://google.com")
2025-11-06T10:45:53.455Z  [DONE]      ✓ TestActor attemptsTo NavigateInnerTask.unknown()
2025-11-06T10:45:53.455Z  [DONE]  ✓ TestActor attemptsTo NavigateTask.step()  (./__tests__/reporter-cases.spec.ts:52)

[FIREFOX] ✓ Testing screenplay-playwright-js web module > Navigate [PASSED after 1.256s]
────────────────────────────────
2025-11-06T10:45:50.716Z  [EXEC]  ↪ TestActor attemptsTo NavigateTask.step()  (./__tests__/reporter-cases.spec.ts:52)
2025-11-06T10:45:50.716Z  [EXEC]      ↪ TestActor attemptsTo NavigateInnerTask.unknown()
2025-11-06T10:45:50.717Z  [EXEC]          ↪ TestActor attemptsTo Navigate.unknown("xyz://google.com").orSkipOnFail
2025-11-06T10:45:50.728Z  [SKIP]          ⤿ TestActor attemptsTo Navigate.unknown("xyz://google.com").orSkipOnFail
2025-11-06T10:45:50.728Z  [EXEC]          ↪ TestActor attemptsTo Navigate.unknown("https://google.com")
2025-11-06T10:45:51.839Z  [DONE]          ✓ TestActor attemptsTo Navigate.unknown("https://google.com")
2025-11-06T10:45:51.840Z  [DONE]      ✓ TestActor attemptsTo NavigateInnerTask.unknown()
2025-11-06T10:45:51.840Z  [DONE]  ✓ TestActor attemptsTo NavigateTask.step()  (./__tests__/reporter-cases.spec.ts:52)

[CHROMIUM] ✓ Testing screenplay-playwright-js web module > Navigate [PASSED after 1.303s]
────────────────────────────────
2025-11-06T10:45:50.736Z  [EXEC]  ↪ TestActor attemptsTo NavigateTask.step()  (./__tests__/reporter-cases.spec.ts:52)
2025-11-06T10:45:50.737Z  [EXEC]      ↪ TestActor attemptsTo NavigateInnerTask.unknown()
2025-11-06T10:45:50.737Z  [EXEC]          ↪ TestActor attemptsTo Navigate.unknown("xyz://google.com").orSkipOnFail
2025-11-06T10:45:50.746Z  [SKIP]          ⤿ TestActor attemptsTo Navigate.unknown("xyz://google.com").orSkipOnFail
2025-11-06T10:45:50.746Z  [EXEC]          ↪ TestActor attemptsTo Navigate.unknown("https://google.com")
2025-11-06T10:45:51.893Z  [DONE]          ✓ TestActor attemptsTo Navigate.unknown("https://google.com")
2025-11-06T10:45:51.893Z  [DONE]      ✓ TestActor attemptsTo NavigateInnerTask.unknown()
2025-11-06T10:45:51.893Z  [DONE]  ✓ TestActor attemptsTo NavigateTask.step()  (./__tests__/reporter-cases.spec.ts:52)

────────────────────────────────

Finished the run: PASSED after 4.022s

Flaky: 1
Passed: 2`