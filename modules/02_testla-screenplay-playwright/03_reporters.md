# Reporters

Testla Screenplay for Playwright comes with a hand full of custom reporters for Playwright. Similar to the Playwright reporters they give you deeper insights into executions of your test suite.

Reporters rely on structured screenplay logs (see Testla Screenplay Core).

:::info
This feature is currently in experimental stage and might see bigger changes.
:::

## Text Reporter

*Introduced in: 1.7.0*

The text reporter logs all activities in a text file.

To activate the reporter announce it in your `playwright.config.ts` as follows.

```typescript
reporter: [
    [
        // the reporter from testla
        '@testla/screenplay-playwright/reporter/text',
        // optional: the path to the output file, defaults to: screenplay-report.txt
        { outputFile: 'results.txt' },
    ],
    // other reporters
],
```

import ExampleReportLoader from './_example-report-loader.mdx';

The generated text report will look like follows:

<details>
<summary>Click to expand example text report output</summary>

<ExampleReportLoader type="txt" />

</details>

## JSON Reporter

*Introduced in: 1.8.0*

The JSON reporter logs all activities in a JSON file.

To activate the reporter announce it in your `playwright.config.ts` as follows.

```typescript
reporter: [
    [
        // the reporter from testla
        '@testla/screenplay-playwright/reporter/json',
        // optional: the path to the output file, defaults to: screenplay-report.json
        { outputFile: 'results.json' },
    ],
    // other reporters
],
```

The generated JSON report will look like follows:

<details>
<summary>Click to expand example JSON report output</summary>

<ExampleReportLoader type="json" />

</details>

## HTML Reporter

*Introduced in: 1.8.0*

The HTML reporter logs all activities in makes insights about the overall test execution available in a browsable HTML report.

To activate the reporter announce it in your `playwright.config.ts` as follows.

```typescript
reporter: [
    [
        // the reporter from testla
        '@testla/screenplay-playwright/reporter/html',
        // optional: the path to the output file, defaults to: screenplay-report
        { outputDir: 'results' },
    ],
    // other reporters
],
```


import ImagePreview from '@site/src/components/ImagePreview';

import img1 from './img/html-report-sample.png'

import img2 from './img/html-report-sample-execution-details.png'

The generated html report will look like follows:

<ImagePreview src={img1} alt="HTML Report Example" previewWidth={260} />

For each execution there is a details section:

<ImagePreview src={img2} alt="HTML Report Example" previewWidth={260} />