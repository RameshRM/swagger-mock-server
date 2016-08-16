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
| **`APP_PORT`**  | **Integer**   | Port in which application will start, if no port , will choose `ephemeral` port number.
| **`SPEC_FILE`** | **String**    | Full file path of the Swagger spec file (Supports Yaml file).
|-----------------|---------------|-------------


> Default port is 3333.

# Paths

1. [Home](/) - Displays all the mounted paths , reponse types and the HTTP Verb.

2. [Cart](/cart) - Displays all the cart items as close to the spec.


# Demo

## [Sample SDD Cart](sdd.json)

## [Sample App](http://open-zip-7785.slc01.dev.ebayc3.com:3333/)

# CLI

```
  npm install mcli -g
  mcli add document
```
