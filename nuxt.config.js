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
    title: "Index",
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
      }
    ]
  },
  router: {
    routes: [
      {
        path: "/",
        redirect: {
          name: "index"
        }
      },
      {
        path: "/index",
        name: "index"
      }
    ]
  },
  modules: ["@nuxtjs/pwa"],
  plugins: [],
  css: [],
  loading: { color: "#000000" },
  manifest: {
    name: "James Acklin",
    short_name: "j9n",
    description: "James Acklin, designer + developer",
    lang: "en-us",
    dir: "ltr",
    background_color: "#FFF",
    theme_color: "#0000ff",
    display: "standalone",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
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
