const { join } = require('path')
const dir = require('node-dir')
const routesArray = []
const fs = require('fs')

var files = fs.readdirSync('./static/markdown');

function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/${slug}`
}

module.exports = {
  mode: 'universal',
  head: {
    htmlAttrs: {
        lang: 'en'
    },
    title: 'James Acklin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'James Acklin, designer + developer' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans' }
    ]
  },
  modules: [
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      ['markdown-it-container', 'content'],
      ['markdown-it-container', 'figure']
    ]
  },
  css: [
    '~assets/main.css',
    '~assets/transition.css'
  ],
  loading: {
    color: '#9e9f89'
  },
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  },
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
