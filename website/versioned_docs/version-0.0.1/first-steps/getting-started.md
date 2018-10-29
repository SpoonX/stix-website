---
title: Getting started
id: version-0.0.1-getting-started
original_id: getting-started
---

## Installation

Install Stix using `yarn` or `npm`:

```bash
yarn add stix
```
```bash
npm install stix --save
```

### Modules

Stix is responsible for starting the server, routing and handling responses, besides dealing with all the logic
that is essential to the application. This is where its modular nature comes into play: you install the modules that
_**you**_ need, avoiding unnecessary modules. You can override the configuration for every single module
(including the ones from stix itself), if needed. You have the power!

To get you started quickly, we recommend the following modules:

- [`stix-gates`](https://github.com/SpoonX/stix-gates): Allows you to setup enrichers, validators and infinitely more for actions.
- [`stix-wetland`](https://github.com/SpoonX/stix-wetland ): Integrates your stix with [wetland](https://github.com/SpoonX/wetland), a delightful mapping-based ORM.
It will make your life much easier, I promise.
- [`stix-swagger`]():



