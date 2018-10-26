---
title: stix-gates
sidebar_label: Setup
id: version-3.0.0-gates-setup
original_id: gates-setup
---

## Setup
If you initialized a new stix project using the [boards cli stix preset](https://github.com/SpoonX/boards-preset-stix),
stix-gates will already be included in your project and you can move on to the [usage section](usage).
If not, keep reading.

1. In your stix project, simply run `yarn add stix-gates`.
2. Add the module to your project's `src/config/modules.ts`:

```ts
import { ModuleManagerConfigInterface } from 'stix';
import { StixGates } from 'stix-gates';

export const modules: ModuleManagerConfigInterface = [
  StixGates,
  // Your other modules.
];
```

### Setting up gates

Setting up stix-gates is easy.

1. Make sure you have a `gates.ts` at `src/config/gates.ts`.
2. Add it to your config (_add `export * from './gates';` to your `src/config/index.ts`_)

Done. The stix-gates module will do the rest... Except for writing your gates of course, for which I do encourage you to keep reading!
