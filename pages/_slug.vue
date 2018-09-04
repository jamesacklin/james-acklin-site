<template>
  <div :key="$route.params.slug">
    <div v-html="content" class="lh-copy center mw-9 pa3"></div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData({ params }) {
    const fileContent = await import(`~/static/markdown/${params.slug}.md`)
    return {
      content: fileContent
    }
  }
}
</script>

<style scoped>
>>> h3 {
  font-weight: normal;
}
>>> ul {
  padding-left: 1.33em;
}

>>> li {
  list-style: none;
  position: relative;
}

>>> li:before {
  content: '→';
  position: absolute;
  left: -1.33em;
}

>>> .content {
  max-width: 34em;
  margin: auto auto;
}

>>> .figure {
  text-align: center;
  margin: 5rem 0;
}

>>> .figure h2,
>>> .figure h3 {
  max-width: 22.5em;
  text-align: left;
  margin: 3em auto;
}
</style>
