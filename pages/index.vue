<template>
  <div v-html="content" class="lh-copy measure-wide center mw-9 pa3"></div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData ({params}) {
    const fileContent = await import(`~/static/markdown/index.md`)
    return {
      content: fileContent
    }
  }
}
</script>

<style scoped>
  >>> p:first-of-type { font-size: 1.5rem; }
</style>
