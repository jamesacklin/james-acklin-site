<template>
  <header>
    <div>James Acklin</div>
    <div>
      <nuxt-link to="/">home page</nuxt-link>
      <br />
      <nuxt-link to="/about">about page</nuxt-link>
      <br />
      <nuxt-link to="/hello">hello.md</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
header {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  padding: 1rem 1rem 4rem 1rem;
  margin-top: -0.3rem;
}

header > div:nth-child(1) {
  grid-column: 1 / 7;
}
header > div:nth-child(2) {
  grid-column: 7 / 12;
}
</style>
