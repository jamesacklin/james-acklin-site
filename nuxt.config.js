import implicitFigures from "markdown-it-implicit-figures";
import html5embed from "markdown-it-html5-embed";
import namedHeadings from "markdown-it-named-headings";
import modifyToken from "markdown-it-modify-token";
import footnote from "markdown-it-footnote";
const fs = require("fs");

const files = fs.readdirSync("./static/markdown");

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
  modules: [
    "@nuxtjs/pwa",
    [
      "@nuxtjs/markdownit",
      {
        html: true,
        linkify: true,
        typographer: true,
        quotes: "“”‘’",
        use: [
          implicitFigures,
          namedHeadings,
          modifyToken,
          footnote,
          [
            html5embed,
            {
              useImageSyntax: false,
              useLinkSyntax: true,
              isAllowedHttp: true,
              renderFn(properties) {
                switch (properties.mediaType) {
                  case "video":
                    return `
                    <figure class="video">
                      <video
                        data-src="${properties.url}"
                        poster="${properties.url.replace(".mp4", ".jpg")}"
                        preload="none"
                        autoplay
                        loop
                        controls="false"
                      ></video>
                    </figure>
                  `;
                  case "audio":
                    return `<audio src="${properties.url}" controls></audio>`;
                }
              }
            }
          ]
        ]
      }
    ]
  ],
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
