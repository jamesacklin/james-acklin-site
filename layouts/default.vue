<template>
  <main class="near-black">
    <site-header></site-header>
    <nuxt/>
    <site-footer></site-footer>
  </main>
</template>

<script>
import SiteHeader from "~/components/Header.vue";
import SiteFooter from "~/components/Footer.vue";

export default {
  data() {
    return {
      navHeight: null
    };
  },
  components: {
    SiteHeader,
    SiteFooter
  },
  beforeRouteLeave(to, from, next) {}
};
</script>

<style lang="css">
main {
  font-family: 'AUTHENTIC Sans', sans-serif;
}
a,
.link {
  color: #9e9f89;
}
a:hover {
  text-decoration: none;
}
a:focus,
.link:focus {
  outline: none;
}

@media (max-height: 28em) {
  main { padding-top: 2em; }
}

@media (max-height: 28em) and (min-width: 30em){
  main { padding-top: 5rem; }
}

@media (min-height: 28em){
  main {
    padding-left: 3rem;
  }
}

@media (min-width: 30em) and (min-height: 28em){
  main { padding-left: 4rem }
}
</style>
