module.exports = {
  head: {
    title: "James Acklin",
    titleTemplate: "%s - James Acklin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js + Vuetify.js project" },
      {
        vmid: "og:title",
        property: "og:title",
        content: "Test title",
        template: chunk => `${chunk} - My page`
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,300i"
      }
    ]
  },
  plugins: [],
  css: [],
  loading: { color: "#3B8070" },
  build: {
    vendor: [],
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
