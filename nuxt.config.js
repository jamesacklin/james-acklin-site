const fs = require("fs");

const files = fs.readdirSync("./markdown");

function getSlugs(post) {
  let slug = post.substr(0, post.lastIndexOf("."));
  return `/${slug}`;
}

module.exports = {
  mode: "universal",
  head: {
    htmlAttrs: {
      lang: "en-us"
    },
    title: "James Acklin",
    titleTemplate: "%s - James Acklin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "James Acklin, designer +  developer"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,300i|Work+Sans:400"
      }
    ]
  },
  modules: ["@nuxtjs/pwa"],
  axios: {},
  plugins: [],
  css: [],
  loading: { color: "#000000" },
  manifest: {
    name: "James Acklin",
    short_name: "ja",
    description: "James Acklin, designer + developer",
    lang: "en-us",
    dir: "ltr",
    background_color: "#FFF",
    theme_color: "#000",
    display: "standalone",
    orientation: "portrait-primary"
  },
  generate: {
    routes: function() {
      return files.map(getSlugs);
    },
    cache: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },
  build: {
    postcss: {
      plugins: {},
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    extractCSS: true,
    extend(config, ctx) {
      // Load markdown files as raw strings
      config.module.rules.push({
        test: /\.md$/,
        loader: "raw-loader"
      });
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    }
  }
};
