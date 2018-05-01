<template>
  <div :key="$route.params.slug">
    <div v-html="content" class="lh-copy measure-wide center mw-9 pa3"></div>
  </div>
</template>

<script>

export default {
  transition: 'fade',
  async asyncData ({params}) {
    const fileContent = await import(`~/static/markdown/${params.slug}.md`)
    return {
      content: fileContent
    }
  }
}
</script>

<style>

</style>
