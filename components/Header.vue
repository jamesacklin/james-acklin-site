<template>
  <nav class="pa3 mw-9 cf">
    <div class="fl w-50">
      <h1 class="white f6 f5-ns f4-l ma0 pa0 normal lh-copy">James Acklin</h1>
    </div>
    <ul class="fl list ma0 pa0 lh-copy w-50">
      <li v-for="(link, page, key) in navigation" v-bind:key="key">
        <nuxt-link class="nav-item db link underline-hover white" v-html="page" v-bind:to="link"></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data(){
      return {
        navigation: {
          'Index': '/',
          'Currently': '/currently'
        }
      }
    }
  }
</script>

<style scoped>
  nav {
    background: #9e9f89;
  }
  a, .link {
    color: #FFFFFF;
  }
  .nuxt-link-exact-active {
    position: relative;
  }
  .nuxt-link-exact-active:before {
    content: "→";
    position: absolute;
    left: -1.33rem;
  }
</style>
