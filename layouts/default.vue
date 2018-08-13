<template>
  <main class="f6 f5-ns f4-l near-black pl4 pl5-ns">
    <site-header></site-header>
    <nuxt/>
    <site-footer></site-footer>
  </main>
</template>

<script>
import SiteHeader from '~/components/Header.vue';
import SiteFooter from '~/components/Footer.vue';

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
  beforeRouteLeave(to, from, next) {
  }
};
</script>

<style>
main {
  font-family: 'Work Sans';
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
</style>
