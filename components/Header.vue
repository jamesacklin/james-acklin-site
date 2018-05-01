<template>
  <nav class="pa3 mw-9 cf">
    <div class="fl w-50">
      <h1 class="white f6 f5-ns f4-l ma0 pa0 normal lh-copy">James Acklin</h1>
    </div>
    <ul class="fl list ma0 pa0 lh-copy w-50">
      <li v-for="(page, key) in navigation" v-bind:key="key">
        <nuxt-link class="nav-item link underline-hover white" v-bind:to="page[1]">{{ page[0] }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data(){
      return {
        navigation: [
          ['Index', '/'],
          ['A page', '/test1'],
          ['Another Page', '/test2'],
        ]
      }
    }
  }
</script>

<style scoped>
  nav { background: #9e9f89; }
  .nuxt-link-exact-active {
    position: relative;
  }
  .nuxt-link-exact-active:before {
    content: "→";
    position: absolute;
    left: -1.33rem;
  }
</style>
