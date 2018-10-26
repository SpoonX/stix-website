---
title: stix-gates
sidebar_label: About
id: version-3.0.0-gates-about
original_id: gates-about
---

## About

A [stix](https://github.com/SpoonX/stix) module that allows you to setup enrichers, validators and infinitely more for actions.

## What are gates?

Gates are like middleware, but different. They allow you to grant or reject passage. They sit between your router and your action, securing your endpoints. Here's a simplified overview of the flow:

```
Request--->Router+--->Gates+------>Dispatcher+
                 |         |                 |
                 v         v                 v
                404       4xx               2xx
                 |         |                 |
                 +---------+-----------------+-->Response
```

- The request will pass through the gates **in the order you defined them**.
- A gate is allowed to return `undefined`, `boolean` or a `stix.Response` instance.
- If a gate denies access to the request, the request goes straight to the response phase.
