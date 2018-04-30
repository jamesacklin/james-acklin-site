# nuxt-site

A Nuxt.js project which processes Markdown from `/static/markdown`, dynamically creates routes via the filename slug, and renders the markdown in a page template.

Designed to be as little infrastructure as possible to get a reasonable SPA-style site up and running.

Links to routes themselves are still handspun in `/components/Header.vue`, since I don't want to mess with processing frontmatter.

Borrows liberally from [@davidroyer/nuxt-markdown-example](https://github.com/davidroyer/nuxt-markdown-example).

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Coming Soon
  - `now` deploying (maybe?)
  - More sophisticated `dat://` publishing. Now looks to the `dist` directory and spits out a dat key, but should probably integrate with [@beakerbrowser/homebase](https://github.com/beakerbrowser/homebase) for https mirroring

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
