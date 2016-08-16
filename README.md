# swagger-mock-server

Summary:

Starts a simple nodeJS server and loads the Swagger Spec


# Build & Run

```Shell
./run.sh <spec-file-fullpath>
```

# Environment Variables

| Name            | Type          | Description
|-----------------|---------------|-------------
| **APP_PORT**  | **Integer**   | Port in which application will start, if no port , will choose `ephemeral` port number.
| **`SPEC_FILE`** | **String**    | Full file path of the Swagger spec file (Supports Yaml file).
