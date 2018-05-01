<template>
  <footer class="pa3 mw-9 lh-copy f6 bt b--silver cf">
    <div class="fl w-50-l">
      <p class="measure">All creative work property of its respective owner.</p>
      <p class="measure">Updated somedate</p>
    </div>
    <div class="fl w-50-l">
      <p>

        <a class="link underline-hover" v-html="Object.keys(social)[0]" :href="'mailto:' + social.Email"></a>,
        <a class="link underline-hover" v-html="Object.keys(social)[1]" :href="social.Arena"></a>, or
        <a class="link underline-hover" v-html="Object.keys(social)[2]" :href="social.Twitter"></a>
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        social: {
          'Email': 'james.acklin@gmail.com',
          'Arena': 'http://are.na/james-acklin/',
          'Twitter': 'http://www.twitter.com/jamesacklin'
        }
      }
    }
  }
</script>

<style scoped>
  .link {
    color: #9e9f89;
  }
</style>
