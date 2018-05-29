<template>
  <nav id="mainNav" class="pa3 mw-9 cf">
    <div class="fl w-50">
      <h1 class="white f6 f5-ns f4-l ma0 pa0 normal lh-copy">James Acklin</h1>
    </div>
    <ul class="fl list ma0 pa0 lh-copy w-50 flex justify-between">
      <li class="" v-for="(link, page, key) in navigation" v-bind:key="key">
        <nuxt-link class="nav-item db link underline-hover white" v-html="page" v-bind:to="link"></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      navigation: {
        Index: '/',
        Reading: '/reading',
        Currently: '/currently'
      }
    };
  },
  mounted() {
    this.height = document.getElementById('mainNav').clientHeight;
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 100%;
  left: 0;
  transform: rotate(-90deg);
  transform-origin: top left;
  width: 100vh;
  background: #9e9f89;
}
a,
.link {
  color: #ffffff;
}
.nuxt-link-exact-active {
  position: relative;
}
.nuxt-link-exact-active:before {
  content: '→';
  position: absolute;
  left: -1.33em;
}
</style>
