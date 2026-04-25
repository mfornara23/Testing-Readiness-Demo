# Testing Readiness Demo

A small monorepo-style demo that runs **unit**, **end-to-end (Playwright)**, and **performance (JMeter Java DSL)** checks. GitHub Actions runs them in three ordered stages.

## Repository layout

| Folder | Purpose |
|--------|---------|
| `unit-demo/` | Dummy JavaScript module and five Node.js unit tests (`node --test`). |
| `e2e-playwright/` | Two Playwright tests against the OpenCart demo store. |
| `performance-demo/` | One Maven test using [jmeter-java-dsl](https://abstracta.github.io/jmeter-java-dsl/) against [Demoblaze](https://www.demoblaze.com/). |

## Prerequisites

- **Node.js** 20+ (CI uses 20).
- **Java** 17 and **Maven** for the performance module.
- Network access to external demo sites (unit tests do not need it).

## Run tests locally

### Unit tests

```bash
cd unit-demo
npm install
npm test
```

### E2E tests (Playwright)

Targets [OpenCart demo home](http://opencart.abstracta.us/index.php?route=common/home).

```bash
cd e2e-playwright
npm install
npx playwright install --with-deps chromium
npm test
```

### Performance test

Runs **1 virtual user** and **10 iterations** against the Demoblaze home page.

```bash
cd performance-demo
mvn -B test
```

## Continuous integration

Workflow: [`.github/workflows/test-pipeline.yml`](.github/workflows/test-pipeline.yml).

Triggers on **push** (all branches) and **pull_request**.

Stages (each job runs only if the previous one succeeds):

1. **unit-testing** — `unit-demo`: `npm install` and `npm test`.
2. **e2e-testing** — `e2e-playwright`: install Chromium, then `npm test`.
3. **perf-testing** — `performance-demo`: Temurin JDK 17 with Maven cache, then `mvn -B test`.

## External services

E2E and performance tests depend on third-party demo sites. If a site is down or its HTML changes, those tests may fail even when your code is unchanged.
