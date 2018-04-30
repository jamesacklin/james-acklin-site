<template>
  <div>
    <site-header></site-header>
    <nuxt/>
  </div>
</template>

<script>
  import SiteHeader from '~/components/Header.vue'

  export default {
    components: {
      SiteHeader
    },
    beforeRouteLeave(to,from,next){
      console.log(this)
    }
  }
</script>

<style>
</style>
