import implicitFigures from "markdown-it-implicit-figures";
import namedHeadings from "markdown-it-named-headings";
import modifyToken from "markdown-it-modify-token";
import footnote from "markdown-it-footnote";

module.exports = {
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
        content: "James Acklin, designer and front-end developer in Pittsburgh, PA"
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
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,300i"
      }
    ]
  },
  modules: [
    [
      "@nuxtjs/markdownit",
      {
        html: true,
        linkify: true,
        use: [implicitFigures, namedHeadings, modifyToken, footnote]
      }
    ]
  ],
  plugins: [],
  css: [],
  loading: { color: "#000000" }
  // build: {
  //   postcss: {
  //     plugins: {},
  //     preset: {
  //       autoprefixer: {
  //         grid: true
  //       }
  //     }
  //   },
  //   extractCSS: true,
  //   extend(config, ctx) {
  //     if (ctx.isDev && ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: "pre",
  //         test: /\.(js|vue)$/,
  //         loader: "eslint-loader",
  //         exclude: /(node_modules)/,
  //         options: {
  //           fix: true
  //         }
  //       });
  //     }
  //   }
  // }
};
