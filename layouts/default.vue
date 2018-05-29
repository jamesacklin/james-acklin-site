<template>
  <main v-bind:style="{paddingLeft: navHeight + 'px'}" class="f6 f5-ns f4-l near-black">
    <site-header ref="mainNav"></site-header>
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
    console.log(this);
  },
  mounted() {
    this.navHeight = this.$refs.mainNav._data.height;
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
