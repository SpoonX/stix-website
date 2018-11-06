---
title: Responses
---

Responses are formalized in stix. There are five classes of responses and they're all configurable allowing you to set up your own response format _(can be used by for example a GraphQL module)_.

## Responses

A response class is what holds the headers, response code, a body (if there is one) etc. It is then formatted, by default into a json response.

### ResponseService

This is the last layer of rabbit hole, I pinky promise.

The ResponseService is what helps you format HttpResponses. It's a set of classes that embody the default http responses.

There are 5 classes of response:

- InformationalResponse
- movedPermanently
- ServerErrorResponse
- ClientErrorResponse
- SuccessfulResponse

Each class has the methods (with response codes that belong to it) belonging to that class. For example, `notFound` can be found on the `ClientErrorResponse`, `movedPermanently` on the `movedPermanently` and so on.

I won't list every single method here because they're already documented in the [API docs](../api/classes/response).

## Overriding responses

Code speaks. Here's the config available to override responses:

```ts
import {
  ClientErrorResponse,
  InformationalResponse,
  RedirectionResponse,
  ResponseConfigInterface,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'stix';

/**
 * This file is here to show that it is possible to implement your own responses.
 * If you don't like the defaults provided by stix you can extend them and link to your own response classes.
 */
export const response: ResponseConfigInterface = {
  responses: {
    informational: InformationalResponse,
    successful: SuccessfulResponse,
    redirection: RedirectionResponse,
    clientError: ClientErrorResponse,
    serverError: ServerErrorResponse,
  },
};
```

When extending a class you're likely to want to change the way json is formatted (wrapping the data in an extra key, adding paging... you name it). The method response for this is `format`. Here's an example:

```ts
import { ClientErrorResponse } from 'stix';

export class MyClientErrorResponse extends ClientErrorResponse {
  format () {
    return { error: this.message, additional: this.data };
  }
}
```

