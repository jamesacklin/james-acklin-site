const { join } = require('path')
const dir = require('node-dir')
const routesArray = []
const fs = require('fs')
const _ = require('lodash')

var files = fs.readdirSync('./static/markdown');

function createRoutesArray() {
  files.forEach(function (file) {
      var name = file.substr(0, file.lastIndexOf('.'));
      var route = '/' + name
      routesArray.push(route)
  });
}

function returnRoutes() {
  dir.readFiles('./static/markdown', {
        match: /.md$/,
        shortName: true,
        exclude: /^\./
        }, function(err, content, next) {
            if (err) throw err;
            // console.log('content:', content);
            next();
        },
        function(err, files){
            if (err) throw err;
            // fileNamesArray = [];
            files.forEach(function (file) {
                var name = file.substr(0, file.lastIndexOf('.'));
                var path = '/' + name
                return path
            });
        });
}

function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/${slug}`
}

module.exports = {
  head: {
    title: 'nuxt-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans' }
    ]
  },
  modules: [
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    linkify: true
  },
  css: [
    '~assets/main.css',
    '~assets/transition.css'
  ],
  loading: {
    color: '#FFFFFF'
  },
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  },
  build: {
    extend (config, { isDev, isClient }) {
      const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.css$/')
      cssLoader.use.push('postcss-loader')
      if (isDev && isClient) {
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
