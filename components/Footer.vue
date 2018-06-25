<template>
  <footer class="pa3 mw-9 lh-copy f6 bt b--silver cf">
    <div class="fl w-100 w-50-ns pr3">
      <p class="measure">All creative work property of its respective owner.</p>
      <!-- <p class="measure">Updated somedate</p> -->
    </div>
    <div class="fl w-100 w-50-ns">
      <h4 class="mb0 mt3 normal">Elsewhere</h4>
      <ul class="list pa0">
        <li v-for="(link, service, key) in social" v-bind:key="key">
          <a class="link underline-hover" v-html="service" v-bind:href="link"></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        social: {
          'Email': 'mailto:james.acklin@gmail.com',
          'Twitter': 'https://www.twitter.com/jamesacklin',
          'Are.na': 'https://are.na/james-acklin/'
        }
      }
    }
  }
</script>
