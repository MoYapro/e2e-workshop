# End 2 End demo

## Run
- E2E tests are executed with https://codecept.io
- to run use run_e2e.sh

## Writing tests

### Features

- Features are written in [Gherkin](https://codecept.io/bdd/#what-is-behavior-driven-development)
- Feature files are placed in [`./features`](features)
- Features may contain multiple scenarios

### Steps

- Steps contain codeceptjs code to implement each step (line) from a feature test
- Steps are places inside [`./step_definitions`](step_definitions) folder

# Run books
## Run a specific test
```shell
npx codeceptjs run --steps --reporter mocha-multi --verbose --grep "<Test or part of test name here>"
```
```shell
npx codeceptjs run --steps --reporter mocha-multi --verbose --grep "<Test or part of test name here>"
```


## Configure browser visibility or timeouts
Edit the file [codecept.conf.js](codecept.conf.js) and see configs in `Playwright` object.

## What to do if failing screenshot just white
Maybe the codeception does not find the frontend. Configure it:
```shell
export BASE_URL=http://localhost:1234/66
```
