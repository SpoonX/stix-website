---
title: Quick start
original_id: quick-start
id: version-0.0.1-quick-start
---

## Stix CLI

The quickest way to get started is by using stix-cli to set up a new project. Creating a new application can be done like so:

1. Install stix cli: `yarn global add stix-cli`
2. Create a new project: `stix init project-name`
3. Party.

## Running

Now your application is ready, navigate into it. _(`cd $_` if you followed the steps above)_. 
Run your newly created application server using: `yarn dev` and test it by visiting [http://localhost:1991/](http://localhost:1991/).

If all went well you should be greeted with a kind JSON response with the traditional `{ "Hello": "world!" }`.
 
- _To also display debug output: `DEBUG=stix:* yarn dev`_
- _When you're ready to make a build for deployment run `yarn build`._

## What's next

The documentation has been written in an incremental manner and have been sorted as such. 
This means you can read the documentation top-down and learn more about what's possible.

...Or just jump around and click random links like I know you will, you rebel.

I like you. Happy coding!
