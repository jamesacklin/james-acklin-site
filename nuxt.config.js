const { join } = require("path");
const dir = require("node-dir");
const routesArray = [];
const fs = require("fs");

var files = fs.readdirSync("./static/markdown");

function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf("."));
  return `/${slug}`;
}

module.exports = {
  mode: "universal",
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "James Acklin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "James Acklin, designer + developer"
      }
    ]
  },
  modules: ["@nuxtjs/markdownit", "@nuxtjs/pwa"],
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: [
      ["markdown-it-container", "content"],
      ["markdown-it-container", "figure"]
    ]
  },
  css: ["~assets/main.css", "~assets/transition.css"],
  plugins: [{ src: "~/plugins/vue-lazy.js", ssr: false }],
  loading: {
    color: "#9e9f89"
  },
  manifest: {
    name: "James Acklin",
    short_name: "James Acklin",
    description: "Personal site for James Acklin",
    lang: "en-us",
    dir: "ltr",
    background_color: "#fff",
    theme_color: "#9e9f89",
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
