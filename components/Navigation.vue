<template>
  <header>
    <div>JAMES ACKLIN</div>
    <div>
      <nuxt-link to="/index">Index</nuxt-link>
      <br />
      <nuxt-link to="/currently">Currently</nuxt-link>
    </div>
    <div>
      <span style="text-decoration: underline;">PROJECTS</span>
      <br />
      <nuxt-link to="/rhiza">Nielsen Rhiza</nuxt-link>
      <br />
      <nuxt-link to="/rhiza-helpsite">Rhiza Helpsite</nuxt-link>
      <br />
      <nuxt-link to="/rhiza-explorer">Rhiza Explorer</nuxt-link>
      <br />
      <nuxt-link to="/logos">Misc. Logos</nuxt-link>
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
  column-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  padding: 1rem 1rem 4rem 1rem;
  margin-top: -0.3rem;
}

header > div:nth-child(1) {
  grid-column: 1 / 6;
}

header > div:nth-child(2),
header > div:nth-child(3) {
  grid-column: 6/13;
}

@media (min-width: 800px) {
  header > div:nth-child(2) {
    grid-column: 6 / 9;
  }

  header > div:nth-child(3) {
    grid-column: 9/13;
  }
}

a {
  text-decoration: none;
}

.nuxt-link-active {
  position: relative;
}

.nuxt-link-active:before {
  content: "→";
  position: absolute;
  left: -1.5em;
}
</style>
