export default {
  "status": "passed",
  "startTime": "2025-11-06T10:45:49.722Z",
  "duration": 4021.8830000000003,
  "executions": [
    {
      "testCaseId": "72defe0945df09a49d56-ced69201aae65b4cecf7",
      "titlePath": [
        "Testing screenplay-playwright-js web module",
        "Navigate"
      ],
      "project": "webkit",
      "suite": "reporter-cases.spec.ts",
      "location": {
        "file": "./__tests__/reporter-cases.spec.ts",
        "line": 51,
        "column": 5
      },
      "runs": [
        {
          "status": "failed",
          "startTime": "2025-11-06T10:45:50.151Z",
          "duration": 1133,
          "steps": [
            {
              "actor": "TestActor",
              "activityType": "task",
              "activityAction": "attemptsTo",
              "activityDetails": [
                {
                  "methodName": "NavigateTask"
                },
                {
                  "methodName": "step",
                  "parameters": {}
                }
              ],
              "status": "failed",
              "location": {
                "file": "./__tests__/reporter-cases.spec.ts",
                "line": 52,
                "column": 20
              },
              "startTime": "2025-11-06T10:45:50.709Z",
              "steps": [
                {
                  "actor": "TestActor",
                  "activityType": "task",
                  "activityAction": "attemptsTo",
                  "activityDetails": [
                    {
                      "methodName": "NavigateInnerTask"
                    },
                    {
                      "methodName": "unknown",
                      "parameters": {}
                    }
                  ],
                  "status": "failed",
                  "startTime": "2025-11-06T10:45:50.709Z",
                  "steps": [
                    {
                      "actor": "TestActor",
                      "activityType": "action",
                      "activityAction": "attemptsTo",
                      "activityDetails": [
                        {
                          "methodName": "Navigate"
                        },
                        {
                          "methodName": "unknown",
                          "parameters": {
                            "url": "xyz://google.com"
                          }
                        },
                        {
                          "methodName": "orSkipOnFail"
                        }
                      ],
                      "status": "skipped",
                      "startTime": "2025-11-06T10:45:50.712Z",
                      "duration": 13,
                      "steps": [
                        {
                          "isPW": true,
                          "duration": 12,
                          "error": {
                            "message": "page.goto: net::ERR_ABORTED at xyz://google.com\n=========================== logs ===========================\nnavigating to \"xyz://google.com\", waiting until \"load\"\n============================================================",
                            "stack": "Error: page.goto: net::ERR_ABORTED at xyz://google.com\n=========================== logs ===========================\nnavigating to \"xyz://google.com\", waiting until \"load\"\n============================================================\n    at Navigate.performAs (/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts:25:21)\n    at Actor.<anonymous> (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:123:55)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:31:71\n    at __awaiter (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:27:12)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:110:41",
                            "location": {
                              "file": "/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts",
                              "column": 21,
                              "line": 25
                            },
                            "snippet": "\u001b[90m   at \u001b[39m../src/web/actions/Navigate/Navigate.ts:25\n\n\u001b[0m \u001b[90m 23 |\u001b[39m     \u001b[36mpublic\u001b[39m performAs(actor\u001b[33m:\u001b[39m \u001b[33mActor\u001b[39m)\u001b[33m:\u001b[39m \u001b[33mPromise\u001b[39m\u001b[33m<\u001b[39m\u001b[36mnull\u001b[39m \u001b[33m|\u001b[39m \u001b[33mResponse\u001b[39m\u001b[33m>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m         \u001b[36mconst\u001b[39m page \u001b[33m=\u001b[39m \u001b[33mBrowseTheWeb\u001b[39m\u001b[33m.\u001b[39m\u001b[36mas\u001b[39m(actor\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mabilityAlias)\u001b[33m.\u001b[39mgetPage()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m         \u001b[36mreturn\u001b[39m page\u001b[33m.\u001b[39mgoto(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39murl)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[90m/**\u001b[39m\u001b[0m"
                          },
                          "location": {
                            "file": "./src/web/actions/Navigate/Navigate.ts",
                            "line": 25,
                            "column": 21
                          },
                          "startTime": "2025-11-06T10:45:50.713Z",
                          "steps": [],
                          "title": "page.goto(xyz://google.com)",
                          "status": "failed"
                        }
                      ]
                    },
                    {
                      "actor": "TestActor",
                      "activityType": "action",
                      "activityAction": "attemptsTo",
                      "activityDetails": [
                        {
                          "methodName": "Navigate"
                        },
                        {
                          "methodName": "unknown",
                          "parameters": {
                            "url": "https://google.com"
                          }
                        }
                      ],
                      "status": "failed",
                      "startTime": "2025-11-06T10:45:50.725Z",
                      "duration": 1009,
                      "steps": [
                        {
                          "isPW": true,
                          "duration": 1009,
                          "error": {
                            "message": "page.goto: Page closed\n=========================== logs ===========================\nnavigating to \"https://google.com/\", waiting until \"load\"\n============================================================",
                            "stack": "Error: page.goto: Page closed\n=========================== logs ===========================\nnavigating to \"https://google.com/\", waiting until \"load\"\n============================================================\n    at Navigate.performAs (/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts:25:21)\n    at Actor.<anonymous> (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:123:55)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:31:71\n    at __awaiter (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:27:12)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:110:41",
                            "location": {
                              "file": "/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts",
                              "column": 21,
                              "line": 25
                            },
                            "snippet": "\u001b[90m   at \u001b[39m../src/web/actions/Navigate/Navigate.ts:25\n\n\u001b[0m \u001b[90m 23 |\u001b[39m     \u001b[36mpublic\u001b[39m performAs(actor\u001b[33m:\u001b[39m \u001b[33mActor\u001b[39m)\u001b[33m:\u001b[39m \u001b[33mPromise\u001b[39m\u001b[33m<\u001b[39m\u001b[36mnull\u001b[39m \u001b[33m|\u001b[39m \u001b[33mResponse\u001b[39m\u001b[33m>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m         \u001b[36mconst\u001b[39m page \u001b[33m=\u001b[39m \u001b[33mBrowseTheWeb\u001b[39m\u001b[33m.\u001b[39m\u001b[36mas\u001b[39m(actor\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mabilityAlias)\u001b[33m.\u001b[39mgetPage()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m         \u001b[36mreturn\u001b[39m page\u001b[33m.\u001b[39mgoto(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39murl)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[90m/**\u001b[39m\u001b[0m"
                          },
                          "location": {
                            "file": "./src/web/actions/Navigate/Navigate.ts",
                            "line": 25,
                            "column": 21
                          },
                          "startTime": "2025-11-06T10:45:50.725Z",
                          "steps": [],
                          "title": "page.goto(https://google.com)",
                          "status": "failed"
                        }
                      ]
                    }
                  ],
                  "duration": 1025
                }
              ],
              "duration": 1025
            }
          ]
        },
        {
          "status": "passed",
          "startTime": "2025-11-06T10:45:52.161Z",
          "duration": 1122,
          "steps": [
            {
              "actor": "TestActor",
              "activityType": "task",
              "activityAction": "attemptsTo",
              "activityDetails": [
                {
                  "methodName": "NavigateTask"
                },
                {
                  "methodName": "step",
                  "parameters": {}
                }
              ],
              "status": "passed",
              "location": {
                "file": "./__tests__/reporter-cases.spec.ts",
                "line": 52,
                "column": 20
              },
              "startTime": "2025-11-06T10:45:52.450Z",
              "steps": [
                {
                  "actor": "TestActor",
                  "activityType": "task",
                  "activityAction": "attemptsTo",
                  "activityDetails": [
                    {
                      "methodName": "NavigateInnerTask"
                    },
                    {
                      "methodName": "unknown",
                      "parameters": {}
                    }
                  ],
                  "status": "passed",
                  "startTime": "2025-11-06T10:45:52.451Z",
                  "steps": [
                    {
                      "actor": "TestActor",
                      "activityType": "action",
                      "activityAction": "attemptsTo",
                      "activityDetails": [
                        {
                          "methodName": "Navigate"
                        },
                        {
                          "methodName": "unknown",
                          "parameters": {
                            "url": "xyz://google.com"
                          }
                        },
                        {
                          "methodName": "orSkipOnFail"
                        }
                      ],
                      "status": "skipped",
                      "startTime": "2025-11-06T10:45:52.452Z",
                      "duration": 8,
                      "steps": [
                        {
                          "isPW": true,
                          "duration": 7,
                          "error": {
                            "message": "page.goto: net::ERR_ABORTED at xyz://google.com\n=========================== logs ===========================\nnavigating to \"xyz://google.com\", waiting until \"load\"\n============================================================",
                            "stack": "Error: page.goto: net::ERR_ABORTED at xyz://google.com\n=========================== logs ===========================\nnavigating to \"xyz://google.com\", waiting until \"load\"\n============================================================\n    at Navigate.performAs (/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts:25:21)\n    at Actor.<anonymous> (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:123:55)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:31:71\n    at __awaiter (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:27:12)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:110:41",
                            "location": {
                              "file": "/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts",
                              "column": 21,
                              "line": 25
                            },
                            "snippet": "\u001b[90m   at \u001b[39m../src/web/actions/Navigate/Navigate.ts:25\n\n\u001b[0m \u001b[90m 23 |\u001b[39m     \u001b[36mpublic\u001b[39m performAs(actor\u001b[33m:\u001b[39m \u001b[33mActor\u001b[39m)\u001b[33m:\u001b[39m \u001b[33mPromise\u001b[39m\u001b[33m<\u001b[39m\u001b[36mnull\u001b[39m \u001b[33m|\u001b[39m \u001b[33mResponse\u001b[39m\u001b[33m>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m         \u001b[36mconst\u001b[39m page \u001b[33m=\u001b[39m \u001b[33mBrowseTheWeb\u001b[39m\u001b[33m.\u001b[39m\u001b[36mas\u001b[39m(actor\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mabilityAlias)\u001b[33m.\u001b[39mgetPage()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m         \u001b[36mreturn\u001b[39m page\u001b[33m.\u001b[39mgoto(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39murl)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[90m/**\u001b[39m\u001b[0m"
                          },
                          "location": {
                            "file": "./src/web/actions/Navigate/Navigate.ts",
                            "line": 25,
                            "column": 21
                          },
                          "startTime": "2025-11-06T10:45:52.452Z",
                          "steps": [],
                          "title": "page.goto(xyz://google.com)",
                          "status": "failed"
                        }
                      ]
                    },
                    {
                      "actor": "TestActor",
                      "activityType": "action",
                      "activityAction": "attemptsTo",
                      "activityDetails": [
                        {
                          "methodName": "Navigate"
                        },
                        {
                          "methodName": "unknown",
                          "parameters": {
                            "url": "https://google.com"
                          }
                        }
                      ],
                      "status": "passed",
                      "startTime": "2025-11-06T10:45:52.460Z",
                      "duration": 995,
                      "steps": [
                        {
                          "isPW": true,
                          "duration": 995,
                          "location": {
                            "file": "./src/web/actions/Navigate/Navigate.ts",
                            "line": 25,
                            "column": 21
                          },
                          "startTime": "2025-11-06T10:45:52.460Z",
                          "steps": [],
                          "title": "page.goto(https://google.com)",
                          "status": "passed"
                        }
                      ]
                    }
                  ],
                  "duration": 1004
                }
              ],
              "duration": 1005
            }
          ]
        }
      ]
    },
    {
      "testCaseId": "72defe0945df09a49d56-0b82b22faf77fd7ab1de",
      "titlePath": [
        "Testing screenplay-playwright-js web module",
        "Navigate"
      ],
      "project": "firefox",
      "suite": "reporter-cases.spec.ts",
      "location": {
        "file": "./__tests__/reporter-cases.spec.ts",
        "line": 51,
        "column": 5
      },
      "runs": [
        {
          "status": "passed",
          "startTime": "2025-11-06T10:45:50.150Z",
          "duration": 1256,
          "steps": [
            {
              "actor": "TestActor",
              "activityType": "task",
              "activityAction": "attemptsTo",
              "activityDetails": [
                {
                  "methodName": "NavigateTask"
                },
                {
                  "methodName": "step",
                  "parameters": {}
                }
              ],
              "status": "passed",
              "location": {
                "file": "./__tests__/reporter-cases.spec.ts",
                "line": 52,
                "column": 20
              },
              "startTime": "2025-11-06T10:45:50.716Z",
              "steps": [
                {
                  "actor": "TestActor",
                  "activityType": "task",
                  "activityAction": "attemptsTo",
                  "activityDetails": [
                    {
                      "methodName": "NavigateInnerTask"
                    },
                    {
                      "methodName": "unknown",
                      "parameters": {}
                    }
                  ],
                  "status": "passed",
                  "startTime": "2025-11-06T10:45:50.716Z",
                  "steps": [
                    {
                      "actor": "TestActor",
                      "activityType": "action",
                      "activityAction": "attemptsTo",
                      "activityDetails": [
                        {
                          "methodName": "Navigate"
                        },
                        {
                          "methodName": "unknown",
                          "parameters": {
                            "url": "xyz://google.com"
                          }
                        },
                        {
                          "methodName": "orSkipOnFail"
                        }
                      ],
                      "status": "skipped",
                      "startTime": "2025-11-06T10:45:50.717Z",
                      "duration": 11,
                      "steps": [
                        {
                          "isPW": true,
                          "duration": 11,
                          "error": {
                            "message": "page.goto: net::ERR_ABORTED at xyz://google.com\n=========================== logs ===========================\nnavigating to \"xyz://google.com\", waiting until \"load\"\n============================================================",
                            "stack": "Error: page.goto: net::ERR_ABORTED at xyz://google.com\n=========================== logs ===========================\nnavigating to \"xyz://google.com\", waiting until \"load\"\n============================================================\n    at Navigate.performAs (/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts:25:21)\n    at Actor.<anonymous> (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:123:55)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:31:71\n    at __awaiter (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:27:12)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:110:41",
                            "location": {
                              "file": "/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts",
                              "column": 21,
                              "line": 25
                            },
                            "snippet": "\u001b[90m   at \u001b[39m../src/web/actions/Navigate/Navigate.ts:25\n\n\u001b[0m \u001b[90m 23 |\u001b[39m     \u001b[36mpublic\u001b[39m performAs(actor\u001b[33m:\u001b[39m \u001b[33mActor\u001b[39m)\u001b[33m:\u001b[39m \u001b[33mPromise\u001b[39m\u001b[33m<\u001b[39m\u001b[36mnull\u001b[39m \u001b[33m|\u001b[39m \u001b[33mResponse\u001b[39m\u001b[33m>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m         \u001b[36mconst\u001b[39m page \u001b[33m=\u001b[39m \u001b[33mBrowseTheWeb\u001b[39m\u001b[33m.\u001b[39m\u001b[36mas\u001b[39m(actor\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mabilityAlias)\u001b[33m.\u001b[39mgetPage()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m         \u001b[36mreturn\u001b[39m page\u001b[33m.\u001b[39mgoto(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39murl)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[90m/**\u001b[39m\u001b[0m"
                          },
                          "location": {
                            "file": "./src/web/actions/Navigate/Navigate.ts",
                            "line": 25,
                            "column": 21
                          },
                          "startTime": "2025-11-06T10:45:50.717Z",
                          "steps": [],
                          "title": "page.goto(xyz://google.com)",
                          "status": "failed"
                        }
                      ]
                    },
                    {
                      "actor": "TestActor",
                      "activityType": "action",
                      "activityAction": "attemptsTo",
                      "activityDetails": [
                        {
                          "methodName": "Navigate"
                        },
                        {
                          "methodName": "unknown",
                          "parameters": {
                            "url": "https://google.com"
                          }
                        }
                      ],
                      "status": "passed",
                      "startTime": "2025-11-06T10:45:50.728Z",
                      "duration": 1111,
                      "steps": [
                        {
                          "isPW": true,
                          "duration": 1110,
                          "location": {
                            "file": "./src/web/actions/Navigate/Navigate.ts",
                            "line": 25,
                            "column": 21
                          },
                          "startTime": "2025-11-06T10:45:50.729Z",
                          "steps": [],
                          "title": "page.goto(https://google.com)",
                          "status": "passed"
                        }
                      ]
                    }
                  ],
                  "duration": 1124
                }
              ],
              "duration": 1124
            }
          ]
        }
      ]
    },
    {
      "testCaseId": "72defe0945df09a49d56-cb0cd38ce3d742cddffd",
      "titlePath": [
        "Testing screenplay-playwright-js web module",
        "Navigate"
      ],
      "project": "chromium",
      "suite": "reporter-cases.spec.ts",
      "location": {
        "file": "./__tests__/reporter-cases.spec.ts",
        "line": 51,
        "column": 5
      },
      "runs": [
        {
          "status": "passed",
          "startTime": "2025-11-06T10:45:50.151Z",
          "duration": 1303,
          "steps": [
            {
              "actor": "TestActor",
              "activityType": "task",
              "activityAction": "attemptsTo",
              "activityDetails": [
                {
                  "methodName": "NavigateTask"
                },
                {
                  "methodName": "step",
                  "parameters": {}
                }
              ],
              "status": "passed",
              "location": {
                "file": "./__tests__/reporter-cases.spec.ts",
                "line": 52,
                "column": 20
              },
              "startTime": "2025-11-06T10:45:50.736Z",
              "steps": [
                {
                  "actor": "TestActor",
                  "activityType": "task",
                  "activityAction": "attemptsTo",
                  "activityDetails": [
                    {
                      "methodName": "NavigateInnerTask"
                    },
                    {
                      "methodName": "unknown",
                      "parameters": {}
                    }
                  ],
                  "status": "passed",
                  "startTime": "2025-11-06T10:45:50.737Z",
                  "steps": [
                    {
                      "actor": "TestActor",
                      "activityType": "action",
                      "activityAction": "attemptsTo",
                      "activityDetails": [
                        {
                          "methodName": "Navigate"
                        },
                        {
                          "methodName": "unknown",
                          "parameters": {
                            "url": "xyz://google.com"
                          }
                        },
                        {
                          "methodName": "orSkipOnFail"
                        }
                      ],
                      "status": "skipped",
                      "startTime": "2025-11-06T10:45:50.737Z",
                      "duration": 9,
                      "steps": [
                        {
                          "isPW": true,
                          "duration": 8,
                          "error": {
                            "message": "page.goto: net::ERR_ABORTED at xyz://google.com\n=========================== logs ===========================\nnavigating to \"xyz://google.com\", waiting until \"load\"\n============================================================",
                            "stack": "Error: page.goto: net::ERR_ABORTED at xyz://google.com\n=========================== logs ===========================\nnavigating to \"xyz://google.com\", waiting until \"load\"\n============================================================\n    at Navigate.performAs (/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts:25:21)\n    at Actor.<anonymous> (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:123:55)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:31:71\n    at __awaiter (/Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:27:12)\n    at /Users/bru0008k/code/testla-screenplay-playwright-js/node_modules/@testla/screenplay/lib/screenplay/Actor.js:110:41",
                            "location": {
                              "file": "/Users/bru0008k/code/testla-screenplay-playwright-js/src/web/actions/Navigate/Navigate.ts",
                              "column": 21,
                              "line": 25
                            },
                            "snippet": "\u001b[90m   at \u001b[39m../src/web/actions/Navigate/Navigate.ts:25\n\n\u001b[0m \u001b[90m 23 |\u001b[39m     \u001b[36mpublic\u001b[39m performAs(actor\u001b[33m:\u001b[39m \u001b[33mActor\u001b[39m)\u001b[33m:\u001b[39m \u001b[33mPromise\u001b[39m\u001b[33m<\u001b[39m\u001b[36mnull\u001b[39m \u001b[33m|\u001b[39m \u001b[33mResponse\u001b[39m\u001b[33m>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m         \u001b[36mconst\u001b[39m page \u001b[33m=\u001b[39m \u001b[33mBrowseTheWeb\u001b[39m\u001b[33m.\u001b[39m\u001b[36mas\u001b[39m(actor\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mabilityAlias)\u001b[33m.\u001b[39mgetPage()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m         \u001b[36mreturn\u001b[39m page\u001b[33m.\u001b[39mgoto(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39murl)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[90m/**\u001b[39m\u001b[0m"
                          },
                          "location": {
                            "file": "./src/web/actions/Navigate/Navigate.ts",
                            "line": 25,
                            "column": 21
                          },
                          "startTime": "2025-11-06T10:45:50.738Z",
                          "steps": [],
                          "title": "page.goto(xyz://google.com)",
                          "status": "failed"
                        }
                      ]
                    },
                    {
                      "actor": "TestActor",
                      "activityType": "action",
                      "activityAction": "attemptsTo",
                      "activityDetails": [
                        {
                          "methodName": "Navigate"
                        },
                        {
                          "methodName": "unknown",
                          "parameters": {
                            "url": "https://google.com"
                          }
                        }
                      ],
                      "status": "passed",
                      "startTime": "2025-11-06T10:45:50.746Z",
                      "duration": 1147,
                      "steps": [
                        {
                          "isPW": true,
                          "duration": 1147,
                          "location": {
                            "file": "./src/web/actions/Navigate/Navigate.ts",
                            "line": 25,
                            "column": 21
                          },
                          "startTime": "2025-11-06T10:45:50.746Z",
                          "steps": [],
                          "title": "page.goto(https://google.com)",
                          "status": "passed"
                        }
                      ]
                    }
                  ],
                  "duration": 1156
                }
              ],
              "duration": 1157
            }
          ]
        }
      ]
    }
  ]
}
