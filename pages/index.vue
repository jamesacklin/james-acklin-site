<template>
  <div v-html="content" class=""></div>
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

<style>
</style>
