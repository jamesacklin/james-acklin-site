<template>
  <footer class="pa3 mw-9 lh-copy f6 bt b--silver cf">
    <div class="fl w-100 w-50-ns pr3">
      <p class="measure">
        All creative work property of its respective owner.
      </p>
      <p class="measure">
        {{ formattedDate }}
      </p>
    </div>
    <div class="fl w-100 w-50-ns">
      <p class="mb0 normal">
        Elsewhere
      </p>
      <ul class="list pa0">
        <li
          v-for="(link, service, key) in social"
          :key="key"
        >
          <a
            class="link underline-hover"
            :href="link"
          >
            {{ service }} &rarr;
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
var manifest = require('../manifest')
export default {
  data() {
    return {
      manifest,
      social: {
        'Email': 'mailto:james.acklin@gmail.com',
        'GitHub': 'https://www.github.com/jamesacklin',
        'Are.na': 'https://are.na/james-acklin/'
      }
    }
  },
  computed: {
    formattedDate: function() {
      if (this.manifest.updated) {
        var date = new Date(this.manifest.updated)
        var day = date.getDate()
        var month = date.getMonth()
        var year = date
          .getFullYear()
          .toString()
          .substring(2)
        var pad = function(n) {
          return ('0' + n).slice(-2)
        }
        return (
          'Updated ' +
          [year, pad(month + 1), pad(day)].join('-') +
          ' @ ' +
          [
            pad(date.getHours()),
            pad(date.getMinutes()),
            pad(date.getSeconds())
          ].join(':') +
          'UTC'
        )
      } else {
        return ''
      }
    }
  }
}
</script>
