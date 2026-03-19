# Constants

## STRUCTURED_LOGS_ENVVAR_NAME

This constant determines the name of the environment variable to be set during runtime to enable structured logs to stdout.

Usage:

```bash
// activating structured logs to stdout
process.env[STRUCTURED_LOGS_ENVVAR_NAME] = 'true';
```

## EXEC_STATUS

Determines the state an operation can be in. It mainly is used in internal flows and for logging.